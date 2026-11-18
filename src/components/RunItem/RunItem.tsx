import { useMemo } from "react";
import type { Run } from "../../types";
import { STATUS_CONFIG } from "../../constants";
import { formatDate, formatDuration } from "../../utils/formatters";
import styles from "./RunItem.module.css";

type Props = { run: Run; onClick: () => void; };

export function RunItem({ run, onClick }: Props) {
  const formattedDate = useMemo(() => formatDate(run.createdAt), [run.createdAt]);
  const currentStatus = STATUS_CONFIG[run.status];

  return (
    <div className={styles.Wrapper} onClick={onClick}>
      <div className={styles.Header}>
        <h3 className={styles.Name}>{run.name}</h3>
        <div className={`${styles.Badge} ${styles[run.status]}`}>
          {currentStatus.label}
        </div>
      </div>
      <div className={styles.Meta}>
        <span><strong>Repo:</strong> {run.repository}</span>
        <span><strong>Branch:</strong> {run.branch}</span>
        <span><strong>Date:</strong> {formattedDate}</span>
        <span><strong>Duration:</strong> {formatDuration(run.durationSeconds)}</span>
      </div>
    </div>
  );
}