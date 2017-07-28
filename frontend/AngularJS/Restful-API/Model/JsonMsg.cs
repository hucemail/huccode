using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Restful_API.Model
{
    public class JsonMsg<T>
    {
        public int status { get; set; }
        public string message { get; set; }
        public T data { get; set; }
    }
    public class JsonMsg
    {
        public int status { get; set; }
        public string message { get; set; }
        public object data { get; set; }
    }
}