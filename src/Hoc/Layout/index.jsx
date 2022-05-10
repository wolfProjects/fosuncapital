import React, { useState } from 'react';
import Header from '@/Components/Header';
import classNames from 'classnames';
import './index.scss';

export default config => WrappedComponents => (props) => {
    let style = classNames(`page page-${config.name}`);
    let [ headerStyle, updateHeaderStyle ] = useState(undefined);

    return (
        <div className={style}>
            <div className="page-hd">
                <Header headerStyle={headerStyle} />
            </div>
            <div className="page-bd">
                <WrappedComponents {...props} updateHeaderStyle={updateHeaderStyle} />
            </div>
        </div>
    );
};