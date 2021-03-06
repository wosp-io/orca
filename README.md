[![npm version](https://img.shields.io/npm/v/@wosp-io/orca.svg?style=flat)](https://www.npmjs.com/package/@wosp-io/orca)
![](https://david-dm.org/wosp-io/orca.svg)
![ci](https://github.com/wosp-io/orca/actions/workflows/workflow.yml/badge.svg)
![security analysis](https://github.com/wosp-io/orca/actions/workflows/codeql-analysis.yml/badge.svg)
![prettier check](https://github.com/wosp-io/orca/actions/workflows/prettier-format.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# <img src="assets/logo.PNG" width="400">

A Node.js library to 'orca'-strate automated performance testing with a single API. Orca is a modern tool built for all aspects of performance testing, giving teams the ability to test all layers of the application stack. Conduct simple load tests, run end-to-end performance tests, audit page load times, gather resource bundle metrics, and more.

**Install:** `npm i @wosp-io/orca`

### Simplest Working Browser Example

```JavaScript
const { Browser } = require("../src/browser.js");

(async () => {
  await Browser.launch({ headless: true });
  await Browser.newPage();
  await Browser._page.goto("http://wosp.io");
  Browser.kill();
})();
```

### Simplest Working HTTP Example

```JavaScript
const { Http } = require("../src/http.js");

(async () => {
  Http.options({
    vus: 5,
    duration: 30,
    ips: 2,
  });
  Http.requests([
    {
      url: "http://httpbin.org/get",
      method: "GET",
    },
  ]);
  await Http.send();
})();
```

### HTTP Load Test Report

<img src="assets/http-report.PNG" width="600">
