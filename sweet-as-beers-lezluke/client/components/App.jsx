import React from 'react'
import {connect} from 'react-redux'
import Listing from './Listing'
import Header from './Header'

import Cart from './Cart'

const App = (props) => {
    return (
      <div className='app'>
        <Header />
        {props.showListing === 'showListing' ? <Listing /> : <Cart />}
      </div>
    )
  }

function mapStateToProps(state){
  return {
    showListing: state.navReducer
  }
}

export default connect(mapStateToProps)(App)

