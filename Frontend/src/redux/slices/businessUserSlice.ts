import { createSlice } from '@reduxjs/toolkit';
import { IBUsers } from '../../@types/businessUser';



const initialState = {
  user: {} as IBUsers,
  loading: false,
  error: {} ,
  isAuthenticated:false,
  accessToken: "",
  modal:false,
  formData:{},
  pageTitle:""
};

const businessUserSlice = createSlice({

  name: 'businessUser',
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
    },
    setAccessToken(state,action){
      state.accessToken = action.payload;
    },
    setModal(state,action){
      state.modal = action.payload
    },setFormData(state,action){
      state.formData = action.payload
    },
    setPageTitle(state,action){
      state.pageTitle = action.payload
    },
    resetBUser:( )=>initialState,

  },


});

export const { setUser, setLoading, setError ,setIsAuthenticated , setAccessToken ,setModal , setFormData ,resetBUser, setPageTitle } = businessUserSlice.actions;

export default businessUserSlice.reducer;

