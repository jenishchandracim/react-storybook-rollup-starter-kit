import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs/react';

import Button from '.';

storiesOf('Button', module)
  .add('default', () => (
    <Button
      text={text('text', 'Button Text')}
      variant={select('variant', ['', 'primary', 'secondary', 'success', 'warning'])}
      onClick={() => action('It has been clicked!')}
    />
  ), {
    notes: `A very simple example of notes for the <b>'Button'</b> component. <br /> 
    Any special notes for the <b>'Button'</b> compoment to be added here.`
  });
