import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import WorldOne from "./components/Pages/GameWorldOne/WorldOne";
import StartingWorld from "./components/Pages/StartingWorld/StartingWorld";
import Users from "./components/Pages/Users/Users";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admin" exact component={Users} />
            <Route path="/game" exact component={StartingWorld} />
            <Route path="/worldone" exact component={WorldOne} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
