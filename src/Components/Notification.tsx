import React from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const baseStyles = 'fixed top-4 right-4 px-4 py-2 rounded shadow-lg';
  const typeStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <div className={`${baseStyles} ${typeStyles[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
