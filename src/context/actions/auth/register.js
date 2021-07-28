import { REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";
export default ({
    email,
    password,
    userName,
    firstName: first_name,
    lastName: last_name,
})=>dispatch=>{
    dispatch({
        type: REGISTER_LOADING,
    })
    axiosInstance.post('auth/register',{
    email,
    password,
    userName,
    first_name,
    last_name, 
    })
    .then(res=>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data,
        })
    })
    .catch(err=>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: err.response? err.response.data:{error:'Something'} ,
        })
    });
}