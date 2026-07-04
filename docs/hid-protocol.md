# IRIS v2 NearLink — HID Protocol Mapping

This document contains the reverse-engineered HID protocol of the **IRIS v2 NearLink** mouse (Press Play / HHK), derived from the existing Electron desktop application source code. Original source line references are included for each section.

---

## 1. Device Identification

### Hardware ID

| Parameter | Value | Source |
|---|---|---|
| **Vendor ID** | `0x363C` (13884) | `src/native/hidAdapter.mjs:3` |
| **Product ID (Wired)** | `0xEC05` (60421) | `src/native/hidAdapter.mjs:4` |
| **Product ID (Dongle)** | `0xEC06` (60422) | `src/native/hidAdapter.mjs:4` |
| **Management UsagePage** | `0xFFA0` (65440) | `src/native/hidAdapter.mjs:30` |
| **Management Usage** | `0x02` | `hid_test.js:30` |

> There is also a legacy device with PID `0xFF06` / `0xFF07` (UsagePage `0xFFDF`) in `nodeHIDConfiguration-Cn5KyG1E.js:13130`, but it is not used in the Linux version.

### Device Profiles

Two device profiles in `nodeHIDConfiguration-Cn5KyG1E.js:12498-12509` and `:12812-12823`:

1. **IRISv2-NearLink** — Direct mouse (wired) — `vendorId:13884, productId:60421, usagePage:65440, usage:2, isDongle:false`
2. **IRISv2-NearLink Dongle** — Wireless receiver — `vendorId:13884, productId:60422, usagePage:65440, usage:2, isDongle:true`

---

## 2. HID Connection

### Connection Flow (Electron Main Process)

1. Renderer sends `set-select-device` with `{ vendorId, productId, path }` — `main.js:15454`
2. Main process calls `HidAdapter.getDeviceList()` — `main.js:15303`
3. Main process opens device via `new HidAdapter()` + `adapter.open(path)` — `main.js:15323`
4. Device stored in a `Map` keyed by path — `main.js:15324`
5. `data` listener forwarded to renderer via IPC `device-data` — `main.js:15333`
6. `select-hid-device` event automatically selects device — `main.js:15434`
7. **contextIsolation: false, nodeIntegration: true** — `main.js:15401-15403`

### HID Adapter Class

Source: `src/native/hidAdapter.mjs`

```text
HidAdapter
  static getDeviceList()              // Scan HID devices
  async open(path)                    // Open device (HIDAsync)
  async close()                       // Close device
  async sendReport(reportId, data)    // Send 64-byte report
  registerListeners(onData, onError)
  removeAllListeners()
```

### IPC Bridge

| Channel | Direction | Source |
|---|---|---|
| `set-select-device` | Renderer → Main | `main.js:15454` |
| `write-device` | Renderer → Main | `main.js:15339` |
| `close-device` | Renderer → Main | `main.js:15345` |
| `device-data` | Main → Renderer | `main.js:15333` |

---

## 3. Basic Packet Format (Transport Layer)

### Command (Write) — 64 bytes

```text
Byte 0:    0x0B (Report ID)
Byte 1:    CMD (command code, decimal)
Byte 2..n: Data payload
Bytes 63:  0x00 (padding)
```

Source:

- `hidAdapter.mjs:79-82` — `new Uint8Array(64)`, `buffer[0] = reportId`
- `nodeHIDConfiguration-Cn5KyG1E.js:12006-12013` — `sendReport(11, r)`
- `main.js:15342` — `adapter.sendReport(11, r)`
- `hid_test.js:56-62` — Report ID `0x0B`, 64-byte buffer

### Response (Read) — 64 bytes

```text
Byte 0:    CMD (echo, hex string)
Byte 1:    STATUS (0x00 = success)
Byte 2..n: Data payload
```

Source: `nodeHIDConfiguration-Cn5KyG1E.js:12386-12425`

