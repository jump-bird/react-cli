
import React, { PureComponent } from 'react';
import { Row, Col } from 'antd'

import Nav from './nav';

class Header extends PureComponent {
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={6}>
                    
                    </Col>
                    <Col span={12}>
                        <Nav />
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

export default Header;