import React from 'react';

class DisplayCategories extends React.Component {
    render() {
        // console.log(this.props.entreeSelected)
        return (
            <div>
               { this.props.state.order.entree_selected.id }
            </div>
        );
    }
}

export default DisplayCategories;