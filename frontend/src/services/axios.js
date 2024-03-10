import axios from "axios";
import getToken from './token'

// const instance = axios.create();

// instance.interceptors.request.use((config) => {
//     const token = sessionStorage.getItem("token");
    // console.log(token);
//     if(token){
//         config.headers.Authorization = `Bearer ${token}`;
//         console.log(config.headers.Authorization);
//         return config;
//     }
//     },(error) => {
//         return Promise.reject(error);
//     });

// export default instance;


const instance = axios.create();
instance.interceptors.request.use((config) => {
    const token = getToken();
    console.log(token);
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`;
        // console.log(config.headers.Authorization);
        return config;
    }
},(error) =>{
    return Promise.reject(error);
});

export default instance;