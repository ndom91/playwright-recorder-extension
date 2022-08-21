import {run} from 'jscodeshift/src/Runner'

export class RecorderPlugin {
  async stringify(recording) {
    console.log('original reocrding', recording)

    const options = {
      dry: false,
      stdin: true,
      print: true,
      verbose: 1,
    }
    const transformPath = './transform.js'
    const res = await run(transformPath, script, options)

    const playwrightScript = await transformToPlaywright(JSON.stringify(recording));

    console.log('playwrightScript', playwrightScript)
    return playwrightScript
  }

  // TODO: provide exported step transform function
  async stringifyStep(step) {
    return JSON.stringify(step);
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/ 'Playwright',
  /* mediaType=*/ 'application/javascript'
);
