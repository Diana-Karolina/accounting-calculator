import React from "react";
import { GlobalProvider } from "./context/GlobalContext.";
import Header from "./components/Header";
import Transaction from "./components/transactionFile/Transaction";
import Balance from "./components/Balance";
import ListTransaction from "./components/transactionFile/ListTransaction";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  
  return(
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen 
      flex justify-center items-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex">
            <div>
             <Header />
             <IncomeExpenses />
             <Balance />
             <Transaction />
            </div>
            <div>
             <ListTransaction />
            </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;