
import { IAdmin } from "../@types/admin";
import { adminAxiosInstance } from "./instance/adminInstance";



const api = adminAxiosInstance;




export const login = async (credential: Partial <IAdmin>)=>{
  
  try {
    
      const response = await api.post('/api/admin/auth/login',credential)


      
      if(response.data.success){
        localStorage.setItem('adminAccessToken',response.data.data.accessToken)
        return response.data
      }

      return null


  } catch (error) {

    return error.response
    
    
  }

}



export const logout = async ()=>{

  try {
    const response = await api.patch('/api/admin/auth/logout',null,{
      withCredentials:true
    });

    localStorage.removeItem('adminAccessToken')

    if(response.data.success){
     
      return response.data
    }

    
    return null

  } catch (error) {

    return error.response


  }


}
