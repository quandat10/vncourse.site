// eslint-disable-next-line import/no-anonymous-default-export
export default (state=[],actions)=>{
    switch(actions.type){
        case "DELETE_COURSE":
            return actions.payload;
        default :
            return state;    
    }
};