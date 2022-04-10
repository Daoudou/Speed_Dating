class DatingListGeneral extends BaseController{
    constructor() {
        super();
        this.model = new Usermodel()
        this.modelDate = new Datemodel()
        this.modelInfos = new Infosmodel()
        this.getDateListInfosGeneral().then(r=>{

        })
    }

    async getDateListInfosGeneral(){
        try {
            const dateGeneral = await this.modelDate.getDates()
            const dateListGeneral = $("#ListDateTableGeneral")
            for (const dateKeyGeneral of dateGeneral){
                const infosGeneral = await this.modelInfos.getInfos(dateKeyGeneral.InfoId)
                dateListGeneral.innerHTML += `<tr>
                <td class="mr-3" scope="col"> ${infosGeneral.firstName} </td>
                <td class="mr-3" scope="col"> ${infosGeneral.lastName} </td>
                <td class="mr-3" scope="col"> ${infosGeneral.sexe} </td>
                <td class="mr-3" scope="col"> ${dateKeyGeneral.dateDating} </td>
                <td class="mr-3" scope="col"> ${dateKeyGeneral.note} </td>
                <td class="pr-5" scope="col"> ${dateKeyGeneral.comment}</td>
                </tr>`
            }
        }catch (e) {
            console.error(e)
            return {error : 'Error get date list general'}
        }
    }

}

window.datingListPersonnalController = new DatingListGeneral()