## DEV_PROCESS : 
  - I decided to take this opportunity to teach myself both D3 and TypeScript.  I stuck with React instead of using Angular because I am currrently more familiar with React
  - I started by finding and completing some React/D3 "Hello World" tutorials and was able to get a simple bar graph to display using D3
  - Looking at the data for the US House Price Index I determined that a bar graph would not be adequate.
  - I forked this repository : https://github.com/juanbermudezpareja/LineChartReact and was able to alter it to get the US House Price Index to display.
  - I did not want to turn in a forked project so I decided to start my own from scratch and attempted to implement the same graph with a project I created with create-react-app.
  - I encountered some issues because the code from the forked project was using a previous version of typescript and I needed to alter it in many areas to get it to work with the lastest version.  
  - I was not able to get the tooltips to display like I had it displaying in the forked project - there were no errors in the log and I ran out of time to investigate it.
  - I would have liked to have added a materialUI button that would allow the user to switch between the different datasets provided in the instructions and display the appropriate data for each one.  I could have used Routes here to show different data on different pages.
  - The Tabular data and the graph will shrink and expand as the screen width changes.  The graph does not look great when it is compressed too much so a better solution should be found for the mobile graph display.  The table would also scroll horizontally when I had it working with the forked project - I did not have time to get the scroll working on the project I created from scratch.
  - I have 4 additional coding assignments to do so I was not able to spend the time on this that I would have liked to in order to polish it as much as I would like before showing it.
  - Promises were used in the http requests
  - D3 was utilized for the graph
  
  

Instructions to build, run, and deploy the app are below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run deploy`

Will deploy the app to your github repository environment (github pages).  You will need to configure your github repository and account to allow this.  

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
