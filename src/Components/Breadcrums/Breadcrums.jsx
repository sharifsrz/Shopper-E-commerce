// eslint-disable-next-line no-unused-vars
import React from "react"
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    // eslint-disable-next-line react/prop-types
    const {product} = props;
  return (
    <div className="breadcrums">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums