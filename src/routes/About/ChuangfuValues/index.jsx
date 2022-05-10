import React from 'react';
import './index.scss';
import uiData from '@/Data/i18n';
import { motion } from 'framer-motion';

const ChuangfuValues = () => {
    let { speakingTitle, speakings, slogan } = uiData.getUiI18n().chuangfu.chuangfuValues;

    return (
        <motion.div 
            className="chuangfu-values"
            initial={{ opacity: 0, transform: 'translateX(20px)' }}
            animate={{ opacity: 1, transform: 'translateX(0px)' }}
            exit={{ opacity: 0, transform: 'translateX(20px)' }}
            transition={{ duration: .65 }}
        >
            <div className="chuangfu-values-hd">
                <div className="founder-speaking">
                    <div className="founder-speaking-hd">{ speakingTitle }</div>
                    <div className="founder-speaking-bd">
                        <div className="founder-speaking-avatar">
                            <img src="" alt="" />
                        </div>
                        <div className="founder-speaking-list">
                            {
                                speakings.map((speaking, index) => (
                                    <div className="founder-speaking-list-item" key={index}>
                                        <small className="sub-title">{ speaking.subTitle }</small>
                                        <h3 className="main-title">{ speaking.title }</h3>
                                        <p className='content'>{ speaking.content }</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="chuangfu-values-bd">
                <div className="chuangfu-values-slogan">
                    <h3 className="chuangfu-values-slogan-main">{ slogan[0] }</h3>
                    <small className='chuangfu-values-slogan-sub'>{ slogan[1] }</small>
                    <p className="chuangfu-values-slogan-content">{ slogan[2] }</p>
                    <div className="chuangfu-values-slogan-founder-signature">
                        <div className="bd"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ChuangfuValues;