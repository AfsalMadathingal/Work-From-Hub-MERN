import React from 'react';
import '../../styles/stripe.css'

interface MessageProps {
  message: string;
}

export const Message: React.FC<MessageProps> = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default Message;
