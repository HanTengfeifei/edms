import React from 'react';
import { Card, Row, Col, Tabs, Icon, Button, Radio, Select,Table,Divider } from 'antd';
import WayBillDetailTd from './WayBillDetailTd' ;
import WayBillDetailChildrenTd from './WayBillDetailChildrenTd' ;

import tablestyle from './tablestyle.less';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class WayBillDetailTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.callback = this.callback.bind(this);
  }

  componentDidMount(){
    var _this = this ;
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


  render() {
    const {datas,cars,go,_pthis}=this.props;
    const columns = [{
      title: '',
      dataIndex: 'order',
      key: 'order',
      render: (text, record) => (
        <WayBillDetailTd item = {record} go={go} _pthis = {_pthis}></WayBillDetailTd>
      )
    }];

    return (
      <div>
        <Table
          className={'no-padding'}
          showHeader={false}
          columns={columns}
          dataSource={datas}
          pagination={{ position: 'none' }}
          bordered={false}
        />
        <div>
          {cars.map(function (item,index) {
            return <WayBillDetailChildrenTd item={item}  go={go} _pthis = {_pthis} key={index} style={{ margin: 0 }}></WayBillDetailChildrenTd>
          })}
        </div>
      </div>
    )
  }
}
export default WayBillDetailTable;
