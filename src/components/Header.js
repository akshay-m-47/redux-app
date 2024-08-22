import React from 'react'

function Header(props) {
  console.log('Header',props.Data)
  return (
    <div>
      <h1>Home Component</h1>
      <div className="add-to-cart">
        <span className='cart-count'>{props.Data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="" />
      </div>    
    </div>
  )
}
export default Header