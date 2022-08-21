# Chrome DevTools Playwright Exporter Extension

> **WIP** Currently trying to find a way to run codemods in a browser context

<img width="1009" alt="export-as-cypress" src="https://user-images.githubusercontent.com/5917927/185565270-2f3e9b34-4432-46a3-bafb-0cfe2e53377b.png">

---

## 👷 Usage

1. [Create a new recording](https://goo.gle/devtools-recorder#record) via the Recorder panel
2. Click the [export](https://goo.gle/devtools-recorder-eference/#export-flows) icon
3. Choose "Export as a Playwright"
4. Save file as {testName}.{ts.js}

## 🏗 Development

1. Clone the repo
2. Bundle the Javascript `pnpm build`
3. Visit `chrome://extensions`
4. Enable "Developer mode" via toggle switch in upper right corner
5. Click "Load unpacked" button in upper left corner
6. Select the `build` output directory from where you've cloned this repository

## 🙌 Thanks

Extension based upon the [Cypress DevTools Recorder](https://github.com/cypress-io/cypress-recorder-extension) and the Codemod (jscodeshift) from Checkly's [puppeteer-to-playwright](https://github.com/checkly/puppeteer-to-playwright) script.

## 📝 License

MIT
