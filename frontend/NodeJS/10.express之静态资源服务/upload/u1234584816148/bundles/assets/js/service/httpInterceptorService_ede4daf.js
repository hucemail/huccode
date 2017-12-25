define("bundles/assets/js/service/httpInterceptorService",["bundles/assets/js/app","bundles/assets/js/service/authorizationService","bundles/assets/js/service/apiUriService","bundles/assets/js/service/securityService"],function(e){return require("bundles/assets/js/service/authorizationService"),require("bundles/assets/js/service/apiUriService"),require("bundles/assets/js/service/securityService"),e.factory("httpInterceptorService",["$rootScope","$q","$injector","md5SecurityService",function(e,t,r,s){var i={};i.request=function(e){e.headers=e.headers||{};var t=r.get("authorizationService"),i=t.authenticationData;if(i&&(i.tokeninfo&&i.tokeninfo.token_type&&i.tokeninfo.access_token&&(e.headers.authorization=i.tokeninfo.token_type+" "+i.tokeninfo.access_token),i.ticket&&(e.headers.ticket=i.ticket),i.appid&&i.appsecret)){e.headers.timestamp=(new Date).getTime();var a="timestamp="+e.headers.timestamp+"&appid="+i.appid+"&appsecret="+i.appsecret+"&Authorization="+e.headers.authorization;e.headers.signature=s.encrypt(a)}return e};var a=[],n=!1;return i.responseError=function(e){var s=r.get("authorizationService"),i=e.config||{};switch(e.status){case 401:var c=r.get("$http"),o=t.defer();return a.push({config:i,deferred:o}),n||(n=!0,s.refresh_token().then(function(){for(;a.length;){var e=a.shift();c(e.config).then(function(t){e.deferred.resolve(t)},function(t){e.deferred.reject(t)})}n=!1},function(e){o.reject(e)})),o.promise;case 400:return t.reject({status:e.status,msg:e.data.error_description||e.data.error});case 404:return t.reject({status:e.status,msg:e.data.Message})}return console.log(e),t.reject(e)},i}])});