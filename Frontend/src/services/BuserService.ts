import { IWorkspace } from "../@types/workspace";
import { businessUserApi } from "./instance/BusinessInstance";


const api = businessUserApi;


export const  submitWorkspaceData = async(data:IWorkspace)=>{

    try {

        const response = await api.post('/api/business/work-space',data)

        return response
        
    } catch (error) {
        
        return error.response
    }

}