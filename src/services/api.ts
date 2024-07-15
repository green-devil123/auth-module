import axios, { AxiosInstance } from 'axios';
import { SigninForm, SignupForm } from '../interface/types';


const API_URL = `${process.env.REACT_APP_API_URL}/auth`;

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (formData: SignupForm): Promise<any> => {
  try {
    console.log("formData", formData);
    const response = await api.post('/signup', formData);
    return response;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};


export const signIn = async (formData: SigninForm): Promise<any> => {
  try {
    console.log("formData", formData);
    const response = await api.post('/signin', formData);
    return response;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};