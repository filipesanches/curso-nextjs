import RenderProdutos from "./renderProdutos";

export default function tableProdutos() {

  return (
    <>
      <table>
        <tr><th>Id</th><th>Nome</th><th>Preço</th></tr>
        <RenderProdutos />
      </table>
    </>
  )

}