# IPC API Reference

## Overview

Communication between the **Renderer Process** (Vue SPA) and **Main Process** (Electron backend) uses Electron IPC (`ipcMain` / `ipcRenderer`).

Renderer can send via:

- `ipcRenderer.send()` — async (fire-and-forget)
- `ipcRenderer.invoke()` — async with promise response

Main sends via:

- `win.webContents.send()` — push to renderer

Source: `dist-electron/main.js`, `dist-electron/preload.mjs`

---

## Channels

### `set-select-device`

**Direction**: Renderer → Main (send)

Informs which device to select/connect to.

**Payload**:

```js
{
    vendorId: Number,   // 0x363C
    productId: Number,  // 0xEC05 or 0xEC06
    path: String        // HID device path
}
```

**Source**: `main.js:15454`

---

### `write-device`

**Direction**: Renderer → Main (invoke)

Sends an HID report to the device. Main will call `adapter.sendReport(11, data)`.

**Arguments**:

```text
(path: String, data: Number[])
```

- `path`: device path (key in device Map)
- `data`: array of decimal numbers to send as HID report

**Internal** (`main.js:15339-15343`):

```js
const adapter = nt.get(path);
if (adapter) {
    await adapter.sendReport(11, data); // reportId = 0x0B
}
```

---

### `close-device`

**Direction**: Renderer → Main (invoke)

Closes the HID connection to a specific device.

**Arguments**: `(path: String)`

**Return**: `Boolean` — true if successful

**Source**: `main.js:15345-15347`

---

### `device-data`

**Direction**: Main → Renderer (send)

HID response data from the device is sent to the renderer. This is the only channel through which raw HID data is forwarded.

**Payload**:

```js
{
    data: DataView,  // byte array response (CMD + data, without Report ID)
    path: String     // originating device path
}
```

**Internal** (`main.js:15329-15337`):

```js
const n = new Uint8Array(e).slice(1);  // strip first byte (Report ID 0x0B)
const i = new DataView(n.buffer);
Le.win.webContents.send("device-data", { data: i, path: t });
```

**In renderer** (`nodeHIDConfiguration-Cn5KyG1E.js:12386-12425`):

```js
report(e, t) {
    $e.arrayBuffer2Hex(t.buffer).then((n) => {
        n[2] === "00"
            ? this.reportCmd[n[0]](n.map((r) => $e.toDec(r)), e)
            : ...;
    });
}
```

---

### `get-firmware`

**Direction**: Renderer → Main (invoke)

Downloads a `.BIN` firmware file from a URL.

**Arguments**: `(url: String)`

**Return**: `ArrayBuffer` — firmware binary content

**Source** (`main.js:15511-15526`):

```js
it.handle("get-firmware", async (e, t) =>
    new Promise((r, n) => {
        fetch(t)
            .then((i) => {
                i.ok || n(new Error(`HTTP error! status: ${i.status}`));
                i.arrayBuffer().then((o) => r(o));
            })
            .catch((i) => n(i));
    }),
);
```

---

### `set-theme`

**Direction**: Renderer → Main (send)

Changes the Electron theme (dark/light).

**Payload**: `String` — `"system"`, `"light"`, or `"dark"`

**Source** (`main.js:15508-15509`):

```js
it.on("set-theme", (e, t) => {
    hd.themeSource = t;  // nativeTheme.themeSource
});
```

---

### `update-retry`

**Direction**: Renderer → Main (send)

Requests the auto updater to check for updates again.

**Source**: `main.js:15478-15480`

---

### `update-available`

**Direction**: Main → Renderer (send)

An update is available for download.

**Source**: `main.js:15467`

---

### `update-progress`

**Direction**: Main → Renderer (send)

Update download progress.

**Payload**: `Number` — progress percentage

**Source**: `main.js:15469`

---

### `update-downloaded`

**Direction**: Main → Renderer (send)

Update has been downloaded and is ready to install.

**Source**: `main.js:15472` — sets `isUpdating = true`

---

### `update-error`

**Direction**: Main → Renderer (send)

Error during update.

**Payload**: `String` — error message

**Source**: `main.js:15475`

---

## Security Note

Preload `dist-electron/preload.mjs` provides access via `contextBridge`:

```js
t.contextBridge.exposeInMainWorld("ipcRenderer", {
    on(...e)   { /* ipcRenderer.on */ },
    off(...e)  { /* ipcRenderer.off */ },
    send(...e) { /* ipcRenderer.send */ },
    invoke(...e) { /* ipcRenderer.invoke */ },
});

t.contextBridge.exposeInMainWorld("clipboard", {
    writeText(...e) { /* clipboard.writeText */ },
});
```

However, `contextIsolation: false` + `nodeIntegration: true` in `main.js:15401-15403` gives the renderer full access to Node.js, making the preload above effectively redundant for this application.
