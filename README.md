### Why we need React Query ?

React Query is a React library for data fetching. But the question arises that why we need a library for data fetching ? When we already have useEffect hook for data fetching and useState hook to store states like loading, error and resulted data and if the data is need through out the application then we can use State Management Libraries like Redux.
<br>

Most of the state management libraries are good for client states such as changing the theme of the app, Adding items in a cart or openning a modal.

<br>

But when it comes to server state/Asynchronous then it is not a good solution to rely on state management tools and useEffect. Becuase Client state is only persisted in the app but server state works remotely. Data can be updated by any other person remotely or our UI may not be in sync with server data if we use state management tools and useEffect. Even it is very challenging to implement data caching, updating state data in the background, making multiple requests for same data or performance optimization.

React Query can handle all of this very easily. So let's explore React Query 🥳✌️😃
<br>
<br>

### Project Setup

1. Creating a React app using CRA
2. Creating a JSON Server for API requests
3. Creating db.json file
4. Creating 3 different routes using React-Router-DOM
5. Fetching data traditional way in Friends Component.
