import "./App.css";
import CreateTodo from "./components/CreateTodo";
import ListTodo from "./components/ListTodo";
import Status from "./components/Status";

function App() {
  return (
    <>
      <div className="container">
        <CreateTodo />
        <Status />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
