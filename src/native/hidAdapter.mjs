import HID from "node-hid";

const VID = 0x363c;
const PIDS = [0xec05, 0xec06];

const isLinux = process.platform === "linux";
const isWindows = process.platform === "win32";

/**
 * IRIS v2 HID Adapter
 * Centralizes HID access logic for cross-platform compatibility.
 */
export class HidAdapter {
  constructor() {
    this.device = null;
  }

  /**
   * Discover supported IRIS v2 devices.
   * @returns {Array} List of device objects.
   */
  static getDeviceList() {
    try {
      // Using synchronous devices call for discovery is standard
      const devices = HID.devices();
      return devices.filter(
        (d) =>
          d.vendorId === VID &&
          PIDS.includes(d.productId) &&
          (d.usagePage === 0xffa0 || d.interface === 1 || d.interface === 2), // Common config interfaces
      );
    } catch (err) {
      console.error("[HidAdapter] Discovery failed:", err);
      return [];
    }
  }

  /**
   * Open a device by path asynchronously.
   * @param {string} path Device path.
   */
  async open(path) {
    if (this.device) await this.close();

    try {
      console.log(`[HidAdapter] Opening device at ${path}`);
      // Use HIDAsync to match the original application's non-blocking design
      this.device = await HID.HIDAsync.open(path);
      return true;
    } catch (err) {
      console.error(`[HidAdapter] Failed to open device: ${err.message}`);
      return false;
    }
  }

  /**
   * Close the current device.
   */
  async close() {
    if (this.device) {
      try {
        // HIDAsync close is already handled by node-hid internal logic or simple call
        await this.device.close();
      } catch (err) {
        console.error("[HidAdapter] Error closing device:", err);
      }
      this.device = null;
    }
  }

  /**
   * Send a report to the device.
   * @param {number} reportId The HID report ID (usually 0x0B / 11).
   * @param {Array|Buffer} data The command bytes.
   */
  async sendReport(reportId, data) {
    if (!this.device) throw new Error("Device not opened");

    const buffer = new Uint8Array(64);
    buffer[0] = reportId;
    const o = Math.min(data.length, 63);
    for (let a = 0; a < o; a++) buffer[a + 1] = data[a];

    try {
      return await this.device.write(Buffer.from(buffer));
    } catch (err) {
      console.error("[HidAdapter] Write failed:", err);
      throw err;
    }
  }

  /**
   * Register listeners for data and error.
   */
  registerListeners(onData, onError) {
    if (!this.device) return;
    this.device.on("data", onData);
    this.device.on(
      "error",
      onError || ((err) => console.error("[HidAdapter] Device Error:", err)),
    );
  }

  /**
   * Remove all listeners from the device.
   */
  removeAllListeners() {
    if (this.device) {
      this.device.removeAllListeners();
    }
  }
}

export default HidAdapter;
