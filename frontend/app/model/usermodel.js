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

    async createPersonneInfos(body) {
        try {
            return await this.api.createPersonneInfos(body)
        } catch (e) {
            console.error(e)
            return {error: 'Echec lors de l\'ajout du date'}
        }
    }

    async createDate(body) {
        try {
            return await this.api.createDate(body)
        } catch (e) {
            console.error(e)
            return {error: 'Echec de l\'ajout des infos de rencontre'}
        }
    }

    async getInfos(id){
        try {
            return await this.api.getInfos(id)
        }catch (e){
            console.error(e)
            return {error: 'Echec de la recup des infos'}
        }
    }

    async getInfosList(){
        try {
            return await this.api.getInfosList()
        }catch (e){
            console.error(e)
            return {error: 'Echec de la recup des infos'}
        }
    }

    async getDates(){
        try {
            return await this.api.getDates()
        }catch (e){
            console.error(e)
            return {error: 'Echec de la recup des dates'}
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

    async deleteDateList(id){
        try {
            return await this.api.deleteDateList(id)
        }catch (e){
            console.error(e)
            return {error: 'Delete error'}
        }
    }

}