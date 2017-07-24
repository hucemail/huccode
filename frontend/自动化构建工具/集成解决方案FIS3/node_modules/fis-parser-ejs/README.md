# fis-parser-ejs

a parser plugin for fis to compile ejs file

## usage

1. install

    ```bash
    npm install -g fis-parser-ejs
    ```

1. configure

    ```javascript
    //tell fis that `.ejs` is a js file
    fis.config.set('roadmap.ext.ejs', 'js');
    //tell fis that parse `.ejs` file by using `fis-parser-ejs` plugin
    fis.config.set('modules.parser.ejs', 'ejs');
    //set options if you need
    //@see https://github.com/visionmedia/ejs#options
    fis.config.set('settings.parser.ejs', {
        open : '<#',
        close : '#>'
    });
    ```

1. inline ejs file

    * source:
    
        ```javascript
        /**********************************
         * tpl.ejs content:
         **********************************
         <% if (user) { %>
             <h2><%= user.name %></h2>
         <% } %>
         **********************************/
        var tpl = __inline('tpl.ejs');
        var data = {
            user : {
                name : 'foo'
            }
        };
        var html = tpl(data);
        console.log(html);
        ```
    
    * release:
    
        ```javascript
        var tpl = [function(locals,filters,escape,rethrow){function rethrow(e,n,a,t){var r=n.split("\n"),s=Math.max(t-3,0),c=Math.min(r.length,t+3),i=r.slice(s,c).map(function(e,n){var a=n+s+1;return(a==t?" >> ":"    ")+a+"| "+e}).join("\n");throw e.path=a,e.message=(a||"ejs")+":"+t+"\n"+i+"\n\n"+e.message,e}escape=escape||function(e){return String(e).replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var __stack={lineno:1,input:"<% if (user) { %>\n    <h2><%= user.name %></h2>\n<% } %>",filename:"a.ejs"};try{var buf=[];with(locals||{})!function(){buf.push(""),__stack.lineno=1,user&&(buf.push("\n    <h2>",escape((__stack.lineno=2,user.name)),"</h2>\n"),__stack.lineno=3),buf.push("")}();return buf.join("")}catch(err){rethrow(err,__stack.input,__stack.filename,__stack.lineno)}}][0];
        var data = {
            user : {
                name : 'foo'
            }
        };
        var html = tpl(data);
        console.log(html);
        ```