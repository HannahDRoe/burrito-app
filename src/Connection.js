import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Main from './Main';

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
 