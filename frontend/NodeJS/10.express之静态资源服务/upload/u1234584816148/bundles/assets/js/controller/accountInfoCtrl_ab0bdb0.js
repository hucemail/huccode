define("bundles/assets/js/controller/accountInfoCtrl",["bundles/assets/js/app","bundles/plugins/formvalidator/formvalidator.min","bundles/assets/js/controller/baseCtrl","bundles/assets/js/service/authorizationService"],function(t,e){return require("bundles/assets/js/controller/baseCtrl"),require("bundles/assets/js/service/authorizationService"),t.controller("accountInfoCtrl",["$scope","$controller","authorizationService","userService",function(t,a,n,o){angular.extend(this,a("baseCtrl",{$scope:t}));var i=t.authenticationData=n.authenticationData;t.form={appid:t.authenticationData.appid,id:t.authenticationData.id,name:t.authenticationData.nickname},t.update=function(){t.btnLoading=!0,e.validform(function(){o.updateinfo(t.form).then(function(){i.nickname=t.form.name,n.updateAuthenticationData(i),t.success=!0},function(e){t.errormsg=e.msg,$timeout(function(){t.errormsg=void 0},3e3),t.btnLoading=!1})},function(){t.btnLoading=!1})};var r=[{validator:{autotip:!0,group:[{type:"notEmpty",errormsg:"请设置你的昵称."}]},balloon:{tiptext:[{text:"昵称不能为空,推荐使用中文"}]}}];angular.element(document).ready(function(){e.manualStartUp(document.getElementsByClassName("form-validator-watch"),r)})}])});