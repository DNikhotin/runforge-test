import type { Run } from "../types";

const mockRuns: Run[] = [
  {
    id: "1",
    name: "Auth refactor",
    repository: "web-platform",
    branch: "feature/auth-v2",
    status: "succeeded",
    createdAt: "2023-11-20T10:00:00Z",
    durationSeconds: 145,
    logs: ["Starting auth refactor...", "Installing deps...", "Running tests...", "All tests passed."],
    result: "Successfully merged to main.",
  },
  {
    id: "2",
    name: "Fix checkout tests",
    repository: "payments",
    branch: "fix/checkout-123",
    status: "failed",
    createdAt: "2023-11-20T11:30:00Z",
    durationSeconds: 60,
    logs: ["Starting tests...", "Test payment_flow.js failed.", "Error: Timeout 5000ms exceeded."],
    result: "Tests failed on step 3.",
  },
  {
    id: "3",
    name: "Update dependencies",
    repository: "api-service",
    branch: "chore/deps",
    status: "running",
    createdAt: "2023-11-21T09:15:00Z",
    logs: ["Fetching updates...", "Updating package.json...", "npm install in progress..."],
  },
  {
    id: "4",
    name: "Deploy to staging",
    repository: "web-platform",
    branch: "main",
    status: "queued",
    createdAt: "2023-11-21T10:00:00Z",
    logs: ["Waiting for runner..."],
  },
  {
    id: "5",
    name: "Add dark mode",
    repository: "design-system",
    branch: "feat/dark-mode",
    status: "succeeded",
    createdAt: "2023-11-19T14:00:00Z",
    durationSeconds: 300,
    logs: ["Building components...", "Injecting CSS variables...", "Build successful."],
    result: "Storybook deployed.",
  },
  {
    id: "6",
    name: "Database migration",
    repository: "api-service",
    branch: "db/migrate-users",
    status: "failed",
    createdAt: "2023-11-18T08:00:00Z",
    durationSeconds: 15,
    logs: ["Connecting to DB...", "Migration failed: Duplicate column."],
    result: "Rollback executed.",
  },
];

export const fetchRuns = (() => {
  let isFirstCall = true;

  return (): Promise<Run[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isFirstCall) {
          isFirstCall = false;
          reject(new Error("Network error")); 
        } else {
          resolve(mockRuns); 
        }
      }, 600);
    });
  };
})();