import React, { useState, useCallback } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';
import services from '@/services';
import tools from '@/libs/tools';
import { AnimatePresence, motion } from 'framer-motion';

const Page = () => {
    let [ firmList, updateFirmList ] = useState({});

    let fetchFirmList = useCallback(async (currentSelectedSubMenuId) => {
        let firmList = await services.Firm.fetchFirmList(currentSelectedSubMenuId);
        updateFirmList(firmList.data);
    }, []);

    let [ currentFirm, updateCurrentFirm ] = useState(null);

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
                            <div className="firm-list-item" key={firm.id} onClick={() => updateCurrentFirm(firm) }>
                                <div className="firm-list-item-hd">
                                    <div className="firm-list-item-thumb" style={{ backgroundImage: `url('${firm.attributes.thumb.data.attributes.url}')`}}></div>
                                </div>
                                <div className="firm-list-item-bd">
                                    <div className="firm-list-item-meta">
                                        <h3 className="firm-list-item-name">{firm.attributes.name}</h3>
                                        <div className="firm-list-item-description">{firm.attributes.description}</div>
                                    </div>
                                    {
                                        firm.attributes.website && (
                                            <div className="firm-list-item-link">
                                                <p>官网</p>
                                                <p className="link">{firm.attributes.website}</p>
                                                <small className="go" onClick={(e) => { e.stopPropagation(); tools.openNewPage(firm.attributes.website) } }></small>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        ))
                    )
                }
                </div>

                <AnimatePresence>
                    { currentFirm && (
                        <motion.div className="firm-info-dialog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }}>
                            <div className="firm-info-dialog-mask" onClick={_ => updateCurrentFirm(null)}></div>
                            <div className="firm-info-dialog-bd">
                                <span className="firm-info-dialog-close" onClick={() => updateCurrentFirm(null)}></span>
                                <div className="firm-info-dialog-meta">
                                    <h3 className="firm-info-dialog-name">{currentFirm.attributes.name}</h3>
                                    <div className="firm-info-dialog-description">{currentFirm.attributes.description}</div>
                                </div>
                                {
                                    currentFirm.attributes.website && (
                                        <div className="firm-info-dialog-link">
                                            <p>官网</p>
                                            <p className="link">{currentFirm.attributes.website}</p>
                                            <small className="go" onClick={(e) => { e.stopPropagation(); tools.openNewPage(currentFirm.attributes.website) } }></small>
                                        </div>
                                    )
                                }
                            </div>
                        </motion.div>
                    ) }
                </AnimatePresence>
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'firm' })(Page);
