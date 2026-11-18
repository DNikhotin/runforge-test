import type { Run } from "../../types";
import { RunItem } from "../RunItem/RunItem";
import styles from "./RunList.module.css";

type Props = { runs: Run[]; onRunClick: (run: Run) => void; };

export function RunList({ runs, onRunClick }: Props) {
  return (
    <div className={styles.Wrapper}>
      {runs.map((run) => (
        <RunItem key={run.id} run={run} onClick={() => onRunClick(run)} />
      ))}
    </div>
  );
}