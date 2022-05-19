import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './index.scss';
import { motion } from 'framer-motion';

export default config => WrappedComponents => (props) => {
    let style = classNames(`page page-${config.name}`);

    return (
        <div className={style} exit={{ x: '100%', transition: { duration: 2 }}}>
            <motion.div className="page-bd">
                <WrappedComponents {...props} updateHeaderStyle={props.updateHeaderStyle} />
            </motion.div>
        </div>
    );
};