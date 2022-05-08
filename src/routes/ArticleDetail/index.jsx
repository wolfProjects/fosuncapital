import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import Layout from "@/Hoc/Layout";
import services from '@/services';

const Page = () => {
    let [ articleDetail, updateArticleDetail ] = useState(null);
    const pathName = useLocation().pathname;

    useEffect(() => {
        let pathNames = pathName.split('/').filter(i => i.length);
        services.Perspective.fetchArticleDetail(pathNames.pop()).then(res => {
            updateArticleDetail(res.data.data);
        })
    }, []);

    console.log(articleDetail);

    return (
        <React.Fragment>
            {
                articleDetail &&
                <div className="article-detail">
                    <div className="article-detail-hd">
                        <h1 className="article-title">{ articleDetail.attributes.title }</h1>
                        <small className="article-date">{ articleDetail.attributes.publishedAt }</small>
                    </div>
                    <div className="article-detail-bd">{ articleDetail.attributes.content }</div>
                </div>
            }
        </React.Fragment>
    );
};

export default Layout({ name: 'article-detail' })(Page);
