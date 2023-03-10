import React from "react";
import Nav from "./components/Navbar";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <Nav style={{ zIndex: "0" }} />
      <AppRoutes />
    </div>
  );
}

export default App;
