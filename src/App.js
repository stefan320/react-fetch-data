import Header from "./components/Header/Header";
import Users from "./containers/Users/Users";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header>Users List</Header>
      <Users />
    </div>
  );
};

export default App;
