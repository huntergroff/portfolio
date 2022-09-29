# Hunter Groff - Portfolio Website 2022

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Content Organization

The src directory is organized as follows:
* Top level: Holds top level files such as App.js, index.js, App.css, and index.css.
* Components: holds all react components. The "Pages" subfolder holds a component for each page of the site.
* Content: holds all js lists for rendering content dynamically (including info for the header menu and work subpages)
* Images: holds all images and svgs that are referenced throughout the site.
* Styles: holds all styles for the website, except for the univeral "App.css" file at the top level. There is one styles file for each page. 

The public directory is organized as follows:
* Holds index.html file, hglogo for browser icon, and manifest.json file for metadata.

## Live Site

The latest deployment of this site is live at [huntergroff.com](https://www.huntergroff.com)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.