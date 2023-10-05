import React from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget  = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} /> <Badge colorScheme='blue'>8</Badge>
    </div>
  )
}

export default CartWidget
