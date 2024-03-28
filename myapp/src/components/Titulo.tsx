export default function Titulo(propriedade: any) {
  console.log(propriedade);
  return propriedade.teste ? (
    <>
      <h3>Titulo 3</h3>
      <p>Paragrafo</p>
      <p>Propriedade teste</p>
    </>
  ) : (
    <>
      <h3>Titulo 3</h3>
      <p>Paragrafo</p>
    </>
  );
}
