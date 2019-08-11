# react-storybook-rollup-starter-kit

This project is to be used as a template/starter-kit for building React components library using Storybook to document the components and Rollup to build the library for consuption.

This project is bootstrapped with the following
- [Create React App](https://github.com/facebook/create-react-app)
- [React Scripts v.3.1.0](https://www.npmjs.com/package/react-scripts)
- [Storybook/react v.5.1.10](https://storybook.js.org/)
- [Rollup v.1.19.4](https://rollupjs.org/guide/en/)
- [Airbnb esint config v.18.0.0](https://www.npmjs.com/package/eslint-config-airbnb)

## Getting Started

In order to get started using the setup, download/pull/fork the repository and start building your components under `/src/components`.<br>
Each component you create should follow the same setup as per the `<Button />` component, where each has:
- `.js` file for the source code
- `.module.scss` file for the scss
- `.spec.js` file for the tests
- `stories.js` file for including the storybook story for the docs
- `index.js` file to export the component

- `src/components/inde.js` file to include all components to be exported

The above configuration is needed to ensure both storybook and rollup are correctly executed.<br>
Additionally you will have to modify the project name in `package.json` to contain your library name and include the correct npm credentials/scope into the `.npmrc` (more details on this can be found on the platform used to host the library e.g: [npmjs](https://docs.npmjs.com/))

## Available Scripts

In the project directory, you can run:

### `yarn start` and `yarn storybook`

Runs storybook.<br>
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.
The page will reload if you make component edits.

### `yarn lint`

Runs airbnb linting config.<br>
Please refer to `.eslintrc` for more details in rules that are excluded/added from the initial Airbnb configuration, which can be found [here](https://www.npmjs.com/package/eslint-config-airbnb)

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the component library using rollup.<br>
This runs a set of defined configurations under `rollup.config.js` file.<br>
The exports are built inside `build` folder which can be used to publish to `npm ecosystem`.

### `yarn build-storybook`

Builds static files for storybook site. This is so it can be deployed as the docs source for the component library.



