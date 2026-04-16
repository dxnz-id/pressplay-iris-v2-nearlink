# IRIS v2 NearLink - Linux Hub & Driver Port

![Logo](./dist/logo/hhk.png)

Bilingual Version: [English](#english) | [Bahasa Indonesia](#bahasa-indonesia)

---

## English

This project is a native Linux port of the **IRIS v2 NearLink** Mouse Hub. Originally built for Windows, this version provides native HID communication, display compatibility for modern Linux environments (Wayland/GNOME/KDE), and full packaging support for Linux distributions.

### 🖱️ Supported Hardware
- **Vendor ID**: `0x363C`
- **Product ID**: `0xEC05` (Wired), `0xEC06` (Wireless/Dongle)

### 🛠️ Prerequisites
Before building or running, ensure your system has the following dependencies:
- **Build Tools**: `base-devel` (Arch), `build-essential` (Ubuntu/Debian)
- **HID Libraries**: `libusb`, `pkgconf`
- **Runtimes**: `node.js`, `npm`

### ⚙️ Setup & Hardware Access
Linux requires explicit permission to access HID devices without root.
1. Copy the `udev` rules:
   ```bash
   sudo cp 99-iris.rules /etc/udev/rules.d/
   ```
2. Reload rules:
   ```bash
   sudo udevadm control --reload-rules && sudo udevadm trigger
   ```

### 📦 Building the Application
To create a standalone **AppImage**:
1. Ensure the folder name has **no spaces or parentheses** (e.g., use `iris-pkg`).
2. Run the build command:
   ```bash
   npm run package
   ```
3. The result will be in the `build-out/` directory.

### 🚀 Running on Wayland
If you are using Wayland (GNOME, KDE Plasma 6+, Hyprland), use the provided launch script to avoid GPU/Vulkan conflicts:
```bash
./start-app.sh
```

---

## Bahasa Indonesia

Proyek ini adalah porting native Linux untuk **IRIS v2 NearLink** Mouse Hub. Versi ini menyediakan komunikasi HID native, kompatibilitas display untuk lingkungan Linux modern (Wayland/GNOME/KDE), dan dukungan packaging lengkap untuk distro Linux.

### 🖱️ Hardware yang Didukung
- **Vendor ID**: `0x363C`
- **Product ID**: `0xEC05` (Wired), `0xEC06` (Wireless/Dongle)

### 🛠️ Prasyarat
Sebelum melakukan build atau menjalankan aplikasi, pastikan sistem Anda memiliki dependensi berikut:
- **Build Tools**: `base-devel` (Arch), `build-essential` (Ubuntu/Debian)
- **HID Libraries**: `libusb`, `pkgconf`
- **Runtimes**: `node.js`, `npm`

### ⚙️ Setup & Akses Hardware
Linux membutuhkan izin eksplisit untuk mengakses perangkat HID tanpa root.
1. Salin aturan `udev`:
   ```bash
   sudo cp 99-iris.rules /etc/udev/rules.d/
   ```
2. Reload aturan:
   ```bash
   sudo udevadm control --reload-rules && sudo udevadm trigger
   ```

### 📦 Membangun Aplikasi
Untuk membuat **AppImage** mandiri:
1. Pastikan nama folder **tidak mengandung spasi atau tanda kurung** (contoh: gunakan `iris-pkg`).
2. Jalankan perintah build:
   ```bash
   npm run package
   ```
3. Hasilnya akan ada di folder `build-out/`.

### 🚀 Menjalankan di Wayland
Jika Anda menggunakan Wayland (GNOME, KDE Plasma 6+, Hyprland), gunakan script launch yang disediakan untuk menghindari konflik GPU/Vulkan:
```bash
./start-app.sh
```

---

## 🎨 Desktop Integration
To add the app to your application menu, create a file at `~/.local/share/applications/iris-v2.desktop`:

```ini
[Desktop Entry]
Name=IRIS v2 NearLink
Exec=/path/to/your/IRIS_V2_NearLink-1.0.3.AppImage --disable-vulkan --ozone-platform-hint=auto
Icon=/path/to/your/app/dist/logo/hhk.png
Type=Application
Categories=Utility;
```

---

*Ported with ❤️ for the Linux Community.*
