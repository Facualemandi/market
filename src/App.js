import { Route, Routes } from "react-router-dom";
import Likes from "./Components/Likes/Likes";
import { ContextProvider } from "./Context/context";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Like" element={<Likes />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
