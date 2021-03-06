const { Browser } = require("../src/browser.js");
const { Steps } = require("../src/steps.js");

async function test() {
  await Browser.launch({ headless: true });
  await Browser.newPage();
  await Browser._page.goto("http://wosp.io");
  Browser.kill();
}

async function test2() {
  await Browser.lighthouse(
    [
      "--headless",
      "--enable-automation",
      "--disk-cache-size=0",
      "--memory-cache-size=0",
    ],
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
  );
  await Browser.newPage();
  await Browser._page.goto("https://github.com/wosp-io/orca");
  await Browser.audit();
  await Browser.resources();
  console.log(Browser._lighthouse_report_metrics);
  console.log(Browser._resources);
  Browser.kill();
}

async function test3() {
  for (var i = 0; i < 3; i++) {
    await Browser.launch({ headless: false });
    await Browser.newPage();
    await Steps.add(
      "GO TO WOSP.IO",
      async (Browser) => {
        await Browser._page.goto("http://wosp.io");
      },
      Browser
    );
    await Steps.add(
      "GO TO ORCA PROJECT",
      async (Browser) => {
        await Browser._page.goto("https://github.com/wosp-io/orca");
      },
      Browser
    );
    Browser.kill();
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  await Steps.timings();
  console.log(Steps._timings);
}

async function test4() {
  await Browser.launch({ headless: false });
  await Browser.newPage();
  await Browser._page.goto("https://github.com/wosp-io/orca");
  await Browser.timeElement(
    ".markdown-body > h1:nth-child(2) > a:nth-child(2) > img:nth-child(1)"
  );
  console.log(Browser._element_timings);
  Browser.kill();
}

(async () => {
  await test();
  await test2();
  await test3();
  await test4();
})();
