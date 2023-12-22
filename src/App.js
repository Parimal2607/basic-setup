import { Toaster } from "react-hot-toast";
import "./assets/scss/style.scss";
import Routers from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Routers />
    </div>
  );
}

export default App;
