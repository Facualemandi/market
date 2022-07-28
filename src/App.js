import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Context/context";


import Home from "./Pages/Home/Home";
import Likes from "./Pages/Likes/Likes";

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
