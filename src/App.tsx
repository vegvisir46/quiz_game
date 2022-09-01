import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='start' element={<Start />} />
      </Route>
    </Routes>
  );
};

export default App;
