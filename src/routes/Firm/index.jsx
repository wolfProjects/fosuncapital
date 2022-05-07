import React, { useState, useCallback } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';
import services from '@/services';
import tools from '@/libs/tools';

const Page = () => {
    let [ firmList, updateFirmList ] = useState({});

    let fetchFirmList = useCallback(async (currentSelectedSubMenuId) => {
        let firmList = await services.Firm.fetchFirmList(currentSelectedSubMenuId);
        updateFirmList(firmList.data);
    }, []);

    return (
        <React.Fragment>
            <aside className="page-aside">
                <SubMenu onCurrentSelectedSubMenuIDChanged={fetchFirmList} />
            </aside>
            <main className="page-main">
                <div className="firm-list">
                {
                    firmList.data && (
                        firmList.data.map(firm => (
                            <div className="firm-list-item" key={firm.id} onClick={() => tools.openNewPage(firm.attributes.website) }>
                                <div className="firm-list-item-hd">
                                    <div className="firm-list-item-thumb" style={{ backgroundImage: `url('${firm.attributes.thumb.data.attributes.url}')`}}></div>
                                </div>
                                <div className="firm-list-item-bd">
                                    <div className="firm-list-item-meta">
                                        <h3 className="firm-list-item-name">{firm.attributes.name}</h3>
                                        <div className="firm-list-item-summary">{firm.attributes.description}</div>
                                    </div>
                                    <div className="firm-list-item-link">
                                        <p>官网</p>
                                        <p>{firm.attributes.website && firm.attributes.website.substring(0, 22)}..</p>
                                        <small>【缺右箭头】</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
                </div>
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'firm' })(Page);
