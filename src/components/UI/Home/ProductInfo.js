import React from 'react'
import {ReactComponent as Star} from '../icons/Star1.svg'
import './ProductInfo.css'

function ProductInfo() {

    const [productImage, setProductImage] = React.useState('');
    const [productName, setProductName] = React.useState('');
    const [oldPrice, setOldPrice] = React.useState('');
    const [newPrice, setNewPrice] = React.useState('');
    const prodInfo = [];
    const [allProducts, setAllProducts] = React.useState([]);
    const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);

    // Getting all responses
    if(!stopInfiniteLoop){
        fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
        .then(response => response.json())
        .then(data => {
            for(const dataItem in data){
                prodInfo.push({id: data[dataItem].id, newPrice: data[dataItem].newPrice, oldPrice: data[dataItem].oldPrice, productImage: data[dataItem].productImage, productName: data[dataItem].productName});
            }
            setAllProducts(prodInfo);
            
        })
        setStopInfiniteLoop(true);
    }



  return (
    <div className='prod-container'>
        {

            allProducts && (allProducts.map(item => {
                return(
                    <div className='product-info'>
                        <img src={item.productImage} />
                        <div className='name'>

                            <p className='prod-name'>{item.productName}</p>
                        </div>
                        <div className='price-section'>
                            <div className='rating'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />

                            </div>
                            <div className='prices'>
                                <s>

                                    {item.oldPrice}
                                </s>
                                {item.newPrice}
                            </div>
                        </div>
                        <div className='btn'>

                            <button className='add-items-btn'>ADD TO CART</button>
                        </div>
                    </div>
                )
            }))
        }
    </div>
  )
}

export default ProductInfo