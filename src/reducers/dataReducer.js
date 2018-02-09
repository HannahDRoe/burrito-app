 function databyId (state ={}, action){
    switch (action.type) {
        case 'RECEIVE_DATA':
            console.log(action.allData)
            return action.allData
            
        default:
            return state;

    }   
}

export default databyId;