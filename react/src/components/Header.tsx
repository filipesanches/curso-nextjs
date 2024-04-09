const Header = ({ title } : { title: string }) => {
  return (
    <header>
      <h1>{title ? title : 'Sem título'}</h1>
    </header>
  )
}

export default Header