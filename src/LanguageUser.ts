export class LanguageUser {
    login: string;
    avatar_url: any;

    constructor(user:any) {
        this.login= user.login;
        this.avatar_url = user.avatar_url;
    }
}
