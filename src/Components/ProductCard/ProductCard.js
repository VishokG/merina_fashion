import React from 'react'
import "./ProductCard.css";

const ProductCard = (props) => {
    return (
        <div className="product_card">
			<img src={props.loc} alt="" className="product_img" />
			<div className="product_text">
				<p className="product_type uppercase">{props.type}</p>
				<p className="product_name uppercase">{props.name}</p>
				<p className="product_price uppercase"><span className="product_original_price">${props.price} </span><span className="slashed">${props.discount}</span></p>
			</div>
		</div>
    )
}

export default ProductCard;