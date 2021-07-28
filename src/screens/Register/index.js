import React from 'react';
import RegisterComponent from '../../components/Signup';
import { useState } from 'react';
import envs from '../../config/env';
import { useContext, useEffect } from 'react/cjs/react.development';
import axios from '../../helpers/axiosInterceptor';
import register from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider'

const Register=()=> {
   const [form, setForm]= useState({});
   const [errors, setErrors]= useState({});
   const {authDispatch} = useContext(GlobalContext);

//    console.log('form :>> ', form)
console.log('authDispatch :>> ',authDispatch);

   const onChange=({ name, value})=>{
       setForm({...form,[name]:value});

       if(value !== ''){

            if(name==='password'){

                if(value.length<6){
                    setErrors((prev)=>{
                        return{...prev,[name]:'this fiels needs minimum six characters'}
                    });
                }else{
                    setErrors((prev)=>{
                        return{...prev,[name]:null}
                    });
                }
            }else{   
        setErrors((prev)=>{
            return{...prev,[name]:null}
        });
    }
       }else{
           setErrors((prev) =>{
               return {...prev,[name]:'This field id required'};
           })
       }
   };

   const onSubmit = () => {
    //validations
    // console.log('form :>> ', form);

    if(!form.userName){
        setErrors((prev)=>{
            return{...prev,userName:"Please add a username"}
        });
    }
    if(!form.firstName){
        setErrors((prev)=>{
            return{...prev,firstName:"Please add a first name"}
        });
    }
    if(!form.lastName){
        setErrors((prev)=>{
            return{...prev,lastName:"Please add a last name"}
        });
    }
    if(!form.email){
        setErrors((prev)=>{
            return{...prev,email:"Please add a email"}
        });
    }
    if(!form.password){
        setErrors((prev)=>{
            return{...prev,password:"Please add a password"}
        });
    }





    if(
        Object.values(form).length===5 &&
    Object.values(form).every(item=>item.trim().length>0)&&
    Object.values(errors).every(item=>!item)
    ) {
        register(form)(authDispatch);
    }

   };
    return  ( 
    <RegisterComponent
                 onSubmit={onSubmit} 
                 onChange={onChange}
                 form={form}
                  errors={errors}
                  />
                  
    );   
};
export default Register;  