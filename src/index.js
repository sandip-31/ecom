import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./redux/store";
import swDev from "./service-worker-dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

swDev();
