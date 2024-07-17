import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/api';
import { SignupForm } from '../interface/types';
import Notification from './Notification';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupForm>({ email: '', name: '', password: '' });
  const [isValidPassword, setIsValidPassword] = useState(true);
  const navigate = useNavigate();

  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  } | null>(null);

  const showNotification = (msg:string, msgType:any) => {
    setNotification({ message: msg, type: msgType });
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Auto close after 3 seconds
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Validate password requirements
    if (name === 'password') {
      const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
      setIsValidPassword(isValid);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // const response = await signUp(formData);
      const response = await signUp(formData);

      if (response?.status) {
        showNotification("Successfull","success");
        setFormData({ email: '', name: '', password: '' });
        navigate('/application');
        console.log('Signup successful!');
      }
    } catch (error) {
      showNotification("Invalid credentials","error");
      console.error('Error signing up:', error);
      // Display an error message to the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              // required
              className={`w-full px-3 py-2 border ${isValidPassword ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus:ring focus:ring-indigo-100`}
            />
            {!isValidPassword && (
              <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters long and include at least 1 letter, 1 number, and 1 special character.</p>
            )}
          </div>
          <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Sign Up</button>
          <p className="text-center text-sm text-gray-600 mt-4">Already have an account <a href="/" className="text-blue-600 hover:underline">Sign In</a></p>
        </form>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
