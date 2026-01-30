import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodosPage from "./pages/TodosPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
