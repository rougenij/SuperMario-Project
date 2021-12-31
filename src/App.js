import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import WorldOne from "./components/Pages/GameWorldOne/WorldOne";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <div className="App">
              <Route path="/game" exact component={WorldOne} />
            </div>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
