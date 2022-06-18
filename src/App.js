import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "./components/Listing";
import SingleRecord from "./components/SingleRecord";
function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/record/:id" element={<SingleRecord />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
