import React from 'react';
import './index.scss';

const contactData = {
    title: '全球办公室',
    places: [
        {
            area: '中国',
            officeList: [
                {
                    title: '上海',
                    address: '上海市黄浦区中山东二路600号\n外滩金融中心S1'
                },
                {
                    title: '北京',
                    address: '上海市黄浦区中山东二路600号\n外滩金融中心S1'
                },
                {
                    title: '深圳',
                    address: '广东省深圳市福田区金田路3088号\n中洲大厦'
                },
                {
                    title: '重庆',
                    address: '上海市黄浦区中山东二路600号\n外滩金融中心S1'
                },
                {
                    title: '济南',
                    address: '上海市黄浦区中山东二路600号\n外滩金融中心S1'
                },
                {
                    title: '苏州',
                    address: '上海市黄浦区中山东二路600号\n外滩金融中心S1'
                }
            ]
        },
        {
            area: '海外',
            officeList: [
                {
                    title: '硅谷',
                    address: 'No. 600, Zhongshan East Second Road, Huangpu District, Shanghai Bund Financial Center S1'
                },
                {
                    title: '伦敦',
                    address: 'No. 600, Zhongshan East Second Road, Huangpu District, Shanghai Bund Financial Center S1'
                },
                {
                    title: '新加坡',
                    address: 'Zhongzhou Building, No. 3088, Jintian Road, Futian District, Shenzhen City, Guangdong Province'
                }
            ]
        }
    ],
    contactTitle: '联系我们',
    emailTitle: '邮箱',
    email: 'wangyb@fosun.com',
    teleTitle: '电话',
    tele: '021-3241 4511'
}

const Contact = () => (
    <div className="contact">
        <h1 className="contact-hd">{contactData.title}</h1>
        <div className="contact-bd">
            {
                contactData.places.map((place, index) => (
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
            <h2 className="row-title">{ contactData.contactTitle }</h2>
            <div className="contact-us">
                <div className="contact-us-main">
                    <div className="row">
                        <div className="title">{ contactData.emailTitle }</div>
                        <div className="description">{ contactData.email }</div>
                    </div>
                    <div className="row">
                        <div className="title">{ contactData.teleTitle }</div>
                        <div className="description">{ contactData.tele }</div>
                    </div>
                </div>
                <div className="contact-us-qrcode">
                    【！！缺失二维码】
                </div>
            </div>
        </div>
    </div>
);

export default Contact;