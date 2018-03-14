import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 5 } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 5 } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onIncrementDecrementer}  />
                <CounterControl label="Add 10" clicked={this.props.onIncrementAddFive}  />
                <CounterControl label="Subtract 15" clicked={this.props.onDecrementFive}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onIncrementDecrementer: () => dispatch({type: 'DECREMENT'}),
    onIncrementAddFive: () => dispatch({type: 'ADD', val: 10}),
    onDecrementFive: () => dispatch({type: 'SUBTRACT', val: 15}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
