import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
            )
        })
    }

    render() {
        
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned here will show up as props in booklist
    //whenever state changes, the component will re render
    return {
        books: state.books
    };
}
//anything returned from this func will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    //whenever select book is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a func and a component, and creates a container
//promote booklist from a component to a container, it needs to know about
//this new dispatch method select book, make it available as props. 