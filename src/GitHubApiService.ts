import * as request from "request";
import { LanguageUser } from "./LanguageUser";
import { User } from "./User";

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GitHubApiService {
 
    getUserList(userName: string, language: string, cb: (userList: LanguageUser[]) => any) {       

        request.get('https://api.github.com/search/users?q=' + userName + 'language:' + language, 
        OPTIONS, (error: any, response: any, body: any) =>  {   
            let userList = body.items.map((user: any) => new LanguageUser(user));
            cb(userList);       
        });
   }

   getUserInfo(userName: string, cb: (user: User) => any) {       

    request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            cb(user);
        });
    }
}

