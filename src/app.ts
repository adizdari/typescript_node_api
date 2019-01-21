import express = require("express");
import { LanguageUser } from "./LanguageUser";
import { User } from "./User";
import { GitHubApiService } from "./GitHubApiService";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/', function(req, res){
  
  if ((req.query.name) && (req.query.language))
  {
    let svc = new GitHubApiService();
    svc.getUserList(req.query.name, req.query.language, (userList: LanguageUser[])=> {

    let arruser = userList;
    for (let el of arruser)
    {
      svc.getUserInfo(el.login, (user: User)=> {
        console.log(user.fullName, user.followerCount, user.login);
      });
    }
    if (userList.length === 0)
    {
      res.send('No users found!');
    }
    else
    {
      res.send(userList); 
    }
    }); 
  }
  else
  {
    res.send('User name or language not provided!');
  }
});
// export our app
export default app;
