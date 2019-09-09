import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { getShowDetail } from "../../store/action/action";

import { Button, Card } from 'antd';

@connect(state => ({
    isBool: state.action.isBool
}), {
    getShowDetail
})
class Index extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    getShow() {
        const { getShowDetail } = this.props
        getShowDetail()
    }
    render() {
        const { isBool } = this.props

        return (
            <div className="g-default">
                <h2>这是活动页面</h2>
                <Button type="primary" onClick={ () => this.getShow()}>获取内容展示</Button>
                <Card style={{ width: 300, display: isBool ? 'block':'none' }}>
                    <p>卡片内容</p>
                </Card>
            </div>
        )
    }
} 

export default Index;

