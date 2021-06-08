import Header from "./components/Header/Header";
import FullDetails from "./components/FullDetails/FullDetails";
import Users from "./containers/Users/Users";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header>Users List</Header>
      <Route path="/" component={Users} />
      <Route path="/user-:id" component={FullDetails} />
    </div>
  );
};

export default App;
