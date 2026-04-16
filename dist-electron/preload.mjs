"use strict";
const t = require("electron");
t.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...e) {
    const [n, r] = e;
    return t.ipcRenderer.on(n, (o, ...i) => r(o, ...i));
  },
  off(...e) {
    const [n, ...r] = e;
    return t.ipcRenderer.off(n, ...r);
  },
  send(...e) {
    const [n, ...r] = e;
    return t.ipcRenderer.send(n, ...r);
  },
  invoke(...e) {
    const [n, ...r] = e;
    return t.ipcRenderer.invoke(n, ...r);
  },
});
t.contextBridge.exposeInMainWorld("clipboard", {
  writeText(...e) {
    return t.clipboard.writeText(...e);
  },
});
