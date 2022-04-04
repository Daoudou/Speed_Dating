class Usermodel {
    constructor() {
        this.api = new userApi()
    }

    async createUsers(firstName, lastName,
                pseudo, email, password,
                sexe, birthdate){
        return await this.api.createUsers(firstName, lastName,
                                    pseudo, email, password,
                                    sexe, birthdate)
    }

    async getUsers(email,password){
        return await this.api.getUsers(email,password)
    }

}