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
            const dateList = $("#ListDateTable")
            for (const dateKey of date) {
                //const user = this.model.getUser(dateKey.UserId)
                const infos = await this.model.getInfos(dateKey.InfoId)
                console.log(dateKey.InfoId)
                dateList.innerHTML += `<tr>
                <td class="mr-3" scope="col"> ${infos.firstName} </td>
                <td class="mr-3" scope="col"> ${infos.lastName} </td>
                <td class="mr-3" scope="col"> ${infos.sexe} </td>
                <td class="mr-3" scope="col"> ${new Date(dateKey.dateDating).toUTCString()} </td>
                <td class="mr-3" scope="col"> ${dateKey.note} </td>
                <td class="mr-3" scope="col"> ${dateKey.comment} </td>
                <td class="mr-3" scope="col"><button>Supprimer</button></td>
            </tr>`
            }
        } catch (e) {
            console.error(e)
            return {error: 'sa narche pas'}
        }
    }

    async removeListDate(id){
        const deleteDateList = await this.model.deleteDateList(id)
    }
}

window.datingListPersonnalController = new DatingListPersonnal()