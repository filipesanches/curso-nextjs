import ListaProdutos from "@/data/listaProdutos";
export default function RenderProdutos() {

  return (
    ListaProdutos.map((produto) => (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    ))
  );
}