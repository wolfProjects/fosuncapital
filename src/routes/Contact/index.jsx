import React, { useState, useCallback } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';
import Contact from './Contact';
import Jobs from './Jobs';
import services from '@/services';

const Page = () => {
    let [ UITemplate, updateUITemplate ] = useState(null);

    let setUpPage = useCallback(async (_, currentSubMenu) => {
        if (currentSubMenu.isStaticPage) {
            updateUITemplate(({ Contact })[currentSubMenu.UITemplate]);
        }
        else {
            //  request api
            let list = await services.Contact.fetchJobList();
            updateUITemplate(<Jobs list={list.data.data} />);
        }
    }, []);

    return (
        <React.Fragment>
            <aside className="page-aside">
                <SubMenu onCurrentSelectedSubMenuIDChanged={setUpPage} />
            </aside>
            <main className="page-main">
                { UITemplate }
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'contact' })(Page);