```js
report(e, t) {
    $e.arrayBuffer2Hex(t.buffer).then((n) => {
        n[2] === "00"
            ? this.reportCmd[n[0]](n.map((r) => $e.toDec(r)), e)
            : ...
    })
}
```

Main process **strips byte 0** (Report ID) before sending to renderer — `main.js:15331`:

```js
const n = new Uint8Array(e).slice(1), i = new DataView(n.buffer);
Le.win.webContents.send("device-data", { data: i, path: t });
```

---

## 4. Command & Response Mapping

> All source lines reference `nodeHIDConfiguration-Cn5KyG1E.js` unless otherwise noted.

### 4.1 CMD 0x12 (18) — Status Update / Notification

**Send**: `[18, 18, ...data]` — `:12438-12439`

**Response** — `:12109-12140`:

| `e[2]` | Meaning | Field |
|---|---|---|
| `193 (0xC1)` | DPI Change | `current_dpi = e[3]` |
| `196 (0xC4)` | Battery/Power | `power = e[3]`, `is_charge = !!(!e[4] && e[5])` |
| `198 (0xC6)` | Sleep | `sleep = (e[4] >= 2)` |
| `194 (0xC2)` | Report Rate | `report_rate` / `usb_report_rate` |
| `199 (0xC7)` | Factory Reset done | `e[3] == 0` → reset complete |

---

### 4.2 CMD 0x13 (19) — GET DEVICE INFO

**Send**: `[19, 0, 0]` — `:12429-12430`

**Response** — `:12142-12190`:

| Byte | Field | Format |
|---|---|---|
| `e[3]` | **Mode** | `0/1/4/5` = wireless, `2/3/6/7` = wired |
| `e[10]` | Receiver version low | `(e[10] >> 4) & 0xF` = minor1, `e[10] & 0xF` = minor2 |
| `e[11]` | Receiver version high | Major |
| `e[12]` | Mouse version low | Same format |
| `e[13]` | Mouse version high | Major |
| `e[14]` | **CID** (Config ID) | |
| `e[15]` | **MID** (Model ID) | |
| `e[16]` | Charging flag | |
| `e[17]` | **Power** (battery %) | 0-100 |
| `e[19]` | Wireless connected | `== 1` |
| `e[20]` | **Current configuration** | 0-3 |

**Version**: `major * 10000 + minor1 * 100 + minor2`

---

### 4.3 CMD 0x14 (20) — GET SLEEP SETTING

**Send**: `[20, 0, 0]` — `:12432-12433`

**Response** — `:12191-12192`:

```text
sleep = !e[3]
```

---

### 4.4 CMD 0x15 (21) — GET BUTTON MAPPING

**Send**: `[21, 0, 0]` — `:12435-12436`

**Response** — `:12194-12208` — 6 buttons × 3 bytes:

| Index | Button | Byte0 | Byte1 | Byte2 |
|---|---|---|---|---|
| 0 | **Left** | `e[3]` | `e[4]` | `e[5]` |
| 1 | **Middle** | `e[6]` | `e[7]` | `e[8]` |
| 2 | **Right** | `e[9]` | `e[10]` | `e[11]` |
| 3 | **Backward** | `e[12]` | `e[13]` | `e[14]` |
| 4 | **Forward** | `e[15]` | `e[16]` | `e[17]` |
| 5 | **DPI Button** | `e[18]` | `e[19]` | `e[20]` |

Format: `[type, param1, param2]` — see §8.

---

### 4.5 CMD 0x16 (22) — SET BUTTON MAPPING

**Send**: `[22, 18, ...18_bytes_data]` — `:12438-12439`

Response — `:12210-12224`. 18 bytes = 6 buttons × 3 bytes.

---

### 4.6 CMD 0x17 (23) — GET MOUSE CONFIG

**Send**: `[23, 0, 0]` — `:12441-12442`

