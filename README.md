# Chrome DevTools Playwright Exporter Extension

<img width="1009" alt="export-as-cypress" src="https://user-images.githubusercontent.com/5917927/185565270-2f3e9b34-4432-46a3-bafb-0cfe2e53377b.png">

---

Add [this Chrome Extension](https://chrome.google.com/webstore/detail/cypress-chrome-recorder/fellcphjglholofndfmmjmheedhomgin) to export DevTools Recordings as Playwright Tests directly from the [DevTools Recorder Panel](https://goo.gle/devtools-recorder).

## Usage

1. [Create a new recording](https://goo.gle/devtools-recorder#record) via the Recorder panel
2. Hover over the [export](https://goo.gle/devtools-recorder-eference/#export-flows) icon
3. Click "Export as a Playwright Test"
4. Save file as {testName}.{ts.js}

## Usage

1. Clone the repo
2. Build the repo `pnpm build`
3. Visit chrome://extensions
4. Enable "Developer mode" via toggle switch in upper right corner
5. Click "Load unpacked" button in upper left corner
6. Select the `build` dir in the previously cloned directory

## Thanks

Extension based upon the [Cypress DevTools Recorder](https://github.com/cypress-io/cypress-recorder-extension) and the JSCodeshift from Checkly's [puppeteer-to-playwright](https://github.com/checkly/puppeteer-to-playwright) package.

## License

MIT
