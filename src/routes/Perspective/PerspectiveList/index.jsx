import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './index.scss';
import { Link } from 'react-router-dom';
import tools from '@/libs/tools';

const PerspectiveList = (props) => {
    let { articleList } = props;

    return (
        <div className="perspective-list">
            <div className="not-mobile">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                >
                    {
                        articleList.data.map((article, index) => (
                            <SwiperSlide key={index}>
                                <Link className="perspective-list-item" to={`/article-detail/${article.id}`} target="_blank">
                                    <div className="perspective-hd" style={{ backgroundImage: `url('${article?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url}')` }}></div>
                                    <div className="perspective-bd">
                                        <p className="perspective-date">{ tools.showDate(article.attributes.publishedAt) }</p>
                                        <h2 className="perspective-title">{ article.attributes.title }</h2>
                                        <p className="perspective-summary">{ article.attributes.summary }</p>
                                        <div className="perspective-title-info">
                                            <p className="perspective-title-info-name">{ article?.attributes?.author?.data?.attributes?.name }</p>
                                            <small className="perspective-title-info-title">{ article?.attributes?.author?.data?.attributes?.title }</small>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="mobile-only">
                {
                    articleList.data.map((article, index) => (
                        <Link className="perspective-list-item" to={`/article-detail/${article.id}`} target="_blank" key={article.id}>
                            <div className="perspective-hd" style={{ backgroundImage: `url('${article?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url}')` }}></div>
                            <div className="perspective-bd">
                                <p className="perspective-date">{ tools.showDate(article.attributes.publishedAt) }</p>
                                <h2 className="perspective-title">{ article.attributes.title }</h2>
                                <p className="perspective-summary">{ article.attributes.summary }</p>
                                <div className="perspective-title-info">
                                    <p className="perspective-title-info-name">{ article?.attributes?.author?.data?.attributes?.name }</p>
                                    <small className="perspective-title-info-title">{ article?.attributes?.author?.data?.attributes?.title }</small>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default PerspectiveList;