**Response** — `:12226-12268`:

| Offset | Field | Bytes | Source |
|---|---|---|---|
| `e[3]` (0) | **Wireless Report Rate** | 1 | `:12227` |
| `e[4]` (1) | **USB/Wired Report Rate** | 1 | `:12228` |
| `e[5]` (2) | **Max DPI** | 1 | `:12229` |
| `e[6]` (3) | **Current DPI** (index into DPI config) | 1 | `:12230` |
| `e[9]` (6) | **LOD** (1=1mm, 2=2mm) | 1 | `:12231` |
| `e[10]` (7) | **Key Debounce Time** | 1 | `:12232` |
| `e[11]` (8) | **Motion Sync Enable** | 1 | `:12233` |
| `e[13]` (10) | **Linear Correction Enable** | 1 | `:12234` |
| `e[14]` (11) | **Ripple Control Option** | 1 | `:12235` |
| `e[18]` (15) | **Sensor Power Saving** | 1 | `:12236` |
| `e[28]` (25) | **Sleep Time** | 1 | `:12237` |
| `e[30]` (27) | **RGB Effect** | 1 | `:12238` |
| `e[31]` (28) | **RGB Brightness** | 1 | `:12239` |
| `e[32]` (29) | **RGB Speed** | 1 | `:12240` |
| `e[33]` (30) | **LCD Show/Hide** | 1 | `:12244` |
| `e[34]` (31) | **LCD Move Shutoff** | 1 | `:12245` |
| `e[35]` (32) | **BLE 250Hz Enable** | 1 | `:12246` |

#### Report Rate Values — `:12505-12516, 12819-12830`

| Value | Rate |
|---|---|
| `1` | 1000 Hz |
| `2` | 500 Hz |
| `4` | 250 Hz |
| `8` | 125 Hz |

---

### 4.7 CMD 0x18 (24) — SET MOUSE CONFIG

**Send**: `[24, LEN, ...data]` — `:12444-12451`

LEN: 30, 31, 32, or 33 bytes depending on device features.

Response — `:12270-12312`.

---

### 4.8 CMD 0x19 (25) — GET DPI CONFIG

**Send**: `[25, 0, 0]` — `:12453-12454`

**Response** — `:12314-12317` — 48 bytes = **6 levels × 8 bytes**:

| Offset | Field | Bytes |
|---|---|---|
| 0-1 | **DPI Value** (uint16 LE) | 2 |
| 2 | **Red** | 1 |
| 3 | **Green** | 1 |
| 4 | **Blue** | 1 |
| 5-7 | (padding) | 3 |

Specification from `:12526-12533`: `sensor_type: "PAW3395"`, `sensor_max_dpi: 26000`, `sensor_min_dpi: 50`, `sensor_dpi_step: 50`.

---

### 4.9 CMD 0x1A (26) — SET DPI CONFIG

**Send**: `[26, 48, ...48_bytes]` — `:12468-12469`

---

### 4.10 CMD 0x1B (27) — Unknown

**Send**: `[27, 0]` — `:12471-12472`. Response: no-op.

---

### 4.11 CMD 0x1C (28) — Unknown

**Send**: `[28, 0]` — `:12474-12475`. Response: no-op.

---

### 4.12 CMD 0x1D (29) — GET COMBINATION KEY

**Send**: `[29, 1, t]` — `:12477-12478`. Response: `combination_key = raw array` — `:12348-12350`.

---

### 4.13 CMD 0x1E (30) — SET COMBINATION KEY

**Send**: `[30, LEN, ...data]` — `:12480-12481`. Response — `:12352-12354`.

---

### 4.14 CMD 0x1C (28) — SET RGB

**Send**: `[40, 4, r, g, b, speed]` — `:12465-12466`.

Response — `:12326-12339`:

```text
RGB_effect: e[4], RGB_brightness: e[5], RGB_speed: e[6]
```

---

