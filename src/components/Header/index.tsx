
import { Link } from "react-router-dom"
import { List, ShoppingCart } from "@phosphor-icons/react";
import Logo from '../../assets/logo.png'


import './styles.css'
export function Header() {
   
    return (
        <header>
            <div className="menu">
                <List size={32} weight="fill" />
            </div>
            <Link to="">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/"> Inicio</Link>
                </li>
                <li>
                    <Link to="/produtos"> Produtos</Link>
                </li>
            </ul>
            <div className="cart" >
            <ShoppingCart size={32} weight="fill" />
            <span className="item_total">0</span>
            </div>
        </header>
    )
}