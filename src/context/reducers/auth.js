import { REGISTER_LOADING } from "../../constants/actionTypes";

const auth = (state, {type, payLoad})=> {
    switch(type){
        case REGISTER_LOADING:
            console.log('state',this.state)
            return {
                ...state,
                loading:true,
            };
            
            

            default:
              return state;
    }
};

export default auth;   