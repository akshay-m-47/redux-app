import React from 'react'

function Home(props) {
  console.log('Home',props.Data)
  console.log('props',props)
  return (  
      <div className="cart-wrapper item">
        <div className="img-wrapper item">
            <img src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy" alt="" />
        </div>
        <div className="text-wrapper item">
            <span>I-Phone</span>
            <span> Price:$10000</span>
        </div>
        <div className="btn-wrapper item">
            <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}>Add to cart</button>
            <button onClick={()=>props.removeToCartHandler()}>Rmv to cart</button>
        </div>
        
      </div>
   
  )
}
export default Home