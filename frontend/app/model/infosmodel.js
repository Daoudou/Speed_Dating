class Infosmodel {
    constructor() {
        this.api = new infosApi()
    }

    async createPersonneInfos(body) {
        try {
            return await this.api.createPersonneInfos(body)
        } catch (e) {
            console.error(e)
            return {error: 'Echec lors de l\'ajout du date'}
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

}