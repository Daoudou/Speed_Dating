class DatingListPersonnal extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
        this.getDateListInfos().then(r => {

        })
        this.token = sessionStorage.getItem('Auth')
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
                console.log(dateKey.id)
                dateList.innerHTML += `<tr>
                <td class="mr-3" scope="col"> ${infos.firstName} </td>
                <td class="mr-3" scope="col"> ${infos.lastName} </td>
                <td class="mr-3" scope="col"> ${infos.sexe} </td>
                <td class="mr-3" scope="col"> ${new Date(dateKey.dateDating)} </td>
                <td class="mr-3" scope="col"> ${dateKey.note} </td>
                <td class="mr-3" scope="col"> ${dateKey.comment}</td>
                <td class="mr-3"><button type="button" class="btn btn-secondary">Mettre a jour</button></td>
               </tr>`
            }
        } catch (e) {
            console.error(e)
            return {error: 'Error create date'}
        }
    }

    async removeListDate(id){
        const date = {
            id: id
        }
        const datingList = $("#datingListUser")
        await this.model.deleteDateList(date)
        if (datingList.parentNode){
            datingList.removeChild(datingList)
        }
    }
}

window.datingListPersonnalController = new DatingListPersonnal()