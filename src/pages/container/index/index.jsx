
import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { getListDataActionUp, getListDataActionDown, getList } from '../../store/home/action'

import { Statistic, Button, Card } from 'antd';
const { Meta } = Card;


@connect(state => ({
    price: state.home.price,
    list: state.home.list
}), {
    getListDataActionUp,
    getListDataActionDown,
    getList
})
class Index extends PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    }
    countTo(item) {
        const { getListDataActionUp, getListDataActionDown  } = this.props
        item === 'up' ? getListDataActionUp() : getListDataActionDown()
    }
    getList() {
        // 获取列表
        const { getList } = this.props;
        getList()
    }
    render() {
        const { price, list } = this.props;
        return (
            <div style={{width:'600px',margin:'0 auto'}}>
                <div>
                    <Statistic title="物价加减数字器" value={price} />
                </div>
                <div>
                    <Button type="primary" onClick={() => this.countTo('up')}>物价上涨</Button>
                    <Button type="primary" onClick={ () => this.countTo('down')}>物价下跌</Button>
                </div>
                <Button type="primary" onClick={ () => this.getList()}>获取列表</Button>
                <div className="clearfix">
                    {
                        list.map(item => {
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


export default Index;

