using Restful_API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Restful_API.Controllers
{
    [RoutePrefix("api/test")]
    public class TestController : BaseController
    {
        [HttpGet]
        [Route("getModel")]
        public JsonMsg<TestModel> getModel([FromUri]TestModel paras)
        {
            return ConvertJsonMsg(paras);
        }
        [HttpGet]
        [Route("getParas")]
        public JsonMsg<string> getParas(int id, string name = "")
        {
            return ConvertJsonMsg(name + ":" + id);
        }
        [HttpPost]
        [Route("postModel")]
        public JsonMsg<TestModel> postModel(TestModel paras)
        {
            return ConvertJsonMsg(paras);
        }
        [HttpPost]
        [Route("postDynamic")]
        public JsonMsg<Newtonsoft.Json.Linq.JObject> postDynamic(dynamic paras)
        {
            return ConvertJsonMsg(paras);
        }
        [HttpPost]
        [Route("postHeader")]
        public JsonMsg<string> postHeader()
        {
            var content = Request.Properties["MS_HttpContext"] as HttpContextBase;
            return ConvertJsonMsg(content.Request.Headers["Signature"]);
        }
    }
    public class TestModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string time { get; set; }
        public EGender gender { get; set; }
    }
}