### 4.15 CMD 0x30 (48) — FACTORY RESET

**Send**: `[48, 1, 255]` — `:12483-12488`.

Response — `:12356-12380`: Sets `DeviceFactoryResetLoading = false`, `is_reseting = false`, then auto-queries:

1. CMD 0x13 → 80ms delay
2. CMD 0x15 → 80ms delay
3. CMD 0x17 → 80ms delay
4. CMD 0x19

---

### 4.16 CMD 0xEF (239) — ENTER DFU MODE

**Send**: `[239, 0, 0]` — `:12490-12491`. Response: `is_dfu = true` — `:12382-12383`.

---

## 5. Command Send Table (Summary)

| CMD | Name | Send Payload | Response |
|---|---|---|---|
| `0x12` (18) | Config Update | `[18, 18, ...]` | `:12109-12140` |
| `0x13` (19) | Get Device Info | `[19, 0, 0]` | `:12142-12190` |
| `0x14` (20) | Get Sleep | `[20, 0, 0]` | `:12191-12192` |
| `0x15` (21) | Get Button Mapping | `[21, 0, 0]` | `:12194-12208` |
| `0x16` (22) | Set Button Mapping | `[22, 18, 18B]` | `:12210-12224` |
| `0x17` (23) | Get Mouse Config | `[23, 0, 0]` | `:12226-12268` |
| `0x18` (24) | Set Mouse Config | `[24, LEN, data]` | `:12270-12312` |
| `0x19` (25) | Get DPI Config | `[25, 0, 0]` | `:12314-12317` |
| `0x1A` (26) | Set DPI Config | `[26, 48, 48B]` | `:12341-12344` |
| `0x1B` (27) | Unknown | `[27, 0]` | `:12346` |
| `0x1C` (28) | Unknown | `[28, 0]` | `:12347` |
| `0x1D` (29) | Get Combo Key | `[29, 1, t]` | `:12348-12350` |
| `0x1E` (30) | Set Combo Key | `[30, LEN, data]` | `:12352-12354` |
| `0x1C` (28) | Set RGB | `[40, 4, R,G,B,S]` | `:12326-12339` |
| `0x30` (48) | Factory Reset | `[48, 1, 255]` | `:12356-12380` |
| `0xEF` (239) | Enter DFU | `[239, 0, 0]` | `:12382-12383` |

All responses go through the `report()` method at `:12386-12425` which checks `n[2] === "00"`.

---

## 6. Initial Query Sequence

```text
1. CMD 0x13 (Get Device Info)
   → 80ms delay
2. CMD 0x15 (Get Button Mapping)
   → 80ms delay
3. CMD 0x17 (Get Mouse Config)
   → 80ms delay
4. CMD 0x19 (Get DPI Config)
```

Source: `:12360-12380`. Total ~320ms.

---

## 7. Hardware Specifications

Source: `:12517-12540, 12840-12853`

| Attribute | Value |
|---|---|
| **Sensor** | PAW3395 |
| **Max DPI** | 26,000 |
| **Min DPI** | 50 |
| **DPI Step** | 50 |
| **DPI Levels** | 6 (with RGB per level) |
| **LOD** | 1mm / 2mm |
| **Wireless Rates** | 125, 250, 500, 1000 Hz |
| **Wired Rates** | 125, 250, 500, 1000 Hz |

### Firmware Versions — `:12540-12806`

Versions `1.0.6` — `1.0.13` (latest). File format:

- Mouse: `MOUSE_SIGN_V{VER}-{HASH}.BIN`
- Dongle: `DONGLE_SIGN_V{VER}-{HASH}.BIN`
- OTA: `OTA_M30_IRISv2_3395_1K_SIGN_{VER}-{HASH_MOUSE}-{HASH_DONGLE}.zip`

### Firmware Header Format — `:13541-13652`

Class `ze` (alias `bo`, exported as `er`) parses the firmware BIN header:

