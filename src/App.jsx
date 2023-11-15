import React from "react";
import { GlobalProvider } from "./context/GlobalContext.";
import Header from "./components/Header";
import Transaction from "./components/transactionFile/Transaction";
import Balance from "./components/Balance";
import ListTransaction from "./components/transactionFile/ListTransaction";

function App() {
  
  return(
    <GlobalProvider>
      <Header/>
      <Balance/>
      <Transaction/>
      <ListTransaction/>
      <h1>Hola Mundo</h1>
    </GlobalProvider>
  )
}

export default App;