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
        <div className="container mx-auto w-3/6">
        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
             <h1 className="font-bold">
              Seguimiento de Gastos
             </h1>
             <IncomeExpenses />
             <Balance />
             <Transaction />
            </div>
            <div>
            <ListTransaction />
            </div>
        </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;