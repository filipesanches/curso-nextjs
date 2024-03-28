import styles from "@/styles/Subdivisao.module.css"

export default function Subdivisao(props: any) {
  return (
    <div className={`${styles.subdivisao} ${props.black ? styles.black : styles.white}`}></div>
  )
}