import type { RunStatus } from "../../types";
export type FilterValue = RunStatus | "all";

export type FilterBarProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: FilterValue;
  setStatusFilter: (value: FilterValue) => void;
};