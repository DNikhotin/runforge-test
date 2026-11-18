import styles from "./FilterBar.module.css";
import type { FilterBarProps, FilterValue } from "./FilterBar.types";

const STATUSES: { id: FilterValue; label: string }[] = [
  { id: "all", label: "All" },
  { id: "queued", label: "Queued" },
  { id: "running", label: "Running" },
  { id: "succeeded", label: "Succeeded" },
  { id: "failed", label: "Failed" },
];

export function FilterBar({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }: FilterBarProps) {
  return (
    <div className={styles.Wrapper}>
      <input
        type="text"
        placeholder="Поиск по названию или репозиторию..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.SearchInput}
      />
      <div className={styles.FiltersRow}>
        {STATUSES.map((status) => (
          <button
            key={status.id}
            className={`${styles.FilterBtn} ${statusFilter === status.id ? styles.Active : ""}`}
            onClick={() => setStatusFilter(status.id)}
          >
            {status.label}
          </button>
        ))}
      </div>
    </div>
  );
}