import React from 'react';
import { Card, Row, Col, Tabs, Icon, Button, Radio, Select,Table,Switch,Modal,message,Input } from 'antd';
import mystyle from './tabstyle.less' ;

import createHistory from 'history/createHashHistory';


import AddFieldStationList from './AddFieldStationList' ;
import UpdateFieldStationList from './UpdateFieldStationList' ;
import {RequireUtils} from 'utils';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

function myHandleTableChange(pagination, filters, sorter) {
  const pager = this.state.pagination;
  pager.current = pagination.current;
  pager.limit = pagination.pageSize ;
  this.setState({
    pagination: pager,
  });
  this.fetch({
    pageSize: pagination.pageSize,
    limit:pagination.pageSize,
    page:pagination.current,
    currentPage: pagination.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
}

function getTableData(url,params) {
  RequireUtils.baseRequire(url,params,function (data) {
    if(data.code==1) {
      var list = data.data.list ;
      var keyList = list.map(function (item,index) {
        item.key = index ;
        return item ;
      }) ;
      const pagination = this.state.pagination;
      pagination.limit = pagination.pageSize ;
      pagination.total = data.data.count;
      this.setState({
        loading: false,
        data:keyList,
        pagination
      });
    }else{
      this.setState({data:[]})
    }
  }.bind(this))
}



class FieldStationListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      staionadd:false,
      staionupdate:false,
      pagination: {pageSize:10},
      updateData:[],
      firstEnter:true,
      loading: false,
      firstEnter:true,
      searchparams:{find_str:"",f_type:""}
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

  handleTableChange(pagination, filters, sorter) {
    myHandleTableChange.bind(this)(pagination, filters, sorter)
  }

  fetch(params = {}) {
    getTableData.bind(this)('addr/addr-list',params)
  }

  componentDidMount() {
    this.fetch();
  }

  handleAddCancel = () => {
    this.refs['AddFieldStationList'].resetFields() ;
    this.setState({
      staionadd:false,
    });
  } ;
  handleUpateCancel = () => {
    this.refs['UpdateFieldStationList'].resetFields() ;
    this.setState({
      staionupdate:false,
    });
  } ;

  addFieldStationList(){
      this.setState({
        staionadd:true
      })
  }

  deleteStaion(e,id){
    e.stopPropagation();
    e.preventDefault();
    var context = this;
    Modal.confirm({
      title: '您确定要删除该场站吗？',
      content: '',
      onOk() {
        RequireUtils.baseRequire('addr/del-addr',{
          id: id,
        },function (data) {
          message.success(data.msg);
          this.fetch(this.state.pagination) ;
        }.bind(context));
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  updateStaion(id){
    var _this = this ;
    RequireUtils.baseRequire("addr/addr-info",{id:id},function (data) {
      if(data.code==1) {
        var list = data.data.info;
        _this.setState({
          staionupdate:true,
          updateData: list,
          firstEnter:true
        });
      }else{
        alert(data.msg) ;
      }
    }.bind(this))
  }
  myRowClick(e,record){
    if(e.target.tagName=="A"){
      return false ;
    }
    createHistory().push({
      pathname: '/staiondetail/?staiondetailid='+record.id,
    })
  }


  changeSearchParams = (filed,value) => {
    const {searchparams} = this.state ;
    searchparams[filed] = value ;
    this.setState({
      searchparams: searchparams
    });
  };

  search=()=>{
    var {searchparams} = this.state ;
    this.fetch(searchparams) ;
  };

  myselfonkeydown(e){
    if(e.keyCode == 13){
      this.search();
    }
  }

  render() {
    const {staionadd,staionupdate,data,updateData,firstEnter}=this.state;
    const columns = [{
      title: '场站名称',
      dataIndex: 'addr_name',
      key: 'addr_name',
    },{
      title: '联系人',
      dataIndex: 'user_name',
      key: 'user_name',
    },{
      title: '联系方式',
      dataIndex: 'user_mobile',
      key: 'user_mobile',
    },{
      title: '地址',
      dataIndex: 'addr_province',
      key: 'addr_province',
      render: (text, record) => (
        <span>
          {text }&nbsp;{record.addr_city}&nbsp;{record.addr_county}&nbsp;{record.addr_detail}
        </span>
      )
    },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javaScript:void(0)" style={{marginRight:'10px'}}  onClick={()=>this.updateStaion.bind(this)(record.id)}><Icon type="edit" style={{marginRight:'5px'}}/>编辑</a>
            <a href="javaScript:void(0)" onClick={(e)=>this.deleteStaion.bind(this)(e,record.id)}><Icon type="delete" style={{marginRight:'5px'}}/>删除</a>
        </span>
        ),
      }];

    return (
      <div className={'my-table-title-center my-custom-padding'} onKeyDown={(e)=>this.myselfonkeydown.bind(this)(e)}>
        <Row>
          <Col span={10}>
            <div style={{padding:'10px 0'}}>
              <Input
                placeholder="搜索名称、地址"
                size="large"
                onChange={(e)=>this.changeSearchParams.bind(this)('find_str',e.target.value)}
              />
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={10}>
            <div style={{padding:'10px 0'}}>
              <Select
                style={{ width: '100%' }}
                size="large"
                onChange={(value)=> this.changeSearchParams("f_type",value)}
              >
                <Option value="0" key="0">液厂</Option>
                <Option value="1" key="1">接收站</Option>
                <Option value="2" key="2">加气站</Option>
                <Option value="3" key="3">气化站</Option>
              </Select>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={2}>
            <div style={{padding:'10px 0'}}>
              <Button icon="search" size='large' onClick={this.search.bind(this)}>查询</Button>
            </div>
          </Col>
        </Row>
        <Card hoverable  title="" type="card" className={'no-content-card'}>
          <Row gutter={8} style={{ marginTop: '10px' }}>
            <Col span={24} >
              <div style={{marginBottom:'10px',textAlign:'right',padding:'0 30px'}}>
                    {/*<span style={{marginRight:'15px'}}>*/}
                      {/*<Icon type="environment-o" style={{marginRight:'8px'}} />*/}
                      {/*地图查找*/}
                    {/*</span>*/}
                <span onClick={this.addFieldStationList.bind(this)}>
                       <Icon type="plus-circle-o" style={{marginRight:'8px'}} />
                        新增
                    </span>
              </div>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onRow={(record) => {
              return {
                onClick: (e) => this.myRowClick(e,record),       // 点击行
              };
            }}
            onChange={this.handleTableChange.bind(this)} />
          <Modal title="场站新增"
                 visible={staionadd}
                 onOk={this.handleOk}
                 onCancel={this.handleAddCancel}
                 footer={null}>
            <AddFieldStationList ref={'AddFieldStationList'} handleAddCancel={this.handleAddCancel} go={()=>this.fetch(this.state.pagination)}></AddFieldStationList>
          </Modal>
          <Modal title="场站编辑"
                 visible={staionupdate}
                 onOk={this.handleOk}
                 onCancel={this.handleUpateCancel}
                 footer={null}>

            <UpdateFieldStationList firstEnter={firstEnter} reactp = {this} ref={'UpdateFieldStationList'} handleUpateCancel={this.handleUpateCancel} updateData={updateData}  go={()=>this.fetch(this.state.pagination)}></UpdateFieldStationList>
          </Modal>
        </Card>
      </div >
    )
  }
}
export default FieldStationListTable;
