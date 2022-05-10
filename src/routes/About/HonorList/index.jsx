import React from 'react';
import './index.scss';
import uiData from '@/Data/i18n';

const HonorList = () => {
    let { honorList } = uiData.getUiI18n().chuangfu.honorList;

    return (
        <div className="honor-list">
            {
                honorList.map((honor, index) => (
                    <div className="honor-list-item" key={index}>
                        <dl className="honor">
                            <div className="honor-index">
                                <div className="honor-index-point"></div>
                            </div>
                            <dt className="honor-hd">{ honor.year }</dt>
                            <dd className="honor-bd">
                                {
                                    honor.honorItems.map((item, index) => <p className="honor-item" key={index}>{ item }</p>)
                                }
                            </dd>
                        </dl>
                    </div>
                ))
            }
        </div>
    );
};

export default HonorList;