| Offset | Field | Bytes | Type |
|---|---|---|---|
| 0 | **flag** (magic) | 4 | uint32 — `0x1C2D1E4F` (472727119) |
| 4 | **headCRC** | 4 | uint32 |
| 8 | **headLength** | 4 | uint32 |
| 12 | **fwLength** | 4 | uint32 |
| 16 | **nextFileAddress** | 4 | uint32 |
| 20 | **version** | 4 | uint32 |
| 24 | **deviceType** | 1 | uint8 — `210` = mouse, `211` = dongle |
| 25 | **VID** | 2 | uint16 LE |
| 27 | **PID** | 2 | uint16 LE |
| 29 | **BOOT_VID** | 2 | uint16 LE — VID in bootloader mode |
| 31 | **BOOT_PID** | 2 | uint16 LE — PID in bootloader mode |
| 33 | **Cid** | 1 | uint8 |
| 34 | **Mid** | 1 | uint8 |
| 35 | **sensorName** | 64 | Uint8Array — MaxCmdLength |
| 99 | **CHIP** | 64 | Uint8Array |
| 163 | **productName** | 128 | Uint8Array — MaxCmdLength × 2 |
| **Total** | | **291** | |

`MaxCmdLength = 64` — `:13652`

---

## 8. DFU / Flashing Protocol

> **Warning**: The DFU protocol uses **255-byte HID reports** (`jt = 255`), NOT the 64-byte management protocol. After `CMD 0xEF`, the device likely reboots to the bootloader with a different `BOOT_VID`:`BOOT_PID`.

### 8.1 Entering DFU Mode

**Send** CMD 0xEF via management protocol: `[239, 0, 0]` — `:12490-12491`

Response: `is_dfu: true` — `:12382-12383`

Device reboots to bootloader with `BOOT_VID` / `BOOT_PID` (from firmware header). The original application then reconnects to the new device with that VID:PID.

### 8.2 DFU Packet Format — `:13654-13719`

All DFU packets are **255 bytes**.

**Common Header (6 bytes):**

| Offset | Field | Bytes | Type |
|---|---|---|---|
| 0 | **start_flag** | 1 | uint8 |
| 1-2 | **packet_size** | 2 | uint16 LE |
| 3-4 | **check_sum** | 2 | uint16 LE — `Qf()` (`:13658-13663`) |
| 5+ | **payload** | n | Data |

> `check_sum = sum(all payload bytes) & 0xFFFF`

**Max payload per packet**: `249 bytes` (`Jf = 255 - 6`)

### 8.3 DFU Packet Types

| start_flag | Name | Function | Builder | Source |
|---|---|---|---|---|
| `0xFF` (255) | **Init** | Send total firmware length | `Ih(e, total_length)` | `:13664-13672` |
| `0x01` (1) | **Start** | Begin transmission | `$h()` | `:13688-13697` |
| `0x02` (2) | **Data** | 249-byte firmware chunk | `zh(data, offset)` | `:13673-13687` |
| `0x00` (0) | **End** | Finish | `Rh()` | `:13698-13707` |

#### Init Packet (0xFF)

```text
Byte 0:     0xFF (start_flag)
Bytes 1-4:  total_length (uint32 LE)
Bytes 5+:   0x00 (padding)
```

#### Start Packet (0x01)

```text
Byte 0:     0x01 (start_flag)
Bytes 1-2:  0x0000 (packet_size)
Bytes 3-4:  0x0000 (check_sum)
Bytes 5+:   0x00 (padding)
```

#### Data Packet (0x02)

```text
Byte 0:     0x02 (start_flag)
Bytes 1-2:  packet_size (uint16 LE) — max 249
Bytes 3-4:  check_sum (uint16 LE)
Bytes 5..254: 249 bytes firmware data
```

#### End Packet (0x00)

