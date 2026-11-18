import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.Container}>
      <div className={styles.Spinner}></div>
      <p>Загрузка запусков...</p>
    </div>
  );
}