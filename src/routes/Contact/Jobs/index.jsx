import React, { useState } from 'react';
import './index.scss';
import uiData from '@/Data/i18n';
import { AnimatePresence, motion } from 'framer-motion';

const Jobs = (props={}) => {
    let [ currentJob, updateCurrentJob ] = useState(null);
    let { email, details } = uiData.getUiI18n().contact.jobs;

    return (
        <div className="jobs">
            <div className="job-list">{
                props.list.map((job, index) => (
                    <div className="job-list-item" key={index} onClick={() => updateCurrentJob(job)}>
                        <div className="job-list-item-title">{job.attributes.title}</div>
                        <div className="job-list-item-more"><span>{details}</span>&nbsp;</div>
                    </div>
                ))
            }
            </div>

            <AnimatePresence>
                {
                    currentJob && (
                        <motion.div className="job-detail-dialog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }}>
                            <div className="job-detail-dialog-mask" onClick={() => updateCurrentJob(null)}></div>
                            <div className="job-detail">
                                <div className="job-detail-hd">
                                    <div className="job-detail-dialog-close" onClick={() => updateCurrentJob(null)}></div>
                                    <h3>{ currentJob.attributes.title }</h3>
                                </div>
                                <div className="job-detail-bd">
                                    <p className="job-detail-description">{ currentJob.attributes.jobDescription }</p>
                                    <div className="row">
                                        <div className="row-title">{email}</div>
                                        <a className="row-description" href={`emailTo:${ currentJob.attributes.hrEmail.data.attributes.email }`}>{ currentJob.attributes.hrEmail.data.attributes.email }</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};

export default Jobs;