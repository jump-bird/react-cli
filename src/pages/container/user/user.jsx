
import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { getInfo } from '../../store/home/action';

import { Button, Card } from 'antd';
const { Meta } = Card;

@connect(state => ({
    info: state.home.info
}), {
    getInfo
})
class User extends PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    }
    getInfo() {
        // 获取信息
        const { getInfo } = this.props;
        getInfo()
    }
    render() {
        const { info } = this.props;
        return (
            <div style={{width:'600px',margin:'0 auto'}}>
                <Link to={`/user/info`}>
                    跳转至用户详情
                </Link>
                <div>
                    <Button type="primary" onClick={ () => this.getInfo()}>获取列表</Button>
                </div>
                <div className="clearfix">
                    {
                        info.map(item => {
                            return (
                                <Card
                                    key={item.name}
                                    hoverable
                                    style={{ width: 200, float: 'left' }}
                                    cover={<img alt={item.name} src={item.avatar} />}
                                >
                                    <Meta title={item.name} description="www.instagram.com" />
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default User;



