import React, { useState, useCallback } from 'react';
import './index.scss';
import Layout from "@/Hoc/Layout";
import SubMenu from '@/Components/SubMenu';
import services from '@/services';

const Page = () => {
    let [ memberList, updateMemberList ] = useState({});
    let [ currentMember, updateCurrentMember ] = useState(null);

    let fetchMemberList = useCallback(async (currentSelectedSubMenuId) => {
        let memberList = await services.Team.fetchMemberList(currentSelectedSubMenuId);
        updateMemberList(memberList.data);
    }, []);

    return (
        <React.Fragment>
            <aside className="page-aside">
                <SubMenu onCurrentSelectedSubMenuIDChanged={fetchMemberList} />
            </aside>
            <main className="page-main">
                <div className="member-list">
                {
                    memberList.data && (
                        memberList.data.map(member => (
                            <div className="member-list-item" key={member.id} onClick={() => updateCurrentMember(member)}>
                                <div className="member-list-item-hd">
                                    <div className="member-list-item-avatar" style={{ backgroundImage: `url('${member.attributes.avatar.data.attributes.url}')`}}></div>
                                </div>
                                <div className="member-list-item-bd">
                                    <div className="member-list-item-name">{member.attributes.name}</div>
                                    <div className="member-list-item-titles">{member.attributes.title}</div>
                                </div>
                            </div>
                        ))
                    )
                }
                </div>

                {
                    currentMember && (
                        <div className="member-detail-dialog">
                            <div className="member-detail-dialog-mask" onClick={() => updateCurrentMember(null)}></div>
                            <div className="member-detail">
                                <div className="member-detail-dialog-close" onClick={() => updateCurrentMember(null)}>关闭按钮，需要补图</div>
                                <div className="member-detail-summary">
                                    <img className="member-detail-avatar" src={currentMember.attributes.avatar.data.attributes.url} />
                                    <div className="member-detail-name">{currentMember.attributes.name}</div>
                                    <div className="member-detail-titles">{currentMember.attributes.title}</div>
                                </div>
                                <div className="member-detail-details">{currentMember.attributes.description}</div>
                            </div>
                        </div>
                    )
                }
            </main>
        </React.Fragment>
    );
};

export default Layout({ name: 'team' })(Page);
