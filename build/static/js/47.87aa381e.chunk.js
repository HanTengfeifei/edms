webpackJsonp([47],{1392:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(263),u=r(i),s=n(45),c=r(s),d=n(52),f=r(d),p=n(169),m=r(p),h=n(65),v=r(h),b=n(12),y=r(b),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(470),n(51),n(56),n(264),n(72),n(35);var E=n(0),O=r(E),w=n(20),S=n(1924),R=r(S),k=n(1925),C=r(k),x=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onRef=function(e){n.child=e},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(){n.setState({ModalText:"The modal will be closed after two seconds",confirmLoading:!0}),setTimeout(function(){n.setState({visible:!1,confirmLoading:!1}),n.child.handleSubmit()},2e3)},n.handleCancel=function(){console.log("Clicked cancel button"),n.setState({visible:!1}),n.child.reset()},n.handleOk2=function(e){n.childS.handleSubmit(e),console.log(e),n.setState({visible2:!1})},n.handleCancel2=function(e){console.log(e),n.setState({visible2:!1}),n.childS.reset()},n.fetch=function(e){console.log("params:",e),n.setState({loading:!0}),w.RequireUtils.baseRequire("role/role-list",e,function(e){if(1==e.code){var t=g({},this.state.pagination);console.log(e),t.total=e.count,this.setState({loading:!1,data:e.data.list,pagination:t}),console.log("\u6211\u662f\u4eba\u624d")}else alert("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25\uff01")}.bind(n))},n.handleTableChange=function(e){var t=g({},n.state.pagination);t.current=e.current,n.setState({pagination:t}),n.fetch({limit:e.pageSize,page:e.current})},n.state={record:{},data:[],pagination:{},loading:!1,visible:!1,visible2:!1,ModalText:"\u8f66\u6302\u6dfb\u52a0",confirmLoading:!1},n.findRoleAll=n.findRoleAll.bind(n),n.onRefS=n.onRefS.bind(n),n}return l(t,e),_(t,[{key:"onRefS",value:function(e){this.childS=e}},{key:"componentDidMount",value:function(){var e={};e.page=1,e.limit=10,this.fetch(e)}},{key:"findRoleAll",value:function(){var e={};e.page=1,e.limit=10,this.fetch(e),console.log("w\u6211\u662f\u5e05\u54e5")}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,r=t.visible,a=t.ModalText,o=t.confirmLoading,l=t.pagination,i=t.loading,s=[{title:"\u89d2\u8272\u7f16\u53f7",dataIndex:"role_code",key:"role_code"},{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"role_name",key:"role_name"},{title:"\u6821\u8272\u63cf\u8ff0",dataIndex:"role_desc",key:"role_desc"},{title:"\u64cd\u4f5c",key:"action",render:function(t,n){return O.default.createElement("span",null,O.default.createElement("a",{href:"",style:{marginRight:"10px"}},O.default.createElement(y.default,{type:"edit"}),O.default.createElement("span",{onClick:function(t){t.preventDefault(),t.stopPropagation(),e.setState({visible2:!0,record:n})}},"\u7f16\u8f91")),O.default.createElement("a",{href:"",onClick:function(t){t.preventDefault(),t.stopPropagation(),w.RequireUtils.baseRequire("role/forbid",{id:n.id},function(e){1==e.code?(v.default.success("\u72b6\u6001\u4fee\u6539\u6210\u529f"),this.findRoleAll()):v.default.error("\u72b6\u6001\u4fee\u6539\u5931\u8d25")}.bind(e))}},O.default.createElement("span",null,parseInt(n.role_status)?O.default.createElement("span",null,"\u7981\u7528"):O.default.createElement("span",null,"\u542f\u7528"))),O.default.createElement("a",{href:"",style:{marginLeft:10}},O.default.createElement(y.default,{type:"delete"}),O.default.createElement("span",{onClick:function(t){t.preventDefault(),t.stopPropagation();var r=e;m.default.confirm({title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8be5\u89d2\u8272\u4fe1\u606f\u5417\uff1f",content:"\u5220\u9664\u540e\uff0c\u8be5\u89d2\u8272\u4fe1\u606f\u5c06\u65e0\u6cd5\u6062\u590d",onOk:function(){w.RequireUtils.baseRequire("driver/del-driver",{id:n.id},function(e){1==e.code?(alert(e.msg),this.findRoleAll()):alert(e.msg)}.bind(r))},onCancel:function(){console.log("Cancel")}})}},"\u5220\u9664")))}}];return O.default.createElement("div",null,O.default.createElement(m.default,{title:"\u7f16\u8f91\u89d2\u8272\u4fe1\u606f",visible:this.state.visible2,onOk:this.handleOk2,onCancel:this.handleCancel2},O.default.createElement(C.default,{record:this.state.record,onRefS:this.onRefS,go:this.findRoleAll})),O.default.createElement(c.default,{gutter:8,style:{marginTop:"10px"}},O.default.createElement(f.default,{span:24},O.default.createElement("div",{style:{marginBottom:"10px",textAlign:"right"}},O.default.createElement("span",{style:{marginRight:"15px"}}),O.default.createElement("span",{onClick:this.showModal},O.default.createElement(y.default,{type:"plus-circle-o",style:{marginRight:"8px"}}),"\u65b0\u589e")),O.default.createElement(m.default,{title:a,visible:r,onOk:this.handleOk,confirmLoading:o,onCancel:this.handleCancel},O.default.createElement(R.default,{onRef:this.onRef,go:this.findRoleAll})))),O.default.createElement(u.default,{columns:s,dataSource:n,loading:i,pagination:l,onChange:this.handleTableChange}))}}]),t}(O.default.Component);t.default=x,e.exports=t.default},1924:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(64),u=r(i),s=n(267),c=r(s),d=n(21),f=r(d),p=n(100),m=r(p),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(63),n(473),n(27),n(129);var b=n(0),y=r(b),g=n(20);n(2350);var _=m.default.Item,E=(f.default.Option,c.default.Opangtion),O=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleConfirmBlur=function(e){var t=e.target.value;n.setState({confirmDirty:n.state.confirmDirty||!!t})},n.state={confirmDirty:!1,autoCompleteResult:[],driver:[]},n.handleConfirmBlur=n.handleSubmit.bind(n),n.reset=n.reset.bind(n),n}return l(t,e),v(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFieldsAndScroll(function(t,n){if(!t){console.log("Received values of form: ",n);var r=n;r.company_id=localStorage.getItem("company_id"),g.RequireUtils.baseRequire("/driver/add-driver",r,function(e){1==e.code?(alert(e.msg),this.props.go()):alert(e.msg),this.props.form.resetFields()}.bind(e))}})}},{key:"reset",value:function(){this.props.form.resetFields()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,n=t.autoCompleteResult,r=(t.options,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}});n.map(function(e){return y.default.createElement(E,{key:e},e)});return y.default.createElement(m.default,{onSubmit:this.handleSubmit},y.default.createElement(_,h({},r,{label:"\u89d2\u8272\u540d\u79f0"}),e("driver_name",{rules:[{required:!0,message:"Please input your E-mail!"}]})(y.default.createElement(u.default,null))),y.default.createElement(_,h({},r,{label:"\u6821\u8272\u63cf\u8ff0"}),e("driver_card",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(y.default.createElement(u.default,{type:"text"}))),y.default.createElement(_,h({},r,{label:"\u53f8\u673a\u624b\u673a\u53f7\u7801"}),e("driver_mobile",{rules:[{required:!1,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(y.default.createElement(u.default,{type:"text"}))))}}]),t}(y.default.Component),w=m.default.create()(O);t.default=w,e.exports=t.default},1925:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(64),u=r(i),s=n(267),c=r(s),d=n(21),f=r(d),p=n(100),m=r(p),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(63),n(473),n(27),n(129);var b=n(0),y=r(b),g=n(20),_=m.default.Item,E=(f.default.Option,c.default.Option),O=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleConfirmBlur=function(e){var t=e.target.value;n.setState({confirmDirty:n.state.confirmDirty||!!t})},n.validateToNextPassword=function(e,t,r){var a=n.props.form;t&&n.state.confirmDirty&&a.validateFields(["confirm"],{force:!0}),r()},n.state={confirmDirty:!1,autoCompleteResult:[],driver:[]},n.handleConfirmBlur=n.handleSubmit.bind(n),n.reset=n.reset.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return l(t,e),v(t,[{key:"componentDidMount",value:function(){this.props.onRefS(this)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(e),this.props.form.validateFieldsAndScroll(function(e,n){if(!e){console.log("Received values of form: ",n);var r=n;r.id=t.props.record.id,console.log(r),g.RequireUtils.baseRequire("/driver/modify-driver",r,function(e){1==e.code?(console.log("etet"),alert(e.msg),this.props.go()):alert(e.msg),this.props.form.resetFields()}.bind(t))}})}},{key:"reset",value:function(){console.log("333333333"),console.log(this.props.record),this.props.form.resetFields()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,n=t.autoCompleteResult,r=(t.options,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}});n.map(function(e){return y.default.createElement(E,{key:e},e)});return y.default.createElement(m.default,{onSubmit:this.handleSubmit},y.default.createElement(_,h({},r,{label:"\u53f8\u673a\u59d3\u540d"}),e("driver_name",{rules:[{required:!0,message:"Please input your E-mail!"}]})(y.default.createElement(u.default,null))),y.default.createElement(_,h({},r,{label:"\u53f8\u673a\u8eab\u4efd\u8bc1\u53f7"}),e("driver_card",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(y.default.createElement(u.default,{type:"text"}))),y.default.createElement(_,h({},r,{label:"\u53f8\u673a\u624b\u673a\u53f7"}),e("driver_mobile",{rules:[{required:!1,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(y.default.createElement(u.default,{type:"text"}))))}}]),t}(y.default.Component),w=m.default.create({mapPropsToFields:function(e){return{driver_name:m.default.createFormField(h({},e.record.driver_name,{value:e.record.driver_name})),driver_mobile:m.default.createFormField(h({},e.record.driver_mobile,{value:e.record.driver_mobile})),driver_card:m.default.createFormField(h({},e.record.driver_card,{value:e.record.driver_card}))}}})(O);t.default=w,e.exports=t.default},2036:function(e,t,n){t=e.exports=n(10)(void 0),t.push([e.i,"",""])},2350:function(e,t,n){var r=n(2036);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;n(11)(r,a);r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=47.87aa381e.chunk.js.map