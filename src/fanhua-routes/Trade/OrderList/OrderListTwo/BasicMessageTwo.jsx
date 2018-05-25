import React from 'react';
import { Card, Row, Col, Tabs, Icon, Button, Radio, Select,Table,Switch } from 'antd';
import mystyle from '../tabstyle.less' ;
import MyDetailButtonTwo from './MyDetailButtonTwo' ;
import {RequireUtils} from 'utils';
import './mystep.less' ;
import createHistory from 'history/createHashHistory';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class BasicMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.callback = this.callback.bind(this);
  }
  callback(key) {
    console.log(key);
  }

  render() {
    const {order,_pmyself,go} = this.props ;
    const my_status = order.order_status ;
    return (
      <div >
        <Row>
          <Col span={18}>
            <Row gutter={8} style={{ marginTop: '10px' }}>
              <Col>{order.goods_name}&nbsp;{order.goods_num}吨</Col>
            </Row>
            <Row gutter={8} style={{ marginTop: '10px' }}>
              <Col>价格&nbsp;￥{order.goods_price}</Col>
            </Row>
            <Row gutter={8} style={{ marginTop: '10px' }}>
              <Col  style={{color:'#fd9206'}}>订单金额&nbsp;￥{order.order_sum}</Col>
            </Row>
          </Col>
          <Col span={6} style={{textAlign:'right'}}>
            <Row>
              <Col>
                <span style={{fontSize:'20px',marginRight:'10px'}}>{order.status_name}</span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row gutter={8} style={{ marginTop: '10px' }}>
          <Col>
            <div>
              <span style={{color:'#bbb'}}>含7.5%订单金额的保证金</span>
              <span style={{float:'right',marginRight:'5px'}}>
                  <MyDetailButtonTwo order={order} _pmyself={_pmyself} go={go}></MyDetailButtonTwo>
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div>
              <div className="progress" style={{height:'100px'}}>
                <div className="progress_inner" style={{height:'100px'}}>
                  <div className={my_status>=0?"progress_inner__step active":"progress_inner__step no-active"}>
                    <label htmlFor="step-1">待确认</label>
                  </div>
                  <div className={my_status>=1?"progress_inner__step active":"progress_inner__step no-active"}>
                    <label htmlFor="step-2">待支付</label>
                  </div>
                  <div className={my_status>=2?"progress_inner__step active":"progress_inner__step no-active"}>
                    <label htmlFor="step-3">待调度</label>
                  </div>
                  <div className={my_status>=3?"progress_inner__step active":"progress_inner__step no-active"}>
                    <label htmlFor="step-4">待收货</label>
                  </div>
                  <div className={my_status>=4?"progress_inner__step active":"progress_inner__step no-active"}>
                    <label htmlFor="step-5">待结算</label>
                  </div>
                  <div className={my_status>=5?"progress_inner__step active":"progress_inner__step no-active"}>
                    <label htmlFor="step-6">已完结</label>
                  </div>
                  <input  id="step-1" readOnly  type="radio" checked={my_status==0?true:false} />
                  <input id="step-2" readOnly type="radio" checked={my_status==1?true:false}/>
                  <input id="step-3" readOnly type="radio" checked={my_status==2?true:false}/>
                  <input id="step-4" readOnly type="radio" checked={my_status==3?true:false}/>
                  <input id="step-5" readOnly type="radio" checked={my_status==4?true:false}/>
                  <input id="step-6" readOnly type="radio" checked={my_status==5?true:false}/>

                  <div className="progress_inner__bar"></div>
                  <div className="progress_inner__bar--set"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div >
    )
  }
}
export default BasicMessage;
