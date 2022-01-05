import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/Pages/HomePage/HomePage";
import WorldOne from "./components/Pages/GameWorldOne/WorldOne";
import StartingWorld from "./components/Pages/StartingWorld/StartingWorld";
import WorldTwo from "./components/Pages/GameWorldTwo/WorldTwo";
import EndingWorld from "./components/Pages/EndingWorld/EndingWorld";
import Winner from "./components/Pages/Winner/Winner";
import Users from "./components/Pages/Users/Users";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="main-container">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admin" exact component={Users} />
            <Route
              path="/game"
              exact
              render={() => <StartingWorld score={score} />}
            />
            <Route
              path="/worldone"
              exact
              render={() => <WorldOne score={score} setScore={setScore} />}
            />
            <Route
              path="/worldtwo"
              exact
              render={() => <WorldTwo score={score} setScore={setScore} />}
            />
            <Route
              path="/end"
              exact
              render={() => <EndingWorld score={score} setScore={setScore} />}
            />
            <Route
              path="/winner"
              exact
              render={() => <Winner score={score} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
