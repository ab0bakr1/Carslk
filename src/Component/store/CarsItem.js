import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import "./CarsItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useShoppingFav } from "../../context/ShoppingFavContext";

const CarsItem = ({ id, CarImg, make, model, price, year}) => {
  const { increaseFavQuantity} = useShoppingFav();
  return (
    <Card className='border-0'>
        <CardImg src={CarImg} className='card-img' variant="top" style={{height:"200px",objectFit:"contain"}} />
        <Card.Body>
            <div className='d-flex justify-content-between align-items-center'>
                <h5>{make}</h5>
                <h6><strong>Model:</strong>{model}</h6>
                <h5>{year}</h5>
            </div>
            <div className="card-item d-flex justify-content-between align-items-center gap-4">
                <button className='card-btn w-100'>Buy now</button>
                <button className='border-0 item-fav-btn' onClick={() => increaseFavQuantity(id)}><FontAwesomeIcon icon={faHeart} /></button>
                <h5 className='py-1 m-0'>{price}</h5>
            </div>
        </Card.Body>
    </Card>
  )
}

export default CarsItem