import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Main from './Main';
// import { entree_types } from './data/entree_types';
// import { ingredients } from './data/ingredients';



const mapStateToProps = (state) => {
    console.log(state)
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actionCreators, dispatch)
}

const Connection = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Connection; 
 