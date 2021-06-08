import Header from "./components/Header/Header";
import FullDetails from "./components/FullDetails/FullDetails";
import Users from "./containers/Users/Users";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header>Users List</Header>
      <Route path="/" component={Users} />
      <Route path="/user-:id" component={FullDetails} />
    </div>
  );
};

export default App;
