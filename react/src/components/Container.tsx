import dataUser from "@/data/dataUser";
import Header from "./Header";
import ListaUserData from "./ListaUserData";
import MaisMenos from "./MaisMenos";

const Container = () => {
  return (
    <>
      <Header title="Aprendendo React" />
      <ListaUserData data={dataUser}/>
      <MaisMenos />
    </>
  )
};
export default Container