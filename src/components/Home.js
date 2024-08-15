import React from 'react'

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="" />
      </div>
      <div className="cart-wrapper item">
        <div className="img-wrapper item">
            <img src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy" alt="" />
        </div>
        <div className="text-wrapper item">
            <span>I-Phone</span>
            <span> Price:$10000</span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
export default Home