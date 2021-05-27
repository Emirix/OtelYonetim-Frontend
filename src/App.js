import React,{ueState,useEffect} from "react"
import Index from "./views/page/Index";
import OdaListesi from "./views/page/OdaListesi"
import Login from "./views/page/Login"
import RezListesi from "./views/page/RezList"
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import Sidebar from "./views/component/Sidebar"
import Header from "./views/component/Header"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 sifirla">
              <Sidebar />
            </div>
            <div className="col-lg-9 sifirla bg-dark2 cek-sola">
              <Header />

              <Switch>
                <Route path="/" exact>
                  <Index />
                </Route>

                <Route path="/oda-listesi" exact>
                  <OdaListesi />
                </Route>

                <Route path="/rezervasyonlar" exact>
                  <RezListesi />
                </Route>

                <Route path="/login" exact>
                  <Login />
                </Route>

              </Switch>
            </div>
          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
