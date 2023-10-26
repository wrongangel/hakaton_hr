import styles from './window.module.scss'

interface Props {
  children: React.ReactNode
  header: string
}
const Window = ({ children, header }: Props) => {
  return (
  <div className={styles.window__container}>
    <h2>{header}</h2>
    <div className={styles.window}>{children}</div>
  </div>
  )
}
export default Window