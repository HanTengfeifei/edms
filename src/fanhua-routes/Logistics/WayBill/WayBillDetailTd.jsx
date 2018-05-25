import React from 'react';
import { Card, Row, Col, Tabs, Icon, Button, Radio, Select,Modal,message } from 'antd';
import AddCar from './AddCar' ;
import mystyle from './tablestyle.less' ;
import {RequireUtils} from 'utils';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class WayBillDetailTd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addcar:false,
      yundanid:"",
      default_car_type:2,
      tableselectrecord:{
        start_date:"",
        car_head:"",
        car_body:"",
        load_num:"",
        driver1:""
      }
    };
    this.callback = this.callback.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  callback(key) {
    console.log(key);
  }


  handleAddCancel = () => {
    this.refs['AddCar'].resetFields() ;
    this.setState({
      addcar:false,
      freeselectData:[],
      default_car_type:2,
      tableselectrecord:{
        start_date:"",
        car_head:"",
        car_body:"",
        load_num:"",
        driver1:""
      }
    });
  } ;
  addCars(yundanid){
    RequireUtils.baseRequire('order-deliver/free-select',{},function (data) {
      if(data.code==1) {
        var list = data.data.list ;
        var nlist = list.map(function (item,index) {
          item.key = index ;
          return item ;
        }) ;
        this.setState({
          freeselectData:nlist
        });
      }else{
        alert(data.msg);
      }
    }.bind(this));
    this.setState({
      addcar:true,
      yundanid:yundanid
    })
  }
  getMyAddCar(item){
    var str = "" ;
    var order_source = Number(item.order_source) ;
    if((item.saler_or_buyer=="saler"&&order_source==1)||(item.saler_or_buyer=="buyer"&&order_source==0)){

    }else{
      if(item.recv_num-item.load_num==0){

      }else{
        str =  <div onClick={()=>this.addCars.bind(this)(item.id)}>
          <Icon type="plus-circle-o" />添加车辆
        </div>
      }
    }
    return str ;
  }
  render() {
    const {item,go,_pthis}=this.props;
    const {addcar,yundanid,freeselectData,default_car_type,tableselectrecord} = this.state ;
    const addCar = this.getMyAddCar.bind(this)(item) ;
    return (
      <div>
        <div >
          <Row className={'table-first-line'}>
            <div >
              < Col span={18}>
                <div style={{textAlign:'left',whiteSpace: 'nowrap'}}>
                  <span style={{marginRight:'5px'}}>运单编号</span>
                  <span style={{marginRight:'20px'}}>{item.deliver_code}</span>
                  <span style={{marginRight:'5px'}}>所属订单</span>
                  <span style={{marginRight:'20px'}}>{item.order_code}</span>
                </div>
              </Col>
              < Col span={6}>
                <div style={{textAlign:'right'}}>
                  <span style={{marginRight:'5px'}}>配送时间</span>
                  <span style={{marginRight:'10px'}}>{item.dispatch_date}</span>
                </div>
              </Col>
            </div>
          </Row>
          <Row className={'table-other-line'} type="flex" align="middle">
            <Col span={3}>
              <div className={'my-custom-center'} title={item.goods_name}>
                {item.goods_name}
              </div>
            </Col>
            <Col span={3}>
              <div className={'my-custom-center'} title={item.recv_num}>
                运载量&nbsp;{item.recv_num}吨
              </div>
            </Col>
            <Col span={4}>
              <div className={'my-custom-center'} title={item.recv_num-item.load_num}>待分配&nbsp;{item.recv_num-item.load_num}吨</div>
              <div className={'my-custom-center'} title={item.load_num}>已运输&nbsp;{item.load_num}吨</div>
              <div className={'my-custom-center'} style={{color:'red'}}>{item.recv_num-item.load_num<0?"订单已修改需重新调度":""}</div>
            </Col>
            <Col span={4} >
              <div className={'my-custom-center'} title={item.addr_name}>卸车场站&nbsp;{item.addr_name}</div>
            </Col>
            <Col span={4}>
              <div className={'my-custom-center'} title={item.car_num}>
                {item.car_num}张&nbsp;出车单
              </div>
            </Col>
            <Col span={3}>
              <div className={'my-custom-center'} title={item.status_name}>
                {item.status_name}
              </div>
            </Col>
            <Col span={3}>
              {addCar}
              <div >
                {/*<Icon type="environment-o" />地图*/}
              </div>
            </Col>
          </Row>
        </div>

        <Modal title="新增车辆"
               visible={addcar}
               width={'60%'}
               onOk={this.handleOk}
               onCancel={this.handleAddCancel}
               footer={null}>
          <AddCar ref="AddCar"  pthis={this} default_car_type={default_car_type} tableselectrecord={tableselectrecord} handleAddCancel={this.handleAddCancel} yundanid={yundanid} go={go.bind(_pthis)} freeselectData={freeselectData}></AddCar>
        </Modal>
      </div >
    )
  }
}
export default WayBillDetailTd;
