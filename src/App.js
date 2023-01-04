import React from "react";
import { Provider } from "react-redux";
import store from "./redux/cakes/store";
import "./App.css";
import Cake from "./components/Cake";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
      </div>
    </Provider>
  );
}

export default App;