```text
Byte 0:     0x00 (start_flag)
Bytes 1-2:  0x0000 (packet_size)
Bytes 3-4:  0x0000 (check_sum)
Bytes 5+:   0x00 (padding)
```

### 8.4 DFU Response Format

All DFU responses are also 255 bytes — `:13708-13719`:

| Offset | Field | Bytes |
|---|---|---|
| 0 | **start_flag** | 1 |
| 1-2 | **packet_size** | 2 |
| 3-4 | **check_sum** | 2 |
| 5 | **result** | 1 — `0` = success |
| 6-9 | **total_length** | 4 |

Parser: `Mh(e)` — returns `true` if `result === 0`.

### 8.5 Flashing Flow

Source: `main.js:15511-15526` (IPC `get-firmware` downloads BIN)

```text
1. Download firmware .BIN via HTTP (IPC: get-firmware)
2. Send CMD 0xEF → device enters DFU mode
3. Wait for device reconnect (BOOT_VID:BOOT_PID)
4. Parse firmware header (class ze/bo)
5. Send DFU packets:
   a. Init (0xFF) — total firmware length
   b. Start (0x01)
   c. Data (0x02) × N chunks (249 bytes each + checksum)
   d. End (0x00)
6. Device restarts with new firmware
```

> Firmware is downloaded via IPC `get-firmware` at `main.js:15511` — renderer calls `ipcRenderer.invoke("get-firmware", url)` → main process fetches binary → returns `ArrayBuffer`.

---

## 9. Key Mapping Format

3 bytes per button: `[type, param1, param2]` — `:12199-12206`

| Type | Meaning | param1 |
|---|---|---|
| `0` | Disabled / None | — |
| `1` | **Mouse Button** | 1=Left, 2=Right, 3=Middle, 4=Backward, 5=Forward |
| `2` | **Keyboard Key** | HID Usage ID |
| `3` | **Multimedia** | Key code |
| `4` | **Macro** | Macro index |
| `5` | **DPI Function** | 0=Cycle, 1=Shift |
| `6` | **Combination Key** | Modifier mask |

---

## 10. Native Linux Implementation Notes

1. **HID Access**: Open `/dev/hidraw*` (after installing udev rules `99-iris.rules`)
2. **Management Protocol**: Report ID `0x0B`, 64-byte buffer, CMD-based (see §4)
3. **Response**: 64 bytes, byte 0 = CMD echo, byte 1 = `0x00` = success
4. **Stripping**: Main process strips byte 0 from response — `main.js:15331`
5. **Init Sequence**: CMD 0x13 → 0x15 → 0x17 → 0x19, 80ms delay between commands
6. **DFU Protocol**: After CMD 0xEF, use 255-byte HID reports with start_flag protocol (see §8)
7. **Firmware Download**: Via HTTP GET to firmware_tool URL, parse `ze` class header
8. **Bootloader**: Device reboots with `BOOT_VID`:`BOOT_PID` after CMD 0xEF

---

## 11. Project Structure

```text
pressplay-iris-v2-nearlink/                     # Root project
├── src/native/hidAdapter.mjs                   # HID Adapter class — open/close/sendReport/listeners
├── dist-electron/main.js                       # Electron main process — IPC bridge, HID management, reportId stripper
├── dist/assets/
│   ├── nodeHIDConfiguration-Cn5KyG1E.js        # Frontend HID logic — reportCmd, sendCmd, device configs, firmware
│   └── index-N8Ok4Pz6.js                       # Shared utilities — arrayBuffer2Hex, toDec, getArrayIndex
├── hid_test.js                                 # HID discovery & protocol test script
├── docs/hid-protocol.md                        # ← This file — HID protocol documentation
├── 99-iris.rules                               # udev rules for HID access without root
├── package.json                                # Project metadata & dependencies
└── README.md                                   # Main project documentation
```

---

Documented from reverse engineering of IRIS v2 NearLink v1.0.3
