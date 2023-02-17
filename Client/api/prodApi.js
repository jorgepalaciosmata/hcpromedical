import axios from "axios"
import AuthService from '../services/AuthService';

export const prodApi = axios.create({
    baseURL: 'https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod',
    headers: {
        "Authorization": AuthService.getCurrentUser()
    }
});
