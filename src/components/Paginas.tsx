import { Routes, Route } from "react-router-dom"
//import { Inicio } from "./Inicio";
import { Produtos } from './Produtos';

export function Paginas() {
    return (
        <section>
            <Routes>
                <Route path="/produtos" element={<Produtos />}/>
            </Routes>
        </section>
    )
}
