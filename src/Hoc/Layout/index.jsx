import React from 'react';
import Header from '@/Components/Header';
import classNames from 'classnames';
import './index.scss';

export default config => WrappedComponents => (props) => {
    let style = classNames(`page page-${config.name}`);

    return (
        <div className={style}>
            <div className="page-hd">
                <Header />
            </div>
            <div className="page-bd">
                <WrappedComponents {...props}/>
            </div>
        </div>
    );
};