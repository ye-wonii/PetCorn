import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PetInfo from "./Components/Pet/PetInfo/PetInfo";
import PetEnroll from "./Components/Pet/PetEnroll/PetEnroll";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Adopt from "./Components/Pet/Adopt/Adopt";
import Mypage from "./Components/Mypage/Mypage";
import Consult from "./Components/Pet/Consult/Consult";

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/PetInfo" component={PetInfo} />
        <Route path="/PetEnroll" component={PetEnroll} />
        <Route path="/Adopt" component={Adopt} />
        <Route path="/Mypage" component={Mypage} />
        <Route path="/Consult" component={Consult} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
