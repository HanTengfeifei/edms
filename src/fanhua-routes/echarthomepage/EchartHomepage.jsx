import React from 'react';
import { Card, Row, Col, Tabs, Icon, Button, Radio, Select,Table,Switch } from 'antd';
import { Link } from 'dva/router';
import './EchartHomepage.less';
import echarts from 'echarts/lib/echarts' ;
import 'echarts/lib/chart/bar' ;
import 'echarts/lib/chart/line' ;
import 'echarts/lib/component/tooltip' ;
import 'echarts/lib/component/title' ;
import {RequireUtils,config} from 'utils';
import order from '../../assets/img/order.png' ;
import customer from '../../assets/img/customer.png' ;
import mycustomer from '../../assets/img/mycustomer.png' ;
import sale from '../../assets/img/sale.png' ;
import daichuliaccount from '../../assets/img/daichuliaccount.png' ;
import daichulicarlist from '../../assets/img/daichulicarlist.png' ;
import daichulideliver from '../../assets/img/daichulideliver.png' ;
import daichuliorder from '../../assets/img/daichuliorder.png' ;
/*import recharts from 'recharts' ;*/
const TabPane = Tabs.TabPane;
const Option = Select.Option;
class EchartHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prePrice:0,
      daichulidingdan:0,
      daishenhezhanghao:0,
      daochuliyundan:0,
      dingdanzongliang:0,
      fuwuchangzhan:0,
      kehushuliang:0,
      xiaoshouzongliang:0,
      zhixingchuchedan:0
    };
    this.callback = this.callback.bind(this);
  }
  callback(key) {
    console.log(key);
  }
  componentDidMount() {
    var _this = this ;
    var priceip = RequireUtils.priceip ;
    RequireUtils.basePriceRequire('price/get-price',{},function (data) {
      if(data.code==1) {
        var price = data.data.price?data.data.price:0 ;
        _this.setState({
          prePrice:price
        })
      }
      else{
        _this.setState({
          prePrice:0
        })
      }
    }.bind(this));

    RequireUtils.baseRequire('/site/statistics',{},function (data) {
      if(data.code==1) {
          console.log(data);
        var data = data.data?data.data:{} ;
        _this.setState({
          date:data.charts.date,
          caigou:data.charts.caigou,
          xiaoliang:data.charts.xiaoliang,
          daichulidingdan:data.daichulidingdan,
          daishenhezhanghao:data.daishenhezhanghao,
          daochuliyundan:data.daochuliyundan,
          dingdanzongliang:data.dingdanzongliang,
          fuwuchangzhan:data.fuwuchangzhan,
          kehushuliang:data.kehushuliang,
          xiaoshouzongliang:data.xiaoshouzongliang,
          zhixingchuchedan:data.zhixingchuchedan,
        })
          var myChart = echarts.init(document.getElementById('mytest'));
          var colors = ['#5793f3', '#d14a11', '#675bba'];
          var option = {
              color: colors,
              title: {
                  text: '销售与采购统计'
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          // backgroundColor: 'rgb(215,216,218)'
                      }
                  }
              },

              // legend: {
              //     data:['销售量','采购量']
              // },
              // grid: {
              //     left: '3%',
              //     right: '4%',
              //     bottom: '3%',
              //     containLabel: true
              // },
              calculable : true,
              xAxis : [
                  {
                      type : 'category',
                      name : '日期',
                      boundaryGap : false,
                      // axisTick: {
                      //     alignWithLabel: true
                      // },
                      // axisLine: {
                      //     onZero: false,
                      //     lineStyle: {
                      //         color: 'rgb(92,96,105)'
                      //     }
                      // },
                      data : data.charts.date
                  }
              ],
              yAxis : [
                  {
                      type : 'value',
                      name : '量(吨)',
                  }
              ],
              series : [
                  {
                      name:'销售',
                      type:'line',
                      smooth:true,
                      stack: '总量',
                      lineStyle: {
                          color: colors[1]
                      },
                      // areaStyle: {normal: {}},//面积
                      data:data.charts.xiaoliang
                  },
                  {
                      name:'采购',
                      type:'line',
                      smooth:true,
                      stack: '总量',

                      lineStyle: {
                          color: colors[0]
                      },
                      // areaStyle: {normal: {}},//面积
                      data:data.charts.caigou
                  }
              ]
          };
          myChart.setOption(option)
      }
      else{
        _this.setState({
          daichulidingdan:0,
          daishenhezhanghao:0,
          daochuliyundan:0,
          dingdanzongliang:0,
          fuwuchangzhan:0,
          kehushuliang:0,
          xiaoshouzongliang:0,
          zhixingchuchedan:0
        })
      }
    }.bind(this));

