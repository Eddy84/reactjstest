export class Auth
{
    user : object;

    constructor()
    {
        this.user = null;
    }
    isAuthenticated()
    {
        return this.user !== null;
    }
    authenticate()
    {
        this.user = 
        {
            userId : "123456789",
            firstName : "Eduard",
            lastName : "Aumüller",
        };
    }
    signOut()
    {
        this.user = null;
    }
}