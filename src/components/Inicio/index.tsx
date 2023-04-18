import Banner from "../../assets/Banner.png"
import { Link } from 'react-router-dom'
import './styles.css'
export function Inicio(){
    return(
       <div className="inicio">
        <Link to="/">
            <h1>Inicio</h1>
        </Link>
        <Link to="/produtos">
            <h1>Produtos</h1>
        </Link>
        <img src={Banner} alt="banner" />
       </div>
    )
}