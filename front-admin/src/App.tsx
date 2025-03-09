import { Router } from "@components/common";
import "./App.css";

function App() {
  console.log(process.env.VITE_API_URL);
  return <Router />;
}

export default App;
