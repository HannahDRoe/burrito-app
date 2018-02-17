 function databyId (state ={}, action){
    switch (action.type) {
        case 'RECEIVE_DATA':
            return action.allData
            
        default:
            return state;

    }   
}

export default databyId;