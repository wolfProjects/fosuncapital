import React from 'react';
import './index.css';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';

const Page = () => {
    return (
        <React.Fragment>
            <aside className="page-aside">
                <SubMenu />
            </aside>
            <main className="page-main">
    
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'team' })(Page);
