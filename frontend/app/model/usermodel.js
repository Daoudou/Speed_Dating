class Usermodel {
    constructor() {
        this.api = new userApi()
    }

    async createUsers(body){
        try {
            return await this.api.createUsers(body)
        } catch (e){
            console.error(e)
            return {error: 'Echec de la creation'}
        }
    }

    async loginUsers(body){
        try {
            return await this.api.loginUsers(body)
        } catch (e) {
            console.error(e)
            return {error : 'Echec de login'}
        }
    }

    async createDateInfos(body){
        try {
            return await this.api.createDateInfos(body)
        }catch (e) {
            console.error(e)
            return {error: 'Echec lors de l\'ajout du date'}
        }
    }

    async createDate(body){
        try {
            return await this.api.createDate(body)
        }catch (e) {
            console.error(e)
            return {error: 'Echec de l\'ajout des infos de rencontre'}
        }
    }

}