import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./scss/app.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
