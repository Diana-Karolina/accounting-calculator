import React from "react";
import { GlobalProvider } from "./context/GlobalContext.";
import TransactionForm from "./components/transactionFile/TransactionForm";
import Balance from "./components/Balance";
import ListTransaction from "./components/transactionFile/ListTransaction";
import IncomeExpenses from "./components/IncomeExpenses";
import Header from "./components/Header"
import GastosRegister from './components/GastosRegister'

function App() {
  
  return(
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen 
      flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <h1 className="text-4x1 font-fold">Register Contable</h1>
             <Header/>
             <IncomeExpenses />
             <Balance />
             <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
            <GastosRegister />
            <ListTransaction />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;