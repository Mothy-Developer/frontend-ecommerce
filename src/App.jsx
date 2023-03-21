import Login from "./component/Login";
import HomePage from "./component/HomePage"
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div className="flex flex-col h-full">
      <Navbar/>
      <Feed/>
    </div>
  );
}
