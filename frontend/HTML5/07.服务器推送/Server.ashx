<%@ WebHandler Language="C#" Class="Server" %>

using System;
using System.Web;

public class Server : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/event-stream";
        context.Response.Expires = -1;
        string str = string.Format("event:{0}\r\ndata:HelloWorld\n\n","MyEvent");
        context.Response.Write(str);
        context.Response.Flush();
    }

    public bool IsReusable
    {
        get
        {
            return true;
        }
    }

}