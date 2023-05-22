import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TaskListContextProvider } from "./context/TaskListContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TaskListContextProvider>
      <App />
    </TaskListContextProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);