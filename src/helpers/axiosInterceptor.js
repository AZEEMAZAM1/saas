import axios from 'axios';
import  AsyncStorage  from 'react-native'
import envs from "../config/env";



let headers={};

const axiosInstance = axios.create({
    baseURL: envs.BACKEND_URL,
    headers,
});

console.log('envs.BACKEND_URL', envs.BACKEND_URL);

axiosInstance.interceptors.request.use(
   async (config)=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }, 
); 

export default axiosInstance;