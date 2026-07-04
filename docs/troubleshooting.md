# Troubleshooting

## HID Device Not Found

### Symptoms

- Application does not detect the mouse
- `hid_test.js` prints "No devices found"

### Checks

1. **UDEV rules installed?**

   ```bash
   ls -la /etc/udev/rules.d/99-iris.rules
   ```

   If missing:

   ```bash
   sudo cp 99-iris.rules /etc/udev/rules.d/
   sudo udevadm control --reload-rules
   sudo udevadm trigger
   ```

2. **Device detected by the system?**

   ```bash
   lsusb | grep -i "363c"
   ```

   Should show: `ID 363c:ec05` (wired) or `ID 363c:ec06` (wireless/dongle)

3. **HID interface available?**

   ```bash
   ls -la /dev/hidraw*
   ```

   Try testing access:

   ```bash
   node hid_test.js
   ```

4. **Permission?** Make sure user is in the `plugdev` group:

   ```bash
   groups | grep plugdev
   ```

### Force reload HID

```bash
sudo modprobe -r hid_raw && sudo modprobe hid_raw
```

---

## Wayland / Rendering Issues

### Symptoms (Wayland)

- Application does not appear
- White screen
- GPU-related crash

### Solution

Use the launch script:

```bash
./start-app.sh
```

This script adds the following flags:

```text
--disable-vulkan          # Fix Vulkan/Wayland conflict
--ozone-platform-hint=auto  # Auto-detect Wayland vs X11
```

If still problematic, try:

```bash
npx electron . --disable-gpu --ozone-platform-hint=auto
```

### Specific Desktop Environments

| DE | Known Issue | Fix |
|---|---|---|
| **GNOME (Wayland)** | Vulkan conflict | `--disable-vulkan` |
| **KDE Plasma 6+** | Ozone platform | `--ozone-platform-hint=auto` |
| **Hyprland** | Vulkan + Ozone | Both flags |
| **NVIDIA proprietary** | Vulkan compatibility | `--disable-vulkan` |

---

## AppImage Issues

### AppImage cannot be run

```bash
chmod +x IRIS_V2_NearLink-1.0.3.AppImage
./IRIS_V2_NearLink-1.0.3.AppImage --disable-vulkan --ozone-platform-hint=auto
```

### Folder name contains spaces

Error: electron-builder build fails.
Fix: Rename folder without spaces/parentheses (e.g. `iris-pkg`).

---

## Permission: HID Access Denied

```text
Error: Cannot open device
Error: Permission denied
```

### Fix

```bash
sudo cp 99-iris.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger
# Unplug and replug the device
```

Test:

```bash
node hid_test.js
```

---

## Electron / Node.js Issues

### `node-hid` build fails

Make sure build dependencies are installed:

```bash
# Arch
sudo pacman -S base-devel libusb pkgconf

# Ubuntu/Debian
sudo apt install build-essential libusb-1.0-0-dev pkg-config
```

### Port 0.0.0.0 already in use

If there is a port error, kill the previous Electron process:

```bash
killall hhk-hub-desktop
```

---

## Firmware Update Failed

### Symptoms (Firmware Update)

- Update stuck at 0%
- "Firmware package not found"
- "Firmware type does not match"

### Checks (Firmware Update)

1. **Stable connection?** Do not unplug the device during update
2. **Firmware matches?** The `.BIN` file must match the device type (mouse vs dongle)
3. **DFU mode?** If device does not enter DFU, try sending CMD 0xEF manually

### Recovery

If device is bricked after a failed update:

1. Unplug the device
2. Hold a specific button (pairing/reset) while plugging in USB
3. Device will enter bootloader mode (BOOT_VID:BOOT_PID)
4. Repeat the update process

---

## Logs

### Log Location

- **Linux**: `~/.config/IRIS_V2_NearLink/logs/main.log`
- **macOS**: `~/Library/Logs/IRIS_V2_NearLink/main.log`

### Debug mode

```bash
# Via start-app.sh (shows console output)
./start-app.sh

# Or directly
npx electron .
```

### IPC logging

Open DevTools (F12), check the console for `device-data` and `write-device` logs.
