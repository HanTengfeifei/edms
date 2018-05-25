import React from 'react';
import { Card, Row, Col, Tabs,Table,Input, Icon,Modal } from 'antd';
import {RequireUtils} from 'utils';
import './CarHeade.less';
import FormCarAdd from './AddCarHeader';
import Form2 from './EditCarHeader';
class CarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record:{},
      data: [],
    pagination:{},
      loading:false,
      visible:false,
      visible2:false,
      ModalText:"车头添加",
      confirmLoading:false,
    };
    this.findCarHeaderAll=this.findCarHeaderAll.bind(this);
    this.onRefS=this.onRefS.bind(this);
  }
  onRef = (ref) => {
    this.child = ref
  } ;
  onRefS(ref){
    this.childS = ref
  }
  fetch = (params ) => {
    this.setState({ loading: true });
    RequireUtils.baseRequire('car/car-list',params,function (data) {
      if(data.code==1) {
        const pagination = { ...this.state.pagination };

        var list = data.data.list ;
        var nlist = list.map(function (item,index) {
          item.key = index ;
          return item ;
        }) ;

        pagination.total = data.count;
        this.setState({
          loading: false,
          data: nlist,
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
    obj.car_type=0;
    console.log(obj);
    this.fetch(obj);
  }
  findCarHeaderAll(){
    const obj={};
    obj.company_id=localStorage.getItem("company_id");
    obj.page=1;
    obj.limit=10;
    obj.car_type=0;
    console.log(obj);
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
      page: pagination.current
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
      this.child.handleSubmit();
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
    this.child.reset();
  }
  handleOk2 = (e) => {
    this.childS.handleSubmit(e);
  }
  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
    this.childS.reset();
  }
  render() {
    const {data,visible, ModalText, confirmLoading , pagination,loading}=this.state;
    const columns = [{
      title: '车牌号',
      dataIndex: 'car_num',
      key: 'car_num'
    }, {
      title: '准牵引总质量',
      dataIndex: 'car_load',
      key: 'car_load',
    },{
        title: '联系人',
        dataIndex: 'user_name',
        key: 'user_name',
      },{
      title: '联系电话',
      dataIndex: 'user_phone',
      key: 'user_phone',
    },
      {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" style={{marginRight:'10px'}}><Icon type="edit" /><span  onClick={(e) => {
            e.preventDefault();
            // e.stopPropagation();
            this.setState({
              visible2: true,
              record:record,
            });
          }}>编辑</span></a>
          <a href="#"><Icon type="delete" /><span onClick= {(e) => {
            e.preventDefault();
            e.stopPropagation();
            var context = this;
            Modal.confirm({
              title: '您确定要删除该车头信息吗？',
              content: '删除后，该车头信息将无法恢复',
              onOk() {
                RequireUtils.baseRequire('car/del-car',{
                  id: record.id,
                },function (data) {
                  if(data.code==1){
                  alert(data.msg);
                  this.findCarHeaderAll();
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

      <div className={'my-table-title-carHead-center my-custom-padding'}>
        <Modal
          title="编辑车头信息"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          // key={role.role_id+this.state.keyAdd}
        >
          <Form2 ref="form2"  record={this.state.record} nbb={this} onRefS={this.onRefS}  go={this.findCarHeaderAll} />
        </Modal>
          <Row gutter={8} style={{ marginTop: '10px' }}>
            <Col span={24} >
              <div style={{marginBottom:'10px',textAlign:'right'}}>
                <span style={{marginRight:'15px'}}>
                  <Icon type="plus-circle-o" style={{marginRight:'8px'}} />
                  批量导入
                </span>
                <span onClick={this.showModal} >
                   <Icon type="plus-circle-o" style={{marginRight:'8px'}} />
                    新增
                </span>
              </div>
              <Modal title="新增车头信息"
                     visible={visible}
                     onOk={this.handleOk}
                     confirmLoading={confirmLoading}
                     onCancel={this.handleCancel}
                // afterClose={this.close}
                     width={720}
              >
                <FormCarAdd nbb={this} onRef={this.onRef} go={this.findCarHeaderAll} />
              </Modal>
            </Col>
          </Row>
            <Table columns={columns} dataSource={data} loading={loading} pagination={pagination} onChange={this.handleTableChange} />
      </div >
    )
  }
}


export default  CarHeader;
