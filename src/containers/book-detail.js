import React, { Component } from 'react'
import { connect } from 'react-redux'


class BookDetail extends Component{
    render() {
        if(!this.props.book){
            return <div>Select a book to get started</div>
        }
    return (
        <div>
            <h3>Details for</h3>
            <div>book name: {this.props.book.title}<br/>
            pages: {this.props.book.pages}
            </div>
        </div>
    )
}
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect (mapStateToProps)(BookDetail)

//application state is different from component state, application state is manaaged by redux.

//aplication state is formed by reducers - tied together using combine reducers. For each key in combine reducers, 
//we assign one reducer responsible for creating a piece of state. 

//reducers are in charge of changing state over time. whenever an action is dispatched, it flows through all reducers. 
//based on the action, state will change. 

//action creators are simple functions that return an action. action must always have a type and payload 
//or properties is optional. 