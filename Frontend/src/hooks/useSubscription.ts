import { useState, useEffect } from 'react';

export const useSubscription = (sessionId: string) => {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      // Example: Fetch subscription status from your backend
      fetch(`/api/subscriptions/status/${sessionId}`)
        .then((response) => response.json())
        .then((data) => setStatus(data.status))
        .catch((error) => console.error(error));
    }
  }, [sessionId]);

  return status;
};
