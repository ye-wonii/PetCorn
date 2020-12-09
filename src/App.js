import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PetInfo from "./Components/Pet/PetInfo/PetInfo";
import PetEnroll from "./Components/Pet/PetEnroll/PetEnroll";
import Main from "./Components/Main/Main";
import Adopt from "./Components/Pet/Adopt/Adopt";
import Mypage from "./Components/Mypage/Mypage";
import Consult from "./Components/Pet/Consult/Consult";
import { createGlobalStyle } from "styled-components";
import SetQuestion from "./Components/Pet/Consult/Question/Enroll/SetQuestion";
import Answer from "./Components/Pet/Consult/Question/Answer/Answer";
import QuestionInfo from "./Components/Pet/Consult/Question/Answer/QuestionInfo/QuestionInfo";
import Todos from "./Components/Pet/Todo/Todos";

const history = createBrowserHistory();
const GlovalStyle = createGlobalStyle`
  font-family: "AppleSDGothicNeoSB00";
`;
const App = () => {
  return (
    <BrowserRouter history={history}>
      <GlovalStyle> </GlovalStyle>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/PetInfo" component={PetInfo} />
        <Route path="/PetEnroll" component={PetEnroll} />
        <Route path="/Adopt" component={Adopt} />
        <Route path="/Mypage" component={Mypage} />
        <Route path="/Consult" component={Consult} />
        <Route path="/Todos" component={Todos} />
        <Route path="/Question" component={SetQuestion} />
        <Route path="/Answer" component={Answer} />
        <Route path="/DetailQuestion/:id" component={QuestionInfo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
