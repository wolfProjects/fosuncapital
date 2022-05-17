import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const uiText = {
    more: '了解更多'
}

const Page = (props) => {
    let { tabs } = props;
    let [ currentIndex, setCurrentIndex ] = useState(0);
    let currentSelectedTab = tabs[currentIndex] || tabs[0];

    return (
        <div className="page-home-main">
            <div className="side">
                <div className="tabs">
                    <div className="tabs-hd">
                        {
                            tabs.map((tab, index) => (
                                <button className={classNames("tabs-hd-item", { active: currentIndex == index })} key={ index } onClick={() => setCurrentIndex(index)}>
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
                                { currentSelectedTab.attributes.pagePath && <Link className="tabs-bd-more" to={`/${currentSelectedTab.attributes.pagePath}`}>{ uiText.more }</Link> }
                                { currentSelectedTab.attributes.pagePath && <Link className="tabs-bd-more-mobile" to={`/${currentSelectedTab.attributes.pagePath}`}></Link> }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="main"></div>
            <div className="pagination">
                <button className="pagination-item pre" onClick={() => setCurrentIndex(currentIndex - 1 + tabs.length) % tabs.length} />
                <button className="pagination-item next" onClick={() => setCurrentIndex((currentIndex + 1) % tabs.length)} />
            </div>
        </div>
    );
};

export default Page;
