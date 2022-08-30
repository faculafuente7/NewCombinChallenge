const initialProps = {
    users: []
};

export default function(state = initialProps, action){
    console.log(action.payload)
    switch(action.type){
        case "LOAD_USERS":
            return{
                ...state,
                users: action.payload    
            };
        case "UPLOAD_USER":
            return{
                ...state,
                users: [...state.users, action.payload]
            }    
        default:
            return state;    
    }
}