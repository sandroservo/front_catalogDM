import { Header } from "./components/Header"
import { Produtos } from "./components/Produtos"
//import 'boxicons';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Paginas } from "./components/Paginas"
//import { Carrinho } from "./components/Carrinho"
//import { DataProvider } from "./context/Dataprovider"

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Produtos />
      </BrowserRouter>

    </div>
    
  )
}

export default App
