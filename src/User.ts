export class User {
    login: string;
    fullName: string;
    followerCount: string;

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.followerCount = userResponse.followers;
    }
}
