import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Page extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                { title: '创富', path: '/about' },
                { title: '视角', path: '/perspective' },
                { title: '企业', path: '/firm' },
                { title: '团队', path: '/team' },
                { title: '沟通', path: '/contact' },
            ]
        };
    }

    render() {
        let { menuList } = this.state;

        return (
            <div className="header">
                <Link className="header-logo" to="/" />

                <div className="header-side">
                    <div className="header-language-selector"></div>
                    <div className="header-menu">
                        <div className="header-menu-hd"></div>
                        <div className="header-menu-bd">
                            {
                                menuList.map((item, key) => (
                                    <div className="header-menu-item" key={key}>
                                        <Link to={item.path}>{ item.title }</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;