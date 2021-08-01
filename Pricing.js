import React from 'react'
import { link } from 'react-router-dom';
import {FaFire } from 'react-icons/fa';
import { Button } from './Button';
import './Pricing.css';


function Pricing() {
    return (
        <div>
            <div className="pricing_section">
                <div className="pricing_wrapper">
                    <h1 className="pricing_heading">pricing</h1>
                    <div className="pricing_container"></div>
                    <Link to="sign up" className='pricing_container-card'>
                    <div className="pricing_container-cardInfo">
                        <div className="icon">
                            <FaFire />
                        </div>
                        <h3>starter</h3>
                        <h4>$8.99</h4>
                        <p>per month</p>
                        <ul className="pricing_container-features">
                            <li>100 Transactions</li>
                            <li>2% cash back</li>
                            <li> $10,000 limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>choose plan</Butto>
                    
                    </div>

                    </Link>

                   </div> 
                </div>
            </div>
        </div>
    );
}

export default Pricing;
