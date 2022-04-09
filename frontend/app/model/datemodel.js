class Datemodel {
    constructor() {
        this.api = new datesApi()
    }

    async createDate(body) {
        try {
            return await this.api.createDate(body)
        } catch (e) {
            console.error(e)
            return {error: 'Echec de l\'ajout des infos de rencontre'}
        }
    }

    async getDates(){
        try {
            return await this.api.getDates()
        }catch (e){
            console.error(e)
            return {error: 'Echec de la recuperation des dates'}
        }
    }

    async getDateById(id){
        try {
            return await this.api.getDateById(id)
        }catch (e) {
            console.error(e)
            return {error: 'Echec lors de la recuperation des rencontres'}
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