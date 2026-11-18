import type { Run } from "../../types";
import styles from "./RunDetailsModal.module.css";

type Props = { run: Run; onClose: () => void; };

export function RunDetailsModal({ run, onClose }: Props) {
  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.Header}>
          <h2>Детали запуска: {run.name}</h2>
          <button className={styles.CloseBtn} onClick={onClose}>✕</button>
        </div>
        <div className={styles.Body}>
          <div className={styles.Info}>
            <p><strong>Репозиторий:</strong> {run.repository}</p>
            <p><strong>Ветка:</strong> {run.branch}</p>
            <p><strong>Статус:</strong> {run.status}</p>
          </div>
          <h4 className={styles.LogsTitle}>Логи:</h4>
          <pre className={styles.LogsBox}>
            {run.logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </pre>
          {run.result && (
            <>
              <h4 className={styles.LogsTitle}>Результат:</h4>
              <p className={styles.ResultBox}>{run.result}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
