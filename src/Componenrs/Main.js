import React from 'react';
import './Css/main.css';
import Phonenav from './Phonenav';

export default function Main() {
    return (
        <>
            <div className="main">
                <span className="heading">Mobiles</span>
                <div className="mainwrapper">
                    <div className="brand-names-container">
                        <div className="brand-names">SAMSUNG</div>
                        <div className="brand-names">IPhones</div>
                        <div className="brand-names">ASUS</div>
                        <div className="brand-names">Redmi</div>
                    </div>
                    <hr />
                    <Phonenav/>
                </div>
            </div>
        </>
    )
}
