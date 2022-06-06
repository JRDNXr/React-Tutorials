// To comment, we use either // or /* COMMENT */

// To import files, we use the "import" keyword.
// We import a CSS file here.
import "./App.css";

// App.js is the start of a React file.
// We start off by using "function App() {}"
function App() {
  return (
    // Everything you see on a webpage starts here, within this return ( ) statement
    <html className="App">
      <body>
        <p>Hello, World!</p>
      </body>
    </html>
  ); // return statements have semi-colons
}

// We export the app
export default App;


// We use npm start in terminal to run a React app in the browser.
// React apps auto update. There is no need to refresh.