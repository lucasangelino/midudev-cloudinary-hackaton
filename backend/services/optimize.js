const playwright = require("playwright");
const { webkit } = require("playwright");

async function optimizeWebImages(url) {
  console.log(`Crwaling url: ${url}`);

  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  await page.waitForTimeout(8000);

  const images = await page.evaluate(() => {
    const elements = document.querySelectorAll("img");
    const htmlImageNodes = [];
    for (const element of elements) {
      htmlImageNodes.push({
        src: element.src,
        alt: element.alt,
        outerHtml: element.outerHTML,
        nodeName: element.nodeName,
        parentNode: {
          outerHTML: element.parentNode.outerHTML,
          tag: element.parentNode.tagName,
        },
      });
    }
    return htmlImageNodes;
  });

  await browser.close();
  console.log(`images: ${images}`);
  return images;
}

module.exports = {
  optimizeWebImages,
};
