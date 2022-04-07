class DatingListPersonnal extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
        this.getDateListInfos().then(r => {

        })
    }

    async getDateListInfos() {
        try {
            const date = await this.model.getDates()
            console.log(date)
            const dateList = $("#listDate")
            for (const dateKey of date) {
                //const user = this.model.getUser(dateKey.UserId)
                const infos = await this.model.getInfos(dateKey.InfoId)
                console.log(dateKey.InfoId)
                dateList.innerHTML += `<li class="list-group-item"><div class="row">
                   <div class="col-md-1 col-sm-12">
                          ${infos.firstName} 
                   </div> 
                   <div class="col-md-1 col-sm-12">
                           ${infos.lastName}
                   </div> 
                   <div class="col-md-2 col-sm-12">
                           ${infos.birthdate}
                   </div> 
                   <div class="col-md-1 col-sm-12">
                            ${infos.sexe}
                   </div> 
                   <div class="col-md-2 col-sm-12">
                            ${dateKey.dateDating}
                   </div> 
                   <div class="col-md-2 col-sm-12">
                            ${dateKey.note}
                   </div> 
                   <div class="col-md-1 col-sm-12">
                            ${dateKey.comment}
                   </div> 
                   <div class="col-md-1 col-sm-12">
                        <button onclick="this.removeListDate(${dateKey.id})">Supprimer</button>
                   </div>   
            </div>
            </li>`
            }
        } catch (e) {
            console.error(e)
            return {error: 'sa narche pas'}
        }
    }

    async removeListDate(id){
        const deleteDateList = this.model.deleteDateList(id)
        return deleteDateList
    }
}

window.datingListPersonnalController = new DatingListPersonnal()