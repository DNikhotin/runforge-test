import { useState, useEffect, useMemo } from "react";
import type { Run } from "../../types";
import type { FilterValue } from "../FilterBar/FilterBar.types";
import { fetchRuns } from "../../api/mockApi";
import { FilterBar } from "../FilterBar/FilterBar";
import { RunsContent } from "../RunsContent/RunsContent";
import { RunDetailsModal } from "../RunDetailsModal/RunDetailsModal";
import styles from "./RunsPage.module.css";

const getInitialParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    q: params.get("q") || "",
    status: (params.get("status") as FilterValue) || "all",
  };
};

export function RunsPage() {
  const initialParams = getInitialParams();

  const [runs, setRuns] = useState<Run[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState<string>(initialParams.q);
  const [statusFilter, setStatusFilter] = useState<FilterValue>(initialParams.status);
  const [selectedRun, setSelectedRun] = useState<Run | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchRuns();
      setRuns(data);
    } catch (err) {
      setError("Не удалось загрузить данные. Попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (statusFilter !== "all") params.set("status", statusFilter);

    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    
    window.history.replaceState(null, "", newUrl);
  }, [searchQuery, statusFilter]);

  const filteredRuns = useMemo(() => {
    return runs.filter((run) => {
      const matchesSearch = run.name.toLowerCase().includes(searchQuery.toLowerCase()) || run.repository.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || run.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [runs, searchQuery, statusFilter]);

  return (
    <main className={styles.Main}>
      <h1 className={styles.Title}>Runs</h1>
      
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      
      <RunsContent
        isLoading={isLoading}
        error={error}
        filteredRuns={filteredRuns}
        onRetry={loadData}
        onReset={() => { setSearchQuery(""); setStatusFilter("all"); }}
        onRunClick={setSelectedRun}
      />
      
      {selectedRun && (
        <RunDetailsModal run={selectedRun} onClose={() => setSelectedRun(null)} />
      )}
    </main>
  );
}