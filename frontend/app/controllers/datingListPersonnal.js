class DatingListPersonnal extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
        this.modelDate = new Datemodel()
        this.modelInfos = new Infosmodel()
        this.getDateListInfos().then(r => {

        })
    }

    async getDateListInfos() {
        try {
            const date = await this.modelDate.getDates()
            console.log(date)
            const dateList = $("#ListDateTable")
            for (const dateKey of date) {
                //const user = this.model.getUser(dateKey.UserId)
                const infos = await this.modelInfos.getInfos(dateKey.InfoId)
                console.log(dateKey.InfoId)
                console.log(dateKey.id)
                dateList.innerHTML += `<tr id="datingListTr_${dateKey.id}">
                <td class="mr-3" scope="col"> ${infos.firstName} </td>
                <td class="mr-3" scope="col"> ${infos.lastName} </td>
                <td class="mr-3" scope="col"> ${infos.sexe} </td>
                <td class="mr-3" scope="col"> ${dateKey.dateDating} </td>
                <td class="mr-3" scope="col"> ${dateKey.note} </td>
                <td class="pr-5" scope="col"> ${dateKey.comment}</td>
                <td class="pr-5"><button type="button" class="btn btn-secondary" onclick="datingListPersonnalController.updateDateList()">Mettre a jour</button></td>
                <td class="mr-3"><button type="button" class="btn btn-secondary" onclick="datingListPersonnalController.removeListDate('${dateKey.id}')">Supprimer</button></td>
               </tr>`
            }
        } catch (e) {
            console.error(e)
            return {error: 'Error create date'}
        }
    }

    async removeListDate(id) {
        const datingList = $(`#datingListTr_${id}`)
        await this.modelDate.deleteDateList(id)
        datingList.remove()
    }

    async updateDateList(){
        const modalUpdateList = $("#addUpdateDateModal")
        const modalBtn = $("#UpdateDateModalBtnClose")
        const modalBtnCancel = $("#UpdateDateCancel")
        modalUpdateList.style.display = "block"

        modalBtn.onclick = function (){
            modalUpdateList.style.display = "none"
        }
        modalBtnCancel.onclick = function () {
            modalUpdateList.style.display = "none"
        }
    }
}

window.datingListPersonnalController = new DatingListPersonnal()