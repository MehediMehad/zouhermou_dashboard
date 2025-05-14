// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const baseApi = createApi({
    reducerPath: 'baseApi', // The key for this API in the Redux store
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://backend.fightnetapp.com/api/v1', 
        // baseUrl: 'http://localhost:5002//api/v1', 
        baseUrl: 'http://10.0.20.36:5002/api/v1', 
        
        prepareHeaders: (headers) => {
            const token = Cookies.get("accessToken") // Assuming token is stored in the auth slice
            
            if (token) {
                headers.set('Authorization', `${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["USERS", "SELLERS", "ADMIN", "SERVICE", "BOOKING", "WORKER"]
});

// Export hooks for usage in functional components
export default baseApi;
