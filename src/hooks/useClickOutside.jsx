import { useEffect } from "react";

/**
 * useClickOutside
 * Appelle `handler` quand un clic survient en dehors de l'élément référencé.
 * Utile pour fermer un menu, un modal, un drawer, etc.
 *
 * @param {React.RefObject} ref     — référence à l'élément DOM
 * @param {Function}        handler — callback appelé au clic extérieur
 *
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => setOpen(false));
 * return <div ref={ref}>...</div>
 */
export function useClickOutside(ref, handler) {
  useEffect(() => {
    function listener(e) {
      // Si le clic est DANS l'élément — on ignore
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    }

    document.addEventListener("mousedown",  listener);
    document.addEventListener("touchstart", listener); // Support mobile

    // Nettoyage au démontage
    return () => {
      document.removeEventListener("mousedown",  listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}