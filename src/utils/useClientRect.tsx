import { useCallback, useState } from "react";

let name = "";

export function useClientRect() {
  const [rect, setRect] = useState<any>();

  const [entries, setentries] = useState<any>();

  const resizeObserver = new ResizeObserver((entries: any) => {
    setentries(entries);
  });

  const ref = useCallback(
    (node) => {
      setTimeout(() => {
        if (node !== null) {
          setRect(node.getBoundingClientRect());
        }
      }, 300);
    },
    [entries]
  );

  return [rect, ref, resizeObserver];
}
