import type { RunStatus } from "./types";

export const STATUS_CONFIG: Record<RunStatus, { label: string }> = {
  queued: { label: "Ожидает" },
  running: { label: "Выполняется" },
  succeeded: { label: "Успех" },
  failed: { label: "Ошибка" },
};