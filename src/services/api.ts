import axios, { AxiosInstance } from 'axios';
import { SigninForm, SignupForm } from '../interface/types';
import CryptoJS from 'crypto-js';

const API_URL = `${process.env.REACT_APP_API_URL}/auth`;
const secretKey = `${process.env.REACT_APP_SECRET_KEY}`;

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});



const encryptData = (data: object): string => {
  const stringifiedData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringifiedData, secretKey).toString();
};

export const signUp = async (formData: SignupForm): Promise<any> => {
  try {
    const encryptedPayload = encryptData(formData);
    const response = await api.post('/signup', {data:encryptedPayload});
    return response;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};


export const signIn = async (formData: SigninForm): Promise<any> => {
  try {
    const encryptedPayload = encryptData(formData);
    const response = await api.post('/signin', {data:encryptedPayload});
    return response;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};