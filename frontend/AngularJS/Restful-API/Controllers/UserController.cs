using Restful_API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Restful_API.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : BaseController
    {
        private static List<User> users = new List<User>();
        
        private int GenerateUserID()
        {
            return (int)(DateTime.Now - (new DateTime(1970, 1, 1))).TotalSeconds;
        }

        [HttpPost]
        [HttpGet]
        [Route("getalluser")]
        public JsonMsg<List<User>>  GetAllUser()
        {
            return ConvertJsonMsg<List<User>>(users);
        }

        [HttpPost]
        [HttpGet]
        [Route("getuser")]
        public JsonMsg<User> GetUser(int userid)
        {
            var data = (from u in users where u.userid.Equals(userid) select u).FirstOrDefault();
            if (data == null) return ConvertJsonMsg<User>(data, 1, "用户不存在");
            return ConvertJsonMsg<User>(data);
        }

        [HttpPost]
        [Route("regiest")]
        public JsonMsg Regiest(User user)
        {
            if (user == null) return ConvertJsonMsg(null, 1, "参数传递错误");
            user.userid = GenerateUserID();
            users.Add(user);
            return ConvertJsonMsg(null);
        }

        [HttpPost]
        [Route("delete")]
        public JsonMsg Delete(int userid)
        {
            var data = (from u in users where u.userid.Equals(userid) select u).FirstOrDefault();
            if (data == null) return ConvertJsonMsg(null, 1, "用户不存在");
            return users.Remove(data) ? ConvertJsonMsg(null) : ConvertJsonMsg(null,2,"删除失败");
        }

        [HttpPost]
        [Route("update")]
        public JsonMsg Update(User user)
        {
            if (user == null) return ConvertJsonMsg(null, 1, "参数传递错误");

            var data = (from u in users where u.userid.Equals(user.userid) select u).FirstOrDefault();
            if (data == null) return ConvertJsonMsg(null, 2, "用户不存在");
            users.Remove(data);

            users.Add(user);
            return ConvertJsonMsg(null);
        }
    }
}
