import React, { Component } from 'react';
import CartList from './CartList'
import { connect } from 'react-redux';
import {navigate, deleteItem, updateItem} from '../actions/index'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: this.props.addCart
          }
          this.updatesItem = this.updatesItem.bind(this)
          this.submitUpdate = this.submitUpdate.bind(this)
    }
    
    
    render() {  console.log(this.state)
        return ( 
            <div>
                <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>
                <CartList returnToListing={this.props.returnToListing} cart={this.state.cart} updatesItem={this.updatesItem} deleteItem={this.props.deleteItem} submitUpdate={this.submitUpdate}/>
            </div>
         );
    }

updatesItem (id, quantity) {
    console.log(id);
    console.log(quantity);

    this.setState({
      cart: this.state.cart.map(item => {
        if (item.id === id) item.quantity = Number(quantity)
        return item
      })
    })
  }


submitUpdate() {
    console.log(this.state.cart);
    
    this.props.updateItem(this.state.cart)
}
}



const mapDispatchToProps = (dispatch) => {
    return {
        returnToListing: () => {
            dispatch(navigate('showListing'))
        },
        deleteItem: (id) =>{
            dispatch(deleteItem(id))
        },
        updateItem: (cart) => {
            console.log('hit');
            
            dispatch(updateItem(cart))
        }
    }
}

function mapStateToProps(state){
    
    return {
    addCart: state.addCart,
    //deleteItem: state.deleteItem
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart)