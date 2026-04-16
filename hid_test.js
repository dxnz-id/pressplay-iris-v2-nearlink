import HID from "node-hid";

const VID = 0x363c;
const PIDS = [0xec05, 0xec06];

console.log("Searching for IRIS v2 NearLink devices...");

async function testDiscovery() {
  const devices = HID.devices();
  const filtered = devices.filter(
    (d) => d.vendorId === VID && PIDS.includes(d.productId),
  );

  if (filtered.length === 0) {
    console.log("No devices found.");
    return;
  }

  console.log(
    `Found ${filtered.length} matching device(s). Looking for Management Interface (UsagePage: 0xFFA0)...`,
  );

  for (const d of filtered) {
    console.log(`\n--- Device at ${d.path} ---`);
    console.log(
      ` - Interface: ${d.interface}, UsagePage: 0x${d.usagePage.toString(16)}, Usage: ${d.usage}`,
    );

    // Cuma coba buka yang UsagePage-nya 0xFFA0 (Management Interface)
    if (d.usagePage !== 0xffa0 && d.usage !== 2) {
      console.log(` - Skipping (Not a management interface)`);
      continue;
    }

    try {
      console.log(` - Attempting to open...`);
      const device = await HID.HIDAsync.open(d.path);
      console.log(` - SUCCESS: Device opened.`);

      // Setup Listener
      device.on("data", (data) => {
        console.log(
          ` - [RESPONSE] Received (hex): ${Buffer.from(data).toString("hex")}`,
        );
        if (data[0] === 0x0d) {
          console.log(` - SUCCESS: Protocol verified! Received 0x0D.`);
        }
      });

      device.on("error", (err) => {
        console.log(` - [ERROR] Device error: ${err}`);
      });

      // Kirim paket Get Info (0x13)
      const reportId = 0x0b;
      const buffer = new Uint8Array(64);
      buffer[0] = reportId;
      buffer[1] = 0x13; // Command byte

      console.log(
        ` - Sending 'Get Info' command (0x13) wrapped in Report ID 0x0B...`,
      );
      await device.write(buffer);

      // Tunggu sebentar buat response
      await new Promise((r) => setTimeout(r, 1000));
      await device.close();
      console.log(` - Device closed.`);
    } catch (err) {
      console.error(` - ERROR: ${err.message}`);
    }
  }
}

testDiscovery();
