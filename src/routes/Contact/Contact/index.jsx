import React from 'react';
import './index.scss';
import uiData from '@/Data/i18n';

const Contact = () => {
    let { title, places, contactTitle, emailTitle, email, teleTitle, tele } = uiData.getUiI18n().contact.contact;

    return (
        <div className="contact">
            <h1 className="contact-hd">{title}</h1>
            <div className="contact-bd">
                {
                    places.map((place, index) => (
                        <div className="office" key={index}>
                            <h2 className="row-title">{ place.area}</h2>
                            <div className="office-bd">
                                {
                                    place.officeList.map((office, index) => (
                                        <div className="office-list" key={index}>
                                            <div className="office-list-item">
                                                <h3 className="office-title">{ office.title }</h3>
                                                <p className="office-address">{ office.address }</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
    
            <div className="contact-ft">
                <h2 className="row-title">{ contactTitle }</h2>
                <div className="contact-us">
                    <div className="contact-us-main">
                        <div className="row">
                            <div className="title">{ emailTitle }</div>
                            <div className="description">{ email }</div>
                        </div>
                        <div className="row">
                            <div className="title">{ teleTitle }</div>
                            <div className="description">{ tele }</div>
                        </div>
                    </div>
                    <div className="contact-us-qrcode">
                        【！！缺失二维码】
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;