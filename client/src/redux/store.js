// TODO Impleemnt Redux for a global state of authorization

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
