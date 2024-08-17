import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: {},
  isAuthenticated:false,
};

const userSlice = createSlice({

  name: 'user',
  initialState,


  reducers: {

    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsAuthenticated(state, action){
      state.isAuthenticated = action.payload;
    }

  },


});

export const { setUser, setLoading, setError ,setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;

