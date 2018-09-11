import React from 'react'
import CartListItem from './CartListItem';

const CartList = (props) => (
  <div>
    <table>
      <thead>
          <tr>
            <th>Beer</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
      </thead>
      <tbody>
        {props.cart.map(cartItem => {          
        return  <CartListItem name={cartItem.name} quantity={cartItem.quantity} id={cartItem.id} updatesItem={props.updatesItem} deleteItem={props.deleteItem}/>
        })
        }
      </tbody>
    </table>

    <p className="actions">
      <a onClick={props.returnToListing}>Continue shopping</a>
      <button onClick={props.submitUpdate}>Update</button>
      <button className="button-primary">Checkout</button>
    </p>
  </div>
	)

export default CartList