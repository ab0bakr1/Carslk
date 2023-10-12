import React from 'react'
import "./Company.css"
import BMW from "../../../../IMG/BMW.png";
import Tesla from "../../../../IMG/Tesla.png";
import Chevrolet from "../../../../IMG/Chevrolet.png";
import Mercedes from "../../../../IMG/Mercedes.png";
import Toyota from "../../../../IMG/Toyota.png";
import Hyundai from "../../../../IMG/Hyundai.png";
import Audi from "../../../../IMG/Audi.png";
import JEEP from "../../../../IMG/JEEP.png";


const Company = ({ handleFiltersChange }) => {
  return (
    <>
        <h4 className='my-3 text-uppercase'>Company</h4>
        <div className="Companys">
            <button onClick={handleFiltersChange} name='make' value='JEEP' className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={JEEP} className='Company-icon'></img>JEEP</button>
            <button onClick={handleFiltersChange} name="make" value="Audi" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={Audi} className='Company-icon'></img>Audi</button>
            <button onClick={handleFiltersChange} name="make" value="Hyundai" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={Hyundai} className='Company-icon'></img>Hyundai</button>
            <button onClick={handleFiltersChange} name="make" value="Toyota" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={Toyota} className='Company-icon'></img>Toyota</button>
            <button onClick={handleFiltersChange} name="make" value="Mercedes" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={Mercedes} className='Company-icon'></img>Mercedes</button>
            <button onClick={handleFiltersChange} name="make" value="Chevrolet" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={Chevrolet} className='Company-icon'></img>Chevrolet</button>
            <button onClick={handleFiltersChange} name="make" value="Tesla" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={Tesla} className='Company-icon'></img>Tesla</button>
            <button onClick={handleFiltersChange} name="make" value="BMW" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'><img src={BMW} className='Company-icon'></img>BMW</button>
        </div>
    </>
  )
}

export default Company