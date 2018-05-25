import React from 'react';
import { Card, Row, Col, Tabs,Table,Input, Icon, Button, Radio, Select,Form ,Modal} from 'antd';
import {RequireUtils} from 'utils';
import './CarDriver.less'
import AddDriver from './AddCarDriver';
import FormDriver from './EditCarDriver';
class CarDriver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record:{},
      data: [],
      pagination:{},
      loading:false,
      visible:false,
      visible2:false,
      ModalText:"车挂添加",
      confirmLoading:false,
    };
      this.findCarDriverAll=this.findCarDriverAll.bind(this);
      this.onRefS=this.onRefS.bind(this);
  }
  onRef = (ref) => {
    this.child = ref;
  }
  onRefS(ref){
    this.childS = ref;
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
      this.child.handleSubmit();
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
    this.child.reset();
  }
  handleOk2 = (e) => {
    this.childS.handleSubmit(e);
    console.log(e);
    this.setState({
      visible2: false,
    });
  }
  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
    this.childS.reset();
  }
  fetch = (params ) => {
    this.setState({ loading: true });
    RequireUtils.baseRequire('driver/driver-list',params,function (data) {
      if(data.code==1) {
        const pagination = { ...this.state.pagination };
        //Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = data.count;
        this.setState({
          loading: false,
          data: data.data.list,
          pagination,
        });
      }
      else{
        alert("获取用户信息失败！");
      }
    }.bind(this));
  };
  componentDidMount() {
    const obj={};
    obj.company_id=localStorage.getItem("company_id");
    obj.page=1;
    obj.limit=10;
    this.fetch(obj);
  }
  findCarDriverAll(){
    const obj={};
    obj.company_id=localStorage.getItem("company_id");
    obj.page=1;
    obj.limit=10;
    this.fetch(obj);
  }
  handleTableChange = (pagination) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      company_id:localStorage.getItem("company_id"),
      limit: pagination.pageSize,
      page: pagination.current,
      // sortField: sorter.field,
      // sortOrder: sorter.order,
      // ...filters,
    });
  }
  render() {
    const {data,visible, ModalText, confirmLoading , pagination,loading}=this.state;
    const columns = [{
      title: '姓名',
      dataIndex: 'driver_name',
      key: 'driver_name'
    }, {
      title: '身份证号',
      dataIndex: 'driver_card',
      key: 'driver_card',
    },{
        title: '电话号码',
        dataIndex: 'driver_mobile',
        key: 'driver_mobile',
      },{
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" style={{marginRight:'10px'}}><Icon type="edit" /><span  onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({
              visible2: true,
              record:record,
            });
          }}>编辑</span></a>
          <a href=""><Icon type="delete" /><span onClick= {(e) => {
            e.preventDefault();
            e.stopPropagation();
            var context = this;
            Modal.confirm({
              title: '您确定要删除该车头信息吗？',
              content: '删除后，该车头信息将无法恢复',
              onOk() {
                RequireUtils.baseRequire('driver/del-driver',{
                  id: record.id,
                },function (data) {
                  if(data.code==1){
                    alert(data.msg);
                    this.findCarDriverAll();
                  }
                  else{
                    alert(data.msg);
                  }
                }.bind(context));
              },
              onCancel() {
                console.log('Cancel');
              },
            });
          }}>删除</span></a>
        </span>
      ),
    }];
    return (
      <div className={'my-table-title-carDriver-center my-custom-padding'}>
        <Modal
          title="编辑司机信息"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          // key={role.role_id+this.state.keyAdd}
        >
          <FormDriver  record={this.state.record}  onRefS={this.onRefS}   go={this.findCarDriverAll} />
        </Modal>
          <Row gutter={8} style={{ marginTop: '10px' }}>
            <Col span={24} >
              <div style={{marginBottom:'10px',textAlign:'right'}}>
                <span style={{marginRight:'15px'}}>
                  <Icon type="plus-circle-o" style={{marginRight:'8px'}} />
                  批量导入
                </span>
                <span  onClick={this.showModal} >
                   <Icon type="plus-circle-o" style={{marginRight:'8px'}} />
                    新增
                </span>
              </div>
              <Modal title="新增司机信息"
                     visible={visible}
                     onOk={this.handleOk}
                     confirmLoading={confirmLoading}
                     onCancel={this.handleCancel}
                // afterClose={this.close}
              >
                <AddDriver  onRef={this.onRef} go={this.findCarDriverAll} />
              </Modal>
            </Col>
          </Row>
            <Table columns={columns} dataSource={data} loading={loading} pagination={pagination} onChange={this.handleTableChange} />
      </div >
    )
  }
}
export default  CarDriver;