import React, { useState } from 'react';
import SuccessDisplay from '../components/subscription/SuccessDisplay';


const ManageBilling: React.FC = () => {
  const [sessionId, setSessionId] = useState<string>('');

  return (
    <main>
      <SuccessDisplay sessionId={sessionId} />
    </main>
  );
};

export default ManageBilling;
