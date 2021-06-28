export default (state=[],actions)=>{
    switch(actions.type){
        case 'UPDAE_A_COURSE':
            return actions.payload;
        default :
            return state;    
    }
}