import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://cineflares-lens.netlify.app/login");

    await page.screenshot({ path: `./ss/${`cineflares.png`}` });

    await browser.close();
})();