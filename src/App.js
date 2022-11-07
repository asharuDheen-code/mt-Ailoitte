import logo from "./logo.svg";
import "./App.css";
import BasicTable from "./Components/Table";
import DatePicker from "./Components/DatePicker";
import { Stack } from "@mui/system";
import { useState } from "react";

function App() {
  const [newDate, setNewDate] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Stack spacing={2}>
          <DatePicker setNewDate={setNewDate} />
          <BasicTable newDate={newDate} />
        </Stack>
      </header>
    </div>
  );
}

export default App;
