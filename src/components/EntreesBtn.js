import React from 'react';

class EntreesBtn extends React.Component{
    
    render(){
        const {i , entree, id, description, categories, toggleHidden} = this.props;
        return(
            <div key={i+id} value={id} onClick={this.props.chooseEntree.bind(null, id, [...categories])} >
                <div onClick={toggleHidden}>
                    {entree}
                    <p> {description} </p>
                </div>
            </div>
        )
    }
}

export default EntreesBtn;