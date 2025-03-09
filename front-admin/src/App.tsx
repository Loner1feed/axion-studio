import { Router } from "@components/common";
import "./App.css";

function App() {
  console.log("api: ", import.meta.env.VITE_API_URL);
  return <Router />;
}

export default App;
