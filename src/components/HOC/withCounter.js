import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count : 0,
        };
        incrementcount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1}))
        };
        render(){
        const { count } = this.state;
        return <OriginalComponent count = {count}
        incrementcount = {this.incrementcount} />
        }
    }
    return NewComponent;
};

export default withCounter;