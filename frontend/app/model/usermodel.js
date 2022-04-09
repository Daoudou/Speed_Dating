class Usermodel {
    constructor() {
        this.api = new userApi()
    }

    async createUsers(body) {
        try {
            return await this.api.createUsers(body)
        } catch (e) {
            console.error(e)
            return {error: 'Echec de la creation'}
        }
    }

    async loginUsers(body) {
        try {
            return await this.api.loginUsers(body)
        } catch (e) {
            console.error(e)
            return {error: 'Echec de login'}
        }
    }

    async getUser(id){
        try {
            return await this.api.getUser(id)
        }catch (e){
            console.error(e)
            return {error: 'Echec de la recup des utilisateur'}
        }
    }


}