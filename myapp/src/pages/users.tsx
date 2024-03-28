import Titulo from "@/components/Titulo";
import util from "../components/_util";
export default function Users(){
  return (
    <>
      <h2>Users</h2>
      <Titulo teste="teste"/>
      {util().creteList(5)}
    </>
  )
}