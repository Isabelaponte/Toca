import styles from "./button.module.css";

export default function Button({ children, onClick }: any) {
  return <button className={styles.button} onClick={() => onClick()}>{children}</button>;
}
