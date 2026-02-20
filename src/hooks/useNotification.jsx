import { useState, useCallback, useRef } from "react";

/**
 * useNotification
 * Gère une notification toast temporaire.
 * Chaque appel à notify() s'auto-dismiss après `duration` ms.
 *
 * @param {number} duration — durée d'affichage en ms (défaut: 2800)
 * @returns {{ notification, notify, dismiss }}
 */
export function useNotification(duration = 2800) {
  const [notification, setNotification] = useState(null);
  const timerRef = useRef(null);

  const notify = useCallback(
    (message, type = "info") => {
      // Annule le timer précédent si un toast est déjà affiché
      if (timerRef.current) clearTimeout(timerRef.current);

      setNotification({ message, type, id: Date.now() });

      timerRef.current = setTimeout(() => {
        setNotification(null);
      }, duration);
    },
    [duration]
  );

  const dismiss = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setNotification(null);
  }, []);

  return { notification, notify, dismiss };
}