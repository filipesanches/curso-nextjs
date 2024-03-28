import Subdivisao from '@/components/subdivisao';
import styles from "@/styles/Subdivisao.module.css"

export default function GenerateBoard() {
  // Define o número de linhas e subdivisões por linha
  const numberOfRows = 8;
  const numberOfSubdivisoesPerRow = 8;

  // Array para armazenar as linhas de subdivisões
  const rows = [];

  // Loop para criar as linhas
  for (let row = 0; row < numberOfRows; row++) {
    // Array para armazenar as subdivisões da linha atual
    const subdivisoes = [];

    // Loop para criar as subdivisões da linha atual
    for (let col = 0; col < numberOfSubdivisoesPerRow; col++) {
      // Adiciona uma classe 'black' para os elementos de índice par
      const isBlack = (row + col) % 2 === 0;

      // Adiciona o componente Subdivisao ao array de subdivisões
      subdivisoes.push(<Subdivisao key={col} black={isBlack} />);
    }

    // Adiciona a linha com as subdivisões ao array de linhas
    rows.push(
      <div className={styles.board} key={row}>
        {subdivisoes}
      </div>
    );
  }

  // Retorna a renderização das linhas
  return (
    <>
      {rows}
    </>
  );
}
