import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Hello React!</h1>
        <p className="app-text">
          Это демо-проект для статьи о том, как создать React-приложение и
          опубликовать его с помощью GitHub Pages
        </p>
        <a
          className="app-link"
          href="https://dtsiki.github.io/blog/ru/creating-a-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Перейти к статье
        </a>
      </header>
    </div>
  );
}

export default App;
