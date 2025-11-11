const { chromium, firefox, webkit } = require('playwright');
const fs = require('fs');

(async () => {
  const url = 'http://localhost:5173/madan-portfolio';
  const outDir = 'playwright-screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const browsers = [
    { name: 'chromium', launcher: chromium },
    { name: 'firefox', launcher: firefox },
    { name: 'webkit', launcher: webkit },
  ];

  for (const b of browsers) {
    console.log('Launching', b.name);
    const browser = await b.launcher.launch();
    const page = await browser.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      const path = `${outDir}/${b.name}.png`;
      await page.screenshot({ path, fullPage: true });
      console.log('Saved', path);
    } catch (e) {
      console.error('Error capturing', b.name, e.message);
    }
    await browser.close();
  }
})();
