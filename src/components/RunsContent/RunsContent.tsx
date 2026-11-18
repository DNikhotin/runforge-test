import type { Run } from "../../types";
import { Loader } from "../Loader/Loader";
import { RunList } from "../RunList/RunList";
import styles from "./RunsContent.module.css";

type Props = {
  isLoading: boolean;
  error: string | null;
  filteredRuns: Run[];
  onRetry: () => void;
  onReset: () => void;
  onRunClick: (run: Run) => void;
};

export function RunsContent({ isLoading, error, filteredRuns, onRetry, onReset, onRunClick }: Props) {
  if (isLoading) return <Loader />;

  if (error) {
    return (
      <div className={styles.StateMessage}>
        <p>{error}</p>
        <button onClick={onRetry} className={styles.Btn}>Повторить</button>
      </div>
    );
  }

  if (filteredRuns.length === 0) {
    return (
      <div className={styles.StateMessage}>
        <p>Ничего не найдено по вашему запросу.</p>
        <button onClick={onReset} className={styles.Btn}>Сбросить фильтры</button>
      </div>
    );
  }

  return <RunList runs={filteredRuns} onRunClick={onRunClick} />;
}