import {useState} from 'react'
import "./App.css";
import Form from "./components/Form";
import FormData from "./components/FormData";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Form />
      <FormData users={users} />
    </div>
  );
}

export default App;
