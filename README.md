This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a single page app with a table  that has the following columns: “Author,” “Title,” and “Creation date.”
I fetch 40 questions at a time before the scroll hits the bottom leading to infinite scrolling.
I could not find a way of getting the search results in batches as consecutive requests yielded the same results.
So I am making the requests with from and to dates with 1 month time intervals.
On click of every row, a pop-up opens with question title, text and a link to the question page on stackoverflow.com.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<!-- 
The app should be a single page with the list with the following columns: “Author,” “Title,” and “Creation date.”
The page should have an infinite scroll without noticeable paging.
Pop up with question title and text should be shown with a link to the question page on click on any row in the list.
The result of the test task should be the link to the git repo & optionally working demo site. -->