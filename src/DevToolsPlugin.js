import transformToPlaywright from './transform.js'

export class RecorderPlugin {
  async stringify(recording) {
    console.log('original reocrding', recording)
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
  /* name=*/ 'Playwright Test',
  /* mediaType=*/ 'application/javascript'
);
