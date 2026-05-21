const fs = require('fs');
const path = require('path');

try {
  fs.copyFileSync(
    '/home/luca/.gemini/antigravity/brain/c0771ce3-831f-4fd4-88a0-bd368526273d/impact_solar_1779362571929.png',
    '/home/luca/Code/Navi/Navi_Clients/Raja/public/impact_solar.png'
  );
  fs.copyFileSync(
    '/home/luca/.gemini/antigravity/brain/c0771ce3-831f-4fd4-88a0-bd368526273d/impact_motors_1779362593630.png',
    '/home/luca/Code/Navi/Navi_Clients/Raja/public/impact_motors.png'
  );
  fs.copyFileSync(
    '/home/luca/.gemini/antigravity/brain/c0771ce3-831f-4fd4-88a0-bd368526273d/impact_ev_1779362624794.png',
    '/home/luca/Code/Navi/Navi_Clients/Raja/public/impact_ev.png'
  );
  console.log("Assets successfully integrated into public/ directory!");
} catch (err) {
  console.error("Error copying assets:", err);
}
