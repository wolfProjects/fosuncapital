import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './index.scss';

const PerspectiveList = (props) => {
    let { articleList } = props;
    
    return (
        <div className="perspective-list">
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
            >
                {
                    articleList.data.map((article, index) => (
                        <SwiperSlide key={index}>
                            <div className="perspective-list-item">
                                <div className="perspective-hd" style={{ backgroundImage: `url('${article.attributes.avatar.data.attributes.url}')` }}></div>
                                <div className="perspective-bd">
                                    <p className="perspective-date">{ article.attributes.publishedAt }</p>
                                    <h2 className="perspective-title">{ article.attributes.title }</h2>
                                    <p className="perspective-summary">{ article.attributes.summary }</p>
                                    <div className="perspective-title-info">
                                        <p className="perspective-title-info-name">{ article.attributes.author }</p>
                                        <small className="perspective-title-info-title">{ article.attributes.authorTitle }</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default PerspectiveList;