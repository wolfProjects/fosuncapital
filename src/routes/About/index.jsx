import React, { useState, useCallback } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';
import ChuangfuValues from './ChuangfuValues';
import HonorList from './HonorList';

const Page = () => {
    let [ UITemplate, updateUITemplate ] = useState(null);
    let setUITemplate = useCallback(async (_, currentSubMenu) => {
        updateUITemplate(({ ChuangfuValues, HonorList })[currentSubMenu.UITemplate]);
    }, []);

    return (
        <React.Fragment>
            <aside className="page-aside">
                <SubMenu onCurrentSelectedSubMenuIDChanged={setUITemplate} />
            </aside>
            <main className="page-main">
                { UITemplate }
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'about' })(Page);
