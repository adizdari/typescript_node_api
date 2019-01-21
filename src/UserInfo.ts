export class UserInfo {
    login: string;
    fullName: string;
    avatarUrl: string;
    followerCount: string;

    constructor(login: string, name: string, avatar_url: string, followers: string) {
        this.login = login;
        this.fullName = name;
        this.avatarUrl = avatar_url;
        this.followerCount = followers;
    }
}
