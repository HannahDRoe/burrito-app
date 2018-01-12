import React from 'react';
import SelectMealBtns from './components/SelectMealBtns';
import DisplayCategories from './components/DisplayCategories';
import Navigation from './components/Navigation';


class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>
                </h1>
                <Navigation {...this.props.state} />
                <SelectMealBtns {...this.props} />
                <DisplayCategories {...this.props} />
            </div>
        );
    }
}
export default Main;