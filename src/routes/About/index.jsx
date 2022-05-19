import React, { useState, useCallback } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';
import ChuangfuValues from './ChuangfuValues';
import HonorList from './HonorList';
import AnimatedMain from '@/Hoc/AnimatedMain';

const Page = () => {
    let [ UITemplate, updateUITemplate ] = useState(null);
    let setUITemplate = useCallback(async (_, currentSubMenu) => {
        if (!currentSubMenu) return;
        updateUITemplate(({ ChuangfuValues, HonorList })[currentSubMenu.UITemplate]);
    });

    return (
        <React.Fragment>
            <aside className="page-aside">
                <SubMenu onCurrentSelectedSubMenuIDChanged={setUITemplate} />
            </aside>
            <main className="page-main">
                <AnimatedMain>
                    { UITemplate }
                </AnimatedMain>
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'about' })(Page);
