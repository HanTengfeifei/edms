webpackJsonp([48],{1391:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(168),o=n(u),c=a(270),d=n(c),s=a(41),f=n(s),m=a(52),p=n(m),y=a(64),h=n(y),g=a(45),b=n(g),v=a(265),E=n(v),_=a(21),x=n(_),w=a(29),k=n(w),O=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(262),a(478),a(62),a(56),a(63),a(51),a(471),a(27),a(31);var j=a(0),P=n(j),T=a(20),S=a(1915),N=n(S),C=(k.default.TabPane,x.default.Option,E.default.MonthPicker,E.default.RangePicker),R=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.changeSearchParams=function(e,t){var n=a.state.searchparams;n[e]=t,a.setState({searchparams:n})},a.changerangeicker=function(e,t){var n=a.state.searchparams;n.s_date=t[0],n.e_date=t[1],a.setState({searchparams:n})},a.search=function(){var e=a.state.searchparams;a.refs.MyTable.fetch(e)},a.state={yd_status:"",dstatusdnum:{},searchparams:{find_str:"",s_date:"",e_date:""}},a.callback=a.callback.bind(a),a}return i(t,e),O(t,[{key:"callback",value:function(e){console.log(e)}},{key:"showTableByType",value:function(e){this.setState({yd_status:e})}},{key:"componentDidMount",value:function(){T.RequireUtils.baseRequire("order/order-deliver-num",{},function(e){1==e.code?this.setState({dstatusdnum:e.data.list}):this.setState({dstatusdnum:{}})}.bind(this))}},{key:"myselfonkeydown",value:function(e){13==e.keyCode&&this.search()}},{key:"render",value:function(){var e=this,t=this.state,a=t.yd_status,n=t.dstatusdnum;return P.default.createElement("div",{onKeyDown:function(t){return e.myselfonkeydown.bind(e)(t)}},P.default.createElement(b.default,null,P.default.createElement("div",{style:{padding:"15px",background:"#fff"}},P.default.createElement("span",{style:{fontSize:"16px"}},"\u8fd0\u5355\u7ba1\u7406"))),P.default.createElement(b.default,null,P.default.createElement(p.default,{span:8},P.default.createElement("div",{style:{padding:"10px 0"}},P.default.createElement(h.default,{placeholder:"\u641c\u7d22\u4f01\u4e1a\u540d\u79f0\u3001\u573a\u7ad9\u540d\u79f0",size:"large",onChange:function(t){return e.changeSearchParams("find_str",t.target.value)}}))),P.default.createElement(p.default,{span:2}),P.default.createElement(p.default,{span:12},P.default.createElement("div",{style:{padding:"10px 0"}},P.default.createElement(C,{format:"YYYY-MM-DD",enterButton:!0,size:"large",onChange:this.changerangeicker}))),P.default.createElement(p.default,{span:2},P.default.createElement("div",{style:{padding:"10px 0"}},P.default.createElement(f.default,{icon:"search",size:"large",onClick:this.search},"\u67e5\u8be2")))),P.default.createElement(b.default,{gutter:8,style:{marginTop:"10px",marginBottom:"10px"},type:"flex",justify:"space-between",className:"my-wl-yd-customer-car"},P.default.createElement(p.default,{span:6},P.default.createElement(o.default,{bordered:!1,onClick:function(){return e.showTableByType("")}},P.default.createElement("div",{className:"custom-image"},P.default.createElement(d.default,{count:0},""===this.state.yd_status?P.default.createElement("img",{src:T.config.qB2,style:{height:"40px",marginBottom:"10px"},alt:""}):P.default.createElement("img",{src:T.config.qB1,style:{height:"40px",marginBottom:"10px"},alt:""})),P.default.createElement("p",{style:{textAlign:"center",margin:"0"}},"\u5168\u90e8")))),P.default.createElement(p.default,{span:6},P.default.createElement(o.default,{bordered:!1,onClick:function(){return e.showTableByType("0")}},P.default.createElement("div",{className:"custom-image"},P.default.createElement(d.default,{count:n.daidiaodu?n.daidiaodu:0},"0"===this.state.yd_status?P.default.createElement("img",{src:T.config.ddd2,style:{height:"40px",marginBottom:"10px"},alt:""}):P.default.createElement("img",{src:T.config.ddd1,style:{height:"40px",marginBottom:"10px"},alt:""})),P.default.createElement("p",{style:{textAlign:"center",margin:"0"}},"\u5f85\u8c03\u5ea6")))),P.default.createElement(p.default,{span:6},P.default.createElement(o.default,{bordered:!1,onClick:function(){return e.showTableByType("1")}},P.default.createElement("div",{className:"custom-image"},P.default.createElement(d.default,{count:n.yidiaodu?n.yidiaodu:0},"1"===this.state.yd_status?P.default.createElement("img",{src:T.config.ysz2,style:{height:"40px",marginBottom:"10px"},alt:""}):P.default.createElement("img",{src:T.config.ysz1,style:{height:"40px",marginBottom:"10px"},alt:""})),P.default.createElement("p",{style:{textAlign:"center",margin:"0"}},"\u8fd0\u8f93\u4e2d")))),P.default.createElement(p.default,{span:6},P.default.createElement(o.default,{bordered:!1,onClick:function(){return e.showTableByType("2")}},P.default.createElement("div",{className:"custom-image"},P.default.createElement(d.default,{count:n.wancheng?n.wancheng:0},"2"===this.state.yd_status?P.default.createElement("img",{src:T.config.wj2,style:{height:"40px",marginBottom:"10px"},alt:""}):P.default.createElement("img",{src:T.config.wj1,style:{height:"40px",marginBottom:"10px"},alt:""})),P.default.createElement("p",{style:{textAlign:"center",margin:"0"}},"\u5b8c\u7ed3"))))),P.default.createElement(b.default,{gutter:8,style:{marginTop:"10px"}},P.default.createElement(p.default,{span:24},P.default.createElement(o.default,{hoverable:!0,title:"",type:"card"},P.default.createElement(N.default,{yd_status:a,ref:"MyTable"})))))}}]),t}(P.default.Component);t.default=R,e.exports=t.default},1577:function(e,t,a){var n=a(1662);"string"===typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0};l.transform=void 0;a(11)(n,l);n.locals&&(e.exports=n.locals)},1662:function(e,t,a){t=e.exports=a(10)(void 0),t.push([e.i,".table-first-line {\n  background: #f5f3f3;\n  padding: 10px 15px;\n  overflow: hidden;\n}\n.table-other-line {\n  padding: 20px 15px;\n}\n.no-padding .ant-table-tbody > tr > td {\n  padding: 0;\n}\n.my-custom-center {\n  text-align: center;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.my-custom-padding .ant-form-item {\n  margin-bottom: 0 ;\n}\n.my-custom-padding .ant-col-24.ant-form-item-label {\n  padding: 0;\n}\n.yundan-specital-table .no-padding .ant-table-tbody > tr > td {\n  padding: 0;\n}\n.yundan-specital-table .my-center {\n  text-align: center;\n}\n",""])},1913:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(45),o=n(u),c=a(52),d=n(c),s=a(21),f=n(s),m=a(29),p=n(m),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(51),a(56),a(27),a(31);var h=a(0),g=n(h),b=a(1577),v=(n(b),p.default.TabPane,f.default.Option,function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a.callback=a.callback.bind(a),a}return i(t,e),y(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})}},{key:"callback",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.props,t=e.item;e.order,e.go;return g.default.createElement("div",null,g.default.createElement("div",null,g.default.createElement(o.default,{className:"table-first-line"},g.default.createElement("div",null,g.default.createElement(d.default,{span:18},g.default.createElement("div",{style:{textAlign:"left",whiteSpace:"nowrap"}},g.default.createElement("span",{style:{marginRight:"5px"}},"\u8fd0\u5355\u7f16\u53f7"),g.default.createElement("span",{style:{marginRight:"20px"}},t.deliver_code),g.default.createElement("span",{style:{marginRight:"5px"}},"\u6240\u5c5e\u8ba2\u5355"),g.default.createElement("span",{style:{marginRight:"20px"}},t.order_code))),g.default.createElement(d.default,{span:6},g.default.createElement("div",{style:{textAlign:"right"}},g.default.createElement("span",{style:{marginRight:"5px"}},"\u914d\u9001\u65f6\u95f4"),g.default.createElement("span",{style:{marginRight:"10px"}},t.dispatch_date))))),g.default.createElement(o.default,{className:"table-other-line",type:"flex",align:"middle"},g.default.createElement(d.default,{span:3},g.default.createElement("div",{className:"my-custom-center"},t.prod_name)),g.default.createElement(d.default,{span:3},g.default.createElement("div",{className:"my-custom-center"},t.recv_num,"\u5428")),g.default.createElement(d.default,{span:4},g.default.createElement("div",{className:"my-custom-center"},"\u5df2\u8fd0\u8f93\xa0",t.load_num,"\u5428"),g.default.createElement("div",{className:"my-custom-center"},"\u5f85\u5206\u914d\xa0",t.recv_num-t.load_num,"\u5428")),g.default.createElement(d.default,{span:7},g.default.createElement("div",{className:"my-custom-center"},t.addr_name)),g.default.createElement(d.default,{span:4},g.default.createElement("div",{className:"my-custom-center"},t.car_num,"\u5f20")),g.default.createElement(d.default,{span:3},g.default.createElement("div",{className:"my-custom-center"},t.status_name)))))}}]),t}(g.default.Component));t.default=v,e.exports=t.default},1915:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,a){var n=this.state.pagination;n.current=e.current,n.limit=e.pageSize,this.setState({pagination:n}),this.fetch(x({pageSize:e.pageSize,limit:e.pageSize,page:e.current,currentPage:e.current,sortField:a.field,sortOrder:a.order,kind:1},t))}function o(e,t){P.RequireUtils.baseRequire(e,t,function(e){if(1==e.code){var t=e.data.list,a=t.map(function(e,t){return e.key=t,e}),n=this.state.pagination;n.limit=n.pageSize,n.total=e.data.count,this.setState({loading:!1,data:a,pagination:n})}else this.setState({data:[]})}.bind(this))}Object.defineProperty(t,"__esModule",{value:!0});var c=a(263),d=n(c),s=a(102),f=n(s),m=a(45),p=n(m),y=a(52),h=n(y),g=a(21),b=n(g),v=a(29),E=n(v),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};a(470),a(130),a(51),a(56),a(27),a(31);var w=a(0),k=n(w),O=a(1913),j=n(O),P=a(20),T=a(57),S=n(T),N=a(1577),C=(n(N),E.default.TabPane,b.default.Option,function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={pagination:{pageSize:10},data:[]},a.callback=a.callback.bind(a),a}return i(t,e),_(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})}},{key:"callback",value:function(e){console.log(e)}},{key:"handleTableChange",value:function(e,t,a){u.bind(this)(e,t,a)}},{key:"fetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.bind(this)("order-deliver/deliver-list",e)}},{key:"componentWillReceiveProps",value:function(e){var t=this.state.yd_status;t=0==t?0:this.state.yd_status?this.state.yd_status:"";var a=e.yd_status;if(a=0==a?0:e.yd_status?e.yd_status:"",t===a)return!1;o.bind(this)("order-deliver/deliver-list",{status:e.yd_status})}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"myRowClick",value:function(e,t){(0,S.default)().push({pathname:"/waybilldetaillist/?waybillid="+t.id})}},{key:"render",value:function(){var e=this,t=this.state.data,a=[{title:"",dataIndex:"order",key:"order",render:function(e,t){return k.default.createElement(j.default,{item:t})}}];return k.default.createElement("div",null,k.default.createElement(p.default,{style:{marginBottom:"3px"},className:"yundan-specital-table"},k.default.createElement("div",null,k.default.createElement(h.default,{span:3},k.default.createElement("div",{className:"my-center"},"\u5546\u54c1\u540d\u79f0")),k.default.createElement(h.default,{span:3},k.default.createElement("div",{className:"my-center"},"\u8fd0\u8f7d\u91cf")),k.default.createElement(h.default,{span:4},k.default.createElement("div",{className:"my-center"},"\u8fd0\u8f93\u60c5\u51b5")),k.default.createElement(h.default,{span:7},k.default.createElement("div",{className:"my-center"},"\u5378\u8f66\u573a\u7ad9")),k.default.createElement(h.default,{span:4},k.default.createElement("div",{className:"my-center"},"\u51fa\u8f66\u5355\u6570\u91cf")),k.default.createElement(h.default,{span:3},k.default.createElement("div",{className:"my-center"},"\u8fd0\u5355\u72b6\u6001")))),k.default.createElement(f.default,null),k.default.createElement(d.default,{className:"no-padding",showHeader:!1,columns:a,dataSource:t,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange.bind(this),onRow:function(t){return{onClick:function(a){return e.myRowClick(a,t)}}},bordered:!1}))}}]),t}(k.default.Component));t.default=C,e.exports=t.default}});
//# sourceMappingURL=48.160b92fd.chunk.js.map