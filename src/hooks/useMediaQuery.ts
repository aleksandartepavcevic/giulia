import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  const handleChange = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => setMatches(e.matches),
    []
  );

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    handleChange(matchQueryList);

    matchQueryList.addEventListener("change", handleChange);

    return () => matchQueryList.removeEventListener("change", handleChange);
  }, [query, handleChange]);

  return matches;
};