/*   var myChart = echarts.init(document.getElementById('mytest')) ;*/

  }
  render() {
    const {
      prePrice,
      daichulidingdan,
      daishenhezhanghao,
      daochuliyundan,
      dingdanzongliang,
      fuwuchangzhan,
      kehushuliang,
      xiaoshouzongliang,
      zhixingchuchedan
    } = this.state ;
    return (
      <div  className="htf_homepage">
        <Row>
        </Row>
        <Row gutter={8} style={{ marginTop: '10px' }}>
          <Col span={24}>
            <Card hoverable  title="首页" type="card" className={'no-content-card'}>
            </Card>
            <Row>
            <Col span={8}>
              <Card style={{textAlign:'center',padding:'15px',height:'140px'}}>
                <div style={{padding:'3px'}}>
                  <p style={{fontSize:'15px'}}>山东省到岸价预测</p>
                  <div style={{marginBottom:'5px'}}></div>
                  <p style={{fontSize:'26.5px',fontWeight:'800',marginTop:'10px'}}>{prePrice}元/吨</p>
                </div>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{textAlign:'center',height:'140px'}}>
                <div >
                    <span style={{display:'inline-block',width:'58',height:'60px'}}>
                      <img src={config.htfdingdan} style={{width:'100%',height:'100%'}}/>
                      {/*<Icon type="api"  style={{fontSize:'35px'}}/>*/}
                    </span>
                </div>
                <p style={{fontSize:'18px',fontWeight:'800'}}>{dingdanzongliang}</p>
                <p>累计成交订单</p>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{textAlign:'center',height:'140px'}}>
                <div >
                    <span style={{display:'inline-block',width:'58',height:'60px'}}>
                      <img src={config.htfxiaoshouliang} style={{width:'100%',height:'100%'}}/>
                      {/*<Icon type="api"  style={{fontSize:'35px'}}/>*/}
                    </span>
                </div>
                <p style={{fontSize:'18px',fontWeight:'800'}}>{xiaoshouzongliang}</p>
                <p>累积销售量(吨)</p>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{textAlign:'center',height:'140px'}}>
                <div >
                    <span style={{display:'inline-block',width:'58',height:'60px'}}>
                      <img src={config.htfkehu} style={{width:'100%',height:'100%'}}/>
                      {/*<Icon type="api"  style={{fontSize:'35px'}}/>*/}
                    </span>
                </div>
                <p style={{fontSize:'18px',fontWeight:'800'}}>{kehushuliang}</p>
                <p>客户数量</p>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{textAlign:'center',height:'140px'}}>
                <div >
                     <span style={{display:'inline-block',width:'58',height:'60px'}}>
                      <img src={config.htffuwuzhan} style={{width:'100%',height:'100%'}}/>
                       {/*<Icon type="api"  style={{fontSize:'35px'}}/>*/}
                    </span>
                </div>
                <p style={{fontSize:'18px',fontWeight:'800'}}>{fuwuchangzhan}</p>
                <p>累积服务场站</p>
              </Card>
            </Col>
          </Row>
          <Row>
              <Col span={16}>
                <Card style={{textAlign:'center',padding:'10px',height:'520px'}}>
                  <div id='mytest' style={{height:'400px'}}></div>
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{padding:'10px'}}>
                    <Row>
                      <Col span={12}>
                        <div style={{textAlign:"center",marginRight:"12%"}}>
                            <span style={{display:'inline-block',height:'60px',width:'58px',textAlign:'center'}}>
                                {/*<Icon type="clock-circle-o" style={{fontSize:'40px'}}/>*/}
                                <img src={config.htfdaichuli} style={{width:'100%',height:'100%'}}/>
                               {/* <img/>*/}
                            </span>
                        </div>
                      </Col>
                      <Col span={12}>
                        <Link to="/orderlist">
                          <div style={{textAlign:'center'}}>
                              <p style={{color:'red',fontSize:'18px',fontWeight:'bold'}}>{daichulidingdan}</p>
                              <div style={{marginTop:'6px'}}>待处理订单</div>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                </Card>
                <Card style={{padding:'10px'}}>
                  <Row>
                    <Col span={12}>
                      <div style={{textAlign:"center",marginRight:"12%"}}>
                            <span style={{display:'inline-block',height:'60px',width:'58px',textAlign:'center'}}>
                                {/*<Icon type="clock-circle-o" style={{fontSize:'40px'}}/>*/}
                               <img src={config.htfdaichulichuche} style={{width:'100%',height:'100%'}}/>
                            </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <Link to="/exitlist">
                          <div style={{textAlign:'center'}}>
                          <p style={{color:'red',fontSize:'18px',fontWeight:'bold'}}>{zhixingchuchedan}</p>
                          <div style={{marginTop:'6px'}}>执行中的出车单</div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card>
                <Card style={{padding:'10px'}}>
                  <Row>
                    <Col span={12}>
                      <div style={{textAlign:"center",marginRight:"12%"}}>
                            <span style={{display:'inline-block',height:'60px',width:'58px',textAlign:'center'}}>
                                {/*<Icon type="clock-circle-o" style={{fontSize:'40px'}}/>*/}
                              <img src={config.htfdaishenhe} style={{width:'100%',height:'100%'}}/>
                              {/*  <img/>*/}
                            </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <Link to="/EmployeeManagement">
                      <div style={{textAlign:'center'}}>
                        <p style={{color:'red',fontSize:'18px',fontWeight:'bold'}}>{daishenhezhanghao}</p>
                        <div style={{marginTop:'6px'}}>待审核账号</div>
                      </div>
                      </Link>
                    </Col>
                  </Row>
                </Card>
                <Card style={{padding:'10px'}}>
                  <Row>
                    <Col span={12}>
                      <div style={{textAlign:"center",marginRight:"12%"}}>
                            <span style={{display:'inline-block',height:'60px',width:'58px',textAlign:'center'}}>
                                {/*<Icon type="clock-circle-o" style={{fontSize:'40px'}}/>*/}
                              <img src={config.htfdaichuliyundan} style={{width:'100%',height:'100%'}}/>
                               {/* <img/>*/}
                            </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <Link to="/waybilllist">
                        <div style={{textAlign:'center'}}>
                          <p style={{color:'red',fontSize:'18px',fontWeight:'bold'}}>{daochuliyundan}</p>
                          <div style={{marginTop:'6px'}}>待处理运单</div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Card>
              </Col>
          </Row>
          </Col>
        </Row>
      </div >
    )
  }
}
export default EchartHomepage;
