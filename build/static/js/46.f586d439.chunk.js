webpackJsonp([46],{1393:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(263),s=o(i),u=n(45),c=o(u),f=n(52),d=o(f),p=n(169),m=o(p),h=n(65),b=o(h),v=n(12),y=o(v),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(470),n(51),n(56),n(264),n(72),n(35);var O=n(0),E=o(O),w=n(20),S=n(1926),R=o(S),k=n(1927),C=o(k),x=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onRef=function(e){n.child=e},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(){n.setState({ModalText:"The modal will be closed after two seconds",confirmLoading:!0}),setTimeout(function(){n.setState({visible:!1,confirmLoading:!1}),n.child.handleSubmit()},2e3)},n.handleCancel=function(){console.log("Clicked cancel button"),n.setState({visible:!1}),n.child.reset()},n.handleOk2=function(e){n.childS.handleSubmit(e),console.log(e),n.setState({visible2:!1})},n.handleCancel2=function(e){console.log(e),n.setState({visible2:!1}),n.childS.reset()},n.fetch=function(e){console.log("params:",e),n.setState({loading:!0}),w.RequireUtils.baseRequire("role/role-list",e,function(e){if(1==e.code){var t=g({},this.state.pagination);console.log(e),t.total=e.count,this.setState({loading:!1,data:e.data.list,pagination:t}),console.log("\u6211\u662f\u4eba\u624d")}else alert("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25\uff01")}.bind(n))},n.handleTableChange=function(e){var t=g({},n.state.pagination);t.current=e.current,n.setState({pagination:t}),n.fetch({limit:e.pageSize,page:e.current})},n.state={record:{},data:[],pagination:{},loading:!1,visible:!1,visible2:!1,ModalText:"\u8f66\u6302\u6dfb\u52a0",confirmLoading:!1},n.findRoleAll=n.findRoleAll.bind(n),n.onRefS=n.onRefS.bind(n),n}return l(t,e),_(t,[{key:"onRefS",value:function(e){this.childS=e}},{key:"componentDidMount",value:function(){var e={};e.page=1,e.limit=10,this.fetch(e)}},{key:"findRoleAll",value:function(){var e={};e.page=1,e.limit=10,this.fetch(e),console.log("w\u6211\u662f\u5e05\u54e5")}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,o=t.visible,r=t.ModalText,a=t.confirmLoading,l=t.pagination,i=t.loading,u=[{title:"\u89d2\u8272\u7f16\u53f7",dataIndex:"role_code",key:"role_code"},{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"role_name",key:"role_name"},{title:"\u6821\u8272\u63cf\u8ff0",dataIndex:"role_desc",key:"role_desc"},{title:"\u64cd\u4f5c",key:"action",render:function(t,n){return E.default.createElement("span",null,E.default.createElement("a",{href:"",style:{marginRight:"10px"}},E.default.createElement(y.default,{type:"edit"}),E.default.createElement("span",{onClick:function(t){t.preventDefault(),t.stopPropagation(),e.setState({visible2:!0,record:n})}},"\u7f16\u8f91")),E.default.createElement("a",{href:"",onClick:function(t){t.preventDefault(),t.stopPropagation(),w.RequireUtils.baseRequire("role/forbid",{id:n.id},function(e){1==e.code?(b.default.success("\u72b6\u6001\u4fee\u6539\u6210\u529f"),this.findRoleAll()):b.default.error("\u72b6\u6001\u4fee\u6539\u5931\u8d25")}.bind(e))}},E.default.createElement("span",null,parseInt(n.role_status)?E.default.createElement("span",null,"\u7981\u7528"):E.default.createElement("span",null,"\u542f\u7528"))),E.default.createElement("a",{href:"",style:{marginLeft:10}},E.default.createElement(y.default,{type:"delete"}),E.default.createElement("span",{onClick:function(t){t.preventDefault(),t.stopPropagation();var o=e;m.default.confirm({title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8be5\u89d2\u8272\u4fe1\u606f\u5417\uff1f",content:"\u5220\u9664\u540e\uff0c\u8be5\u89d2\u8272\u4fe1\u606f\u5c06\u65e0\u6cd5\u6062\u590d",onOk:function(){w.RequireUtils.baseRequire("role/del-role",{id:n.id},function(e){1==e.code?(alert(e.msg),this.findRoleAll()):alert(e.msg)}.bind(o))},onCancel:function(){console.log("Cancel")}})}},"\u5220\u9664")))}}];return E.default.createElement("div",null,E.default.createElement(m.default,{title:"\u7f16\u8f91\u89d2\u8272\u4fe1\u606f",visible:this.state.visible2,onOk:this.handleOk2,onCancel:this.handleCancel2},E.default.createElement(C.default,{record:this.state.record,onRefS:this.onRefS,go:this.findRoleAll})),E.default.createElement(c.default,{gutter:8,style:{marginTop:"10px"}},E.default.createElement(d.default,{span:24},E.default.createElement("div",{style:{marginBottom:"10px",textAlign:"right"}},E.default.createElement("span",{style:{marginRight:"15px"}}),E.default.createElement("span",{onClick:this.showModal},E.default.createElement(y.default,{type:"plus-circle-o",style:{marginRight:"8px"}}),"\u65b0\u589e")),E.default.createElement(m.default,{title:r,visible:o,onOk:this.handleOk,confirmLoading:a,onCancel:this.handleCancel},E.default.createElement(R.default,{onRef:this.onRef,go:this.findRoleAll})))),E.default.createElement(s.default,{columns:u,dataSource:n,loading:i,pagination:l,onChange:this.handleTableChange}))}}]),t}(E.default.Component);t.default=x,e.exports=t.default},1926:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(64),s=o(i),u=n(267),c=o(u),f=n(21),d=o(f),p=n(100),m=o(p),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(63),n(473),n(27),n(129);var v=n(0),y=o(v),g=n(20);n(2351);var _=m.default.Item,O=(d.default.Option,c.default.Opangtion),E=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleConfirmBlur=function(e){var t=e.target.value;n.setState({confirmDirty:n.state.confirmDirty||!!t})},n.state={confirmDirty:!1,autoCompleteResult:[],driver:[]},n.handleConfirmBlur=n.handleSubmit.bind(n),n.reset=n.reset.bind(n),n}return l(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"handleSubmit",value:function(){var e=this;this.props.form.validateFieldsAndScroll(function(t,n){if(!t){e.props.form.resetFields(),console.log("Received values of form: ",n);var o=n;g.RequireUtils.baseRequire("role/add-role",o,function(e){1==e.code?(alert(e.msg),this.props.go(),this.props.form.resetFields()):(this.props.form.resetFields(),alert(e.msg)),this.props.form.resetFields()}.bind(e))}})}},{key:"reset",value:function(){this.props.form.resetFields()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,n=t.autoCompleteResult,o=(t.options,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}});n.map(function(e){return y.default.createElement(O,{key:e},e)});return y.default.createElement(m.default,{onSubmit:this.handleSubmit},y.default.createElement(_,h({},o,{label:"\u89d2\u8272\u540d\u79f0"}),e("role_name",{rules:[{required:!0,message:"Please input your E-mail!"}]})(y.default.createElement(s.default,null))),y.default.createElement(_,h({},o,{label:"\u6821\u8272\u63cf\u8ff0"}),e("role_desc",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(y.default.createElement(s.default,{type:"text"}))))}}]),t}(y.default.Component),w=m.default.create()(E);t.default=w,e.exports=t.default},1927:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(64),s=o(i),u=n(267),c=o(u),f=n(21),d=o(f),p=n(100),m=o(p),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(63),n(473),n(27),n(129);var v=n(0),y=o(v),g=n(20),_=m.default.Item,O=(d.default.Option,c.default.Option),E=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleConfirmBlur=function(e){var t=e.target.value;n.setState({confirmDirty:n.state.confirmDirty||!!t})},n.validateToNextPassword=function(e,t,o){var r=n.props.form;t&&n.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),o()},n.state={confirmDirty:!1,autoCompleteResult:[],driver:[]},n.handleConfirmBlur=n.handleSubmit.bind(n),n.reset=n.reset.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return l(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.onRefS(this)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(e),this.props.form.validateFieldsAndScroll(function(e,n){if(!e){console.log("Received values of form: ",n);var o=n;o.id=t.props.record.id,console.log(o),g.RequireUtils.baseRequire("/role/modify-role",o,function(e){1==e.code?(console.log("etet"),alert(e.msg),this.props.go()):alert(e.msg),this.props.form.resetFields()}.bind(t))}})}},{key:"reset",value:function(){console.log("333333333"),console.log(this.props.record),this.props.form.resetFields()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,n=t.autoCompleteResult,o=(t.options,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}});n.map(function(e){return y.default.createElement(O,{key:e},e)});return y.default.createElement(m.default,{onSubmit:this.handleSubmit},y.default.createElement(_,h({},o,{label:"\u89d2\u8272\u540d\u79f0"}),e("role_name",{rules:[{required:!0,message:"Please input your E-mail!"}]})(y.default.createElement(s.default,null))),y.default.createElement(_,h({},o,{label:"\u89d2\u8272\u63cf\u8ff0"}),e("role_desc",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(y.default.createElement(s.default,{type:"text"}))))}}]),t}(y.default.Component),w=m.default.create({mapPropsToFields:function(e){return{role_name:m.default.createFormField(h({},e.record.role_name,{value:e.record.role_name})),role_desc:m.default.createFormField(h({},e.record.role_desc,{value:e.record.role_desc}))}}})(E);t.default=w,e.exports=t.default},2037:function(e,t,n){t=e.exports=n(10)(void 0),t.push([e.i,"",""])},2351:function(e,t,n){var o=n(2037);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0;n(11)(o,r);o.locals&&(e.exports=o.locals)}});
//# sourceMappingURL=46.f586d439.chunk.js.map