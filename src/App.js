import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import GiveReview from "./Pages/GiveReview/GiveReview";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Myorders from "./Pages/Myorders/Myorders";
import NotFound from "./Pages/NotFound/NotFound";
import Payment from "./Pages/Payment/Payment";
import Purchase from "./Pages/Purchase/Purchase";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/myorders">
              <Myorders />
            </Route>
            <Route path="/review">
              <GiveReview />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route exact path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
