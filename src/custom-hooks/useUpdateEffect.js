import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  // const firstRenderRef = useRef(true);
  const firstRenderRef = useRef(0);

  useEffect(() => {
    // if (firstRenderRef.current) {
    if (firstRenderRef.current < 2) {
      // firstRenderRef.current = false;
      firstRenderRef.current = firstRenderRef.current + 1;
      return;
    }
    return callback();
  }, dependencies);
}
