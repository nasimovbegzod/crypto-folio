import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SinglePage from "./pages/single-page/SinglePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/single/:id" element={<SinglePage />}/>
    </Routes>
    
  );
}

export default App;
