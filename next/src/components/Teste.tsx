import dataUser from "@/data/dataUser";
import CreateListUser from "./CreateListUser";
import Header from "./Header";
import MaisMenos from "./MaisMenos";

const Teste = () => {
  return (
    <>
      <Header title="Hello World" />
      <CreateListUser dataUser={dataUser} />
      <MaisMenos />
    </>
  );
};

export default Teste;
