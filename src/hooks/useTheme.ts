// src/hooks/useTheme.ts
// Light-only no-op theme hook
// Purpose: keep compatibility with components that call useTheme() / toggleTheme()
// but disable dark-mode logic entirely so nothing manipulates the DOM or localStorage.

import { useCallback, useState } from "react";

export type Theme = "light";

/**
 * useTheme
 * - Always returns "light"
 * - toggleTheme does nothing (no-op) so callers can still call it safely
 */
export function useTheme(): {
  theme: Theme;
  toggleTheme: () => void;
  setTheme?: (t: Theme) => void; // optional (kept for compatibility)
} {
  const [theme] = useState<Theme>("light");

  // no-op toggle (keeps calls safe)
  const toggleTheme = useCallback(() => {
    /* intentionally left blank — dark mode removed */
  }, []);

  // optional setter kept as a no-op in case some code calls setTheme(...)
  const setTheme = useCallback((_t: Theme) => {
    /* intentionally no-op */
  }, []);

  return { theme, toggleTheme, setTheme };
}
