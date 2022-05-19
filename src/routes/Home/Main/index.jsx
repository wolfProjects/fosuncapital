import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import uiData from '@/Data/i18n';

const Page = (props) => {
    let { tabs } = props;
    let [ currentIndex, setCurrentIndex ] = useState(0);
    let currentSelectedTab = tabs[currentIndex] || tabs[0];
    let { more } = uiData.getUiI18n().home.main;
    
    //  focus tab button
    useEffect(
        () => {
            let tabBtn = document.querySelectorAll(`[data-id="${currentIndex}"]`)[0];
            tabBtn && tabBtn.scrollIntoView();
            swiperRef && swiperRef.slideTo(currentIndex);
        }, 
        [currentIndex]
    );
        
    let [swiperRef, setSwiperRef] = useState(null);
    const handleSwiperChange = () => {
        setCurrentIndex(swiperRef.realIndex);
    };

    function handleTabPagination(direction) {
        let newIndex;
        if (direction == -1)
            newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        else
            newIndex = (currentIndex + 1) % tabs.length;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="page-home-main">
            <div className="side">
                <div className="tabs">
                    <div className="tabs-hd">
                        {
                            tabs.map((tab, index) => (
                                <button className={classNames("tabs-hd-item", { active: currentIndex == index })} key={ index } onClick={() => setCurrentIndex(index)} data-id={index}>
                                    { tab.attributes.tabTitle }
                                </button>
                            ))
                        }
                    </div>
                    {
                        currentSelectedTab && (
                            <div className="tabs-bd">
                                <small className="tab-title">{ currentSelectedTab.attributes.tabTitle }</small>
                                <h2 className="tabs-bd-title">{ currentSelectedTab.attributes.title }</h2>
                                <p className="tabs-bd-content">{ currentSelectedTab.attributes.content }</p>
                                { currentSelectedTab.attributes.pagePath && <Link className="tabs-bd-more" to={`/${currentSelectedTab.attributes.pagePath}`}>{ more }</Link> }
                                { currentSelectedTab.attributes.pagePath && <Link className="tabs-bd-more-mobile" to={`/${currentSelectedTab.attributes.pagePath}`}></Link> }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="main">
                { tabs && 
                    <Swiper
                        onSwiper={setSwiperRef}
                        effect={"fade"}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Pagination]}
                        onSlideChange={handleSwiperChange}
                    >
                        {
                            tabs.map((tab, index) => (
                                <SwiperSlide style={{ backgroundImage: `url('${tab.attributes.pcBackground.data.attributes.url}')`}} key={index} />
                            ))
                        }
                    </Swiper>
                }
            </div>
            <div className="pagination">
                <button className="pagination-item pre" onClick={() => handleTabPagination(-1)} />
                <button className="pagination-item next" onClick={() => handleTabPagination(1)} />
            </div>
        </div>
    );
};

export default Page;
