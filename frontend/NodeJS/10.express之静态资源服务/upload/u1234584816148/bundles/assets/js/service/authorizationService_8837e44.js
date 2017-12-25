define("bundles/assets/js/service/authorizationService",["bundles/assets/js/app","bundles/assets/js/service/apiUriService","bundles/assets/js/service/userService","bundles/assets/js/service/tokenService"],function(e){return require("bundles/assets/js/service/apiUriService"),require("bundles/assets/js/service/userService"),require("bundles/assets/js/service/tokenService"),e.factory("authorizationService",["$http","$q","$window","$location","localStorageService","apiUriService","userService","tokenService",function(e,t,n,i,a,r,o,c){var s={},u=function(){return a.get("authenticationData")||{id:"",username:"",nickname:"",headportrait:"",appid:"",appsecret:"",createtime:"",ticket:"",tokeninfo:{}}},f=u();return s.authenticationData=f,s.updateAuthenticationData=function(e){a.set("authenticationData",e)},s.isAuthenticated=function(){return f.appid&&f.appsecret&&f.tokeninfo?!0:(a.remove("authenticationData"),!1)},s.login=function(e){e.grant_type="password";var n=t.defer();return c.getTokenByPassword(e).then(function(e){f.tokeninfo=e.data,c.ticket(e.data.refresh_token).then(function(e){f.ticket=e,a.set("authenticationData",f),o.info().then(function(e){f.id=e.id,f.username=e.account,f.nickname=e.name,f.headportrait=e.logo,f.appid=e.appid,f.createtime=e.createtime,f.appsecret=e.appsecret,a.set("authenticationData",f),n.resolve(e)},function(e){s.logOut(),n.reject(e)})},function(e){s.logOut(),n.reject(e)})},function(e){n.reject(e)}),n.promise},s.refresh_token=function(){var e=t.defer();return f&&f.tokeninfo&&f.tokeninfo.refresh_token?c.refresh_token(f.tokeninfo.refresh_token).then(function(t){f.tokeninfo=t.data,a.set("authenticationData",f),e.resolve(t)},function(t){s.logOut(),e.reject(t)}):s.logOut(),e.promise},s.verify_token=function(){var e=t.defer();return c.verify_token().then(function(t){e.resolve(t)},function(t){e.reject(t)}),e.promise},s.logOut=function(e){var t=i.search();t&&t.oauth_callback&&!e&&(e=t.oauth_callback),c.clearticket(f.ticket).then(function(){a.remove("authenticationData");var t="/login";e&&(t+="?oauth_callback="+e),n.location.href=t},function(){})},s}])});