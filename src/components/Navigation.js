import React from 'react';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProject: null,
            numberOfCategories: null
        }
        
    }
    getNumberOfCategories () {
        if (this.props.order.entree_selected.categories !== undefined) {
            this.setState({
                numberOfCategories: this.props.order.entree_selected.categories.length
            });
            
        }   
    }
    render() {
        console.log(this.props.order.entree_selected.categories)
        return (
            <div className={this.props.order.entree_selected.id === null ? 'hidden' : ''} >
                <button > &lt; Previous </button>
                <button> Next  &gt; </button> 
                {/* <p>{this.props.order.entree_selected.categories !== undefined ? this.props.order.entree_selected.categories.length : this.state.numberOfCategories}</p> */}
            </div>
        );
    }
}

export default Nav;