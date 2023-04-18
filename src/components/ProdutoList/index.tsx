import { Produto } from "../../@types/Produto"
export function ProdutosList({id, imagem, nome, categoria, preco}:Produto){
    return(
        <div className="prod" key={id}>
                    <a href="">
                        <div className="prod_img">
                            <img src={imagem} alt={nome} />
                        </div>
                    </a>
                    <div className="prod_footer">
                        <h1>{nome}</h1>

                    </div>
                    <div className="buttom">
                        <button className="btn">R$ {preco}</button>
                        <div>
                            <a href="#" className="btn"><p>{categoria}</p></a>
                        </div>
                    </div>
                </div>
    )
}
