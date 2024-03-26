function soma(a, b) {
  return a + b
}

const teste = (<p>Teste JSX</p>)

export default function jsx4() {
  const subtitulo = 'Hello World! Estou estudando Next.js';
  return (
    <div>
      <h1>integração JSX e JS</h1>
      <h2>{subtitulo}</h2>
      <h3>{3 * 3}</h3>
      <h4>{soma(4, 5)}</h4>
      {teste}
    </div>
  );
}
// Here are some relevant code fragments from other files of the repo:
