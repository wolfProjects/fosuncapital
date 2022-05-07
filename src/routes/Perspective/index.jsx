import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';
import services from '@/services';
import ArticleList from './ArticleList';
import PerspectiveList from './PerspectiveList';

const Page = () => {
    let [ UITemplate, updateUITemplate ] = useState(null);

    let setUpPage = useCallback(async (currentSelectedSubMenuId, currentSubMenu) => {
        let articleList = await services.Perspective.fetchArticleList(currentSelectedSubMenuId);
        let banner = await services.Perspective.fetchBanner(currentSelectedSubMenuId);
        let Template = ({ PerspectiveList })[currentSubMenu.UITemplate] || ArticleList;
        updateUITemplate(<Template articleList={ articleList.data } banner={ banner?.data?.data?.attributes?.banner?.data?.attributes?.url }/>);
    }, []);

    return (
        <React.Fragment>
            <aside className="page-aside">
                <SubMenu onCurrentSelectedSubMenuIDChanged={setUpPage}/>
            </aside>
            <main className="page-main">
                { UITemplate }
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'perspective' })(Page);
