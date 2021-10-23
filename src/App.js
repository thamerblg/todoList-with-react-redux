import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Filter from "./components/Filter";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="container col-md-6 rounded p-4 mt-3 bg-white">
      <div className="row">
        <h2 className="text-center mb-5 ">
          To-Do <small>List</small>
        </h2>
        <AddTask />
        <Filter />
        <EditTask />
        <ListTask />
      </div>
    </div>
  );
}

export default App;
