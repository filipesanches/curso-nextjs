export default function util(){
  const creteList = (quantity: number) => {
    const list = []
    for (let i = 0; i < quantity; i++) {
      list.push(<li key={i}>Item da lusta util {i}</li>)
    }
    return (
      <>
        <ul>
          {list}
        </ul>
      </>
    )
  }



  return {
    creteList
  }
}