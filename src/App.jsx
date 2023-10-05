import React from "react";
import Navbar from "./components/Navbar";
import ItemsListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemsListContainer greeting={"Bienvndidos a mi tienda"}/>
    </div>
  )
}

export default App