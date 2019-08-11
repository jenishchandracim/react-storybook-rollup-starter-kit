import '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in `*.stories.js` from `src/components`
const req = require.context('../src/components/', true, /stories\.js$/)

function loadStories() {
  addDecorator(withKnobs)
  addDecorator(withInfo)
  addParameters({
    info: {
      inline: true,
      header: false,
      source: true
    }
  })
  addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  req.keys().forEach(req)
}

configure(loadStories, module);
