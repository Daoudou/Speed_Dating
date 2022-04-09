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
                dateList.innerHTML += `<tr id="datingListTr_${dateKey.id}">
                <td class="mr-3" scope="col"> ${infos.firstName} </td>
                <td class="mr-3" scope="col"> ${infos.lastName} </td>
                <td class="mr-3" scope="col"> ${infos.sexe} </td>
                <td class="mr-3" scope="col"> ${dateKey.dateDating} </td>
                <td class="mr-3" scope="col"> ${dateKey.note} </td>
                <td class="pr-5" scope="col"> ${dateKey.comment}</td>
                <td class="pr-5"><button type="button" class="btn btn-secondary" onclick="datingListPersonnalController.displayListupdateDateList()">Mettre a jour</button></td>
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

    async displayListupdateDateList(){
        const modalUpdateList = $("#addUpdateDateModal")
        const modalBtnCancel = $("#UpdateDateCancel")
        modalUpdateList.style.display = "block"
        modalBtnCancel.onclick = function () {
            modalUpdateList.style.display = "none"
        }
    }

    async updateListDate(){
        const modalUpdateList = $("#addUpdateDateModal")
        const date = await this.modelDate.getDates()
        // const modalUpdateFirstName = $("#firstNameUpdateDateModalList").value
        // const modalUpdateLastName = $("#lastNameUpdateDateModalList").value
        // const modalUpdateSexeName = $("#sexeUpdateDateModalList").value
        const modalUpdateDateName = $("#birthdateUpdateDateRencontre").value
        const modalUpdateComment = $("#commentUpdateDateModalList").value
        console.log(modalUpdateComment)
        const modalUpdateNote = $("#noteDateUpdate").value
        for (const dateKey of date){
            console.log(dateKey.id)
            const dateUpdateList = await this.modelDate.updateDateList(`${dateKey.id}`,{
                'dateDating': modalUpdateDateName,
                'comment': modalUpdateComment,
                'note': modalUpdateNote
            })
            if (!dateUpdateList){
                console.log(409 + ' ' + 'Echec de la mise a jour de la liste')
            }else {
                console.log(201 + ' '+ 'Rencontre mise a jour')
                modalUpdateList.style.display = "none"
                this.displayRefreshDateList()
            }
        }
    }

    async displayRefreshDateList(){
        const refresh = $("#datingListUser")
        location.reload(true)
    }

}

window.datingListPersonnalController = new DatingListPersonnal()