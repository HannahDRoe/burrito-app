import React from 'react';

class EntreesBtn extends React.Component{

    render(){
        const {i , entree, id, description, categories} = this.props;
        return(
            <div key={i+id} value={id} onClick={this.props.chooseEntree.bind(null, id, [...categories])} >
                {entree}
               <p> {description} </p>
            </div>
        )
    }
}

export default EntreesBtn;