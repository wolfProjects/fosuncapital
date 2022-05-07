import React from 'react';
import './index.scss';

const ArticleList = (props) => {
    let { articleList, banner } = props;
    
    return (
        <div className="article-list">
            <div className="article-list-hd">
                { banner && <div className="banner" style={{ backgroundImage: `url('${banner}')` }}></div> }
            </div>
            <div className="article-list-bd">
                {
                    articleList.data && articleList.data.map((article) => (
                        <div className="article-list-item" key={article.attributes.publishedAt}>
                            <div className="article-list-item-main">
                                <div className="article-list-item-date">{ article.attributes.publishedAt}</div>
                                <h3 className="article-list-item-title">{ article.attributes.title }</h3>
                                <p className="article-list-item-summary">{ article.attributes.summary && article.attributes.summary.trim() }</p>
                            </div>
                            <div className="article-list-item-thumb"><img src={article.attributes?.thumb?.data?.attributes?.url}/></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ArticleList;