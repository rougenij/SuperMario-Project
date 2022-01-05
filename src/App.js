import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./components/Pages/HomePage/HomePage";
import WorldOne from "./components/Pages/GameWorldOne/WorldOne";
import StartingWorld from "./components/Pages/StartingWorld/StartingWorld";
import WorldTwo from "./components/Pages/GameWorldTwo/WorldTwo";
import EndingWorld from "./components/Pages/EndingWorld/EndingWorld";
import Users from "./components/Pages/Users/Users";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    console.log(score);
  }, [score]);
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
            {/* <Route exact path="/saved" render={ () => <Saved data = { this.state } />} /> */}
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
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
