import { useProduto } from "../../hooks/useProduto";
import { ProdutosList } from "../ProdutoList";
import './styles.css'

export function Produtos() {
    const {listaProduto} = useProduto();
    return (
        <>
            <h1 className="title">
                Produtos
            </h1>
            <div className="prods">
            {listaProduto?.length && listaProduto.map((produto) => (
                <ProdutosList 
                    key={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    categoria={produto.categoria}
                    preco={produto.preco} id={""} ativo={false} codigo={0} codigoDeBarras={0} cor={""} descricao={""} />
                ))}
            </div>
        </>
    )
}