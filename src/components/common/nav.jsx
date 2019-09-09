
import React, { PureComponent } from 'react';
import { Menu } from 'antd'

import { NavLink } from 'react-router-dom';

import routerConfig from '../../pages/routerConfig';

class Nav extends PureComponent {
    render() {
        return (
            <nav>
                <Menu className="dropdownNav" mode="horizontal">
                    {
                        routerConfig.map(item => {
                            if(item.path === '*') {
                                return null
                            } else {
                                return (
                                    <Menu.Item key={item.name}>
                                        <NavLink to={item.path} >
                                            {item.title}
                                        </NavLink>
                                    </Menu.Item>
                                    
                                )
                            }
                        })
                    }
                </Menu>
            </nav>
        )
    }
}

export default Nav;