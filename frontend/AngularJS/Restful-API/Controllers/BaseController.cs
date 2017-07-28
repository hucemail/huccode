using Restful_API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Restful_API.Controllers
{
    public class BaseController : ApiController
    {
        protected JsonMsg<T> ConvertJsonMsg<T>( T data, int status = 0, string message ="")
        {
            return new JsonMsg<T>() { data = data, message = message, status = status };
        }
        protected JsonMsg ConvertJsonMsg(object data, int status = 0, string message = "")
        {
            return new JsonMsg() { data= data,message = message, status = status };
        }
    }
}
