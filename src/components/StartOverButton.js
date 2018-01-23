import React from 'react';

class StartOverButton extends React.Component {
    constructor(props){
        super(props);
        this.startOver = this.startOver.bind(this);
    }
    startOver(){
        this.props.toggleHidden();
        this.props.resetOrder()

    }
    
    render() {
        return (
            <button onClick={this.startOver}>
              &lt; Start Over
            </button>
        );
    }
}

export default StartOverButton;