class AccueilController extends BaseController{
    constructor() {
        super();
        this.model = new Usermodel()

    }

    async dateListDisplay(){
        const modalAddList = $("#addDateModal")
        modalAddList.style.display = 'block'
    }
    async createDateInfos(){
        const firstNameDate = $("#firstNameModalList").value
        const lastNameDate = $("#lastNameModalList").value
        const sexeDate = $("#sexeModalList").value
        const note = $("#noteDate").value
        const date = $("#dateModalList").value
        const comment = $("#commentModalList").value
        try {
            const dateInfos = await this.model.createDateInfos({
                'firstName': firstNameDate,
                'lastName' : lastNameDate,
                'sexe': sexeDate
            })
            if (!dateInfos){
                console.log(401 + 'Echec de l\'ajout dans les infos')
            }else {
                console.log(201 + 'Ajout dans l\'infos')
            }
            const dateList = await this.model.createDate({
                'dateDating': date ,
                'comment': comment,
                'note': note
            })

            if (!dateList){
                console.log(401 + 'Echec de l\'ajout dans les dates')
            } else {
                console.log(201 + 'Ajout dans les dates')
            }

        }catch (e) {
            console.error(e)
            return {error: 'Error d\'ajout dans la liste'}
        }
    }
}

window.acceuilController = new AccueilController()