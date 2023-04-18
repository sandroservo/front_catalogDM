import { useContext } from "react";
import { ArrowDown, ArrowUp, Trash, X } from "@phosphor-icons/react";
//import { DataContext } from "../../context/Dataprovider";
import './styles.css'

export function Carrinho() {
    //const {listaProduto} = useProduto();


    const tooglefalse = () => {
       setMenu(false) 
    }


    //const value = useContext(DataContext)
    //const [menu, setMenu] = value.menu

    //const show1 = menu ? "carrinhos show" : "carrinhos";
    //const show2 = menu ? "carrinho show" : "carrinho";
    return (
        <div className="show1">
            <div className="show2">
                <div className="carrinho_close">
                    <X size={32} weight="fill" />
                </div>
                <h2>Seu carrinho</h2>
                <div className="carrinho_center">

                    <div className="carrinho_item">
                        <img src="https://www.useange.com.br/app/assets/images/dinamica/produto/2288/cor_0/tp10368-7-top-azul-deep-010423-322a80.jpg" alt="" />
                        <div>
                            <h3>77007776050 - LEGGING STRING P</h3>
                            <p className="price">R$68,00</p>
                        </div>
                        <div>
                            <ArrowUp size={32} weight="fill" />
                            <p className="quantidade">1</p>
                            <ArrowDown size={32} weight="fill" />
                        </div>
                        <div className="remover_item">
                            <Trash size={32} weight="fill" />
                        </div>
                    </div>
                    <div className="carrinho_item">
                        <img src="https://www.useange.com.br/app/assets/images/dinamica/produto/2288/cor_0/tp10368-7-top-azul-deep-010423-322a80.jpg" alt="" />
                        <div>
                            <h3>77007776050 - LEGGING STRING P</h3>
                            <p className="price">R$68,00</p>
                        </div>
                        <div>
                            <ArrowUp size={32} weight="fill" />
                            <p className="quantidade">1</p>
                            <ArrowDown size={32} weight="fill" />
                        </div>
                        <div className="remover_item">
                            <Trash size={32} weight="fill" />
                        </div>
                    </div>
                    <div className="carrinho_item">
                        <img src="https://www.useange.com.br/app/assets/images/dinamica/produto/2288/cor_0/tp10368-7-top-azul-deep-010423-322a80.jpg" alt="" />
                        <div>
                            <h3>77007776050 - LEGGING STRING P</h3>
                            <p className="price">R$68,00</p>
                        </div>
                        <div>
                            <ArrowUp size={32} weight="fill" />
                            <p className="quantidade">1</p>
                            <ArrowDown size={32} weight="fill" />
                        </div>
                        <div className="remover_item">
                            <Trash size={32} weight="fill" />
                        </div>
                    </div>

                </div>
                <div className="carrinho_footer">
                    <h3>Total: R$ 68,00</h3>
                    <button className="btn">Enviar</button>
                </div>
            </div>
        </div>
    )
}
