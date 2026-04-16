#!/bin/bash
# IRIS v2 NearLink Launch Script
# Fixes Wayland/Vulkan conflict and uses npx to run Electron

echo "Launching IRIS v2 NearLink..."

# --disable-vulkan: Fixes compatibility issues with Wayland
# --ozone-platform-hint=auto: Properly handles Wayland vs X11
npx electron . --disable-vulkan --ozone-platform-hint=auto "$@"
