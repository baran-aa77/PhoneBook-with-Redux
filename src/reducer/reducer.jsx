const Myreducer=(state,action)=>{
    const{type,payload}=action;
    switch(type){
        case'Set':
            return{}
        case'Add':
            return{};
        case('Delete'):
            return
        {
            state.filter((item) => item.id !== payload.id)
            console.log(2)
        }


        default:
            throw new Error('not found')
    }
};
export default Myreducer;