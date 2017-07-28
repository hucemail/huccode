using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Restful_API.Model
{
    /// <summary>
    /// 用户信息
    /// </summary>
    public class User
    {
        public int userid { get; set; }
        public string username { get; set; } //用户名
        public string password { get; set; }//密码
        public string nickname { get; set; }//昵称
        public EGender gender { get; set; }//男OR女
        public string hobby { get; set; }//爱好
        public string province { get; set; }//省
        public string city { get; set; }//市
        public string county { get; set; }//区县
        public string street { get; set; }//街道
    }
    public enum EGender
    {
        man,
        woman
    }
}