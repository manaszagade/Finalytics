


class Authdata{

    constructor(email,password)
    {
        this.email=email
        this.password = password
        
    }
    getEmail()
    {
        return this.email;
    }
    getPassword()
    {
        return this.password;
    }
}

export default Authdata;