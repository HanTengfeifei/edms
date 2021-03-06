import React from 'react';
import { Card, Row, Col, Tabs,Table } from 'antd';
import { Divider } from 'antd';
import mystyle from './tabstyle.less' ;
import {RequireUtils} from 'utils';
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

class PurchaseAccounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {pageSize:10},
      loading: false
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
    getTableData.bind(this)('/relation/all-supp-bill',params)
  }
  componentDidMount() {
    this.fetch();
  }

  render() {
    const {data}=this.state;
    const columns = [{
      title: '收款流水号',
      dataIndex: 'record_code',
      key: 'record_code'
    }, {
      title: '订单号',
      dataIndex: 'order_code',
      key: 'order_code',
    },{
      title: '供应商名称',
      dataIndex: 'supp_name',
      key: 'supp_name',
    }
      ,{
        title: '收款金额',
        dataIndex: 'money_num',
        key: 'money_num',
        render: (text, record) => (
          <span>
          {text?text:0}  元
        </span>
        )
      }
      ,{
        title: '账户余额',
        dataIndex: 'balance_num',
        key: 'balance_num',
        render: (text, record) => (
          <span>
          {text?text:0}  元
        </span>
        )
      },{
        title: '登记凭证',
        dataIndex: 'no_data',
        key: 'no_data',
        render: (text, record) => (
          <span>
          -
        </span>
        )
      },{
        title: '操作人',
        dataIndex: 'oper_name',
        key: 'oper_name'
      },{
        title: '操作时间',
        dataIndex: 'record_date',
        key: 'record_date'
      }
    ];
    return (
      <div className={'my-table-title-center'}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange.bind(this)}
        />
      </div >
    )
  }
}


export default  PurchaseAccounting;
