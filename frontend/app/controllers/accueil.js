class AccueilController extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
        this.getInfosUserDate()
    }

    async dateListDisplay() {
        const modalAddList = $("#addDateModal")
        modalAddList.style.display = 'block'
        const btnCancelModal = $("#btnDateCancel")
        
        btnCancelModal.onclick = function (){
            modalAddList.style.display = "none"
        }
        window.onclick = function (event) {
            if (event.target === modalAddList){
                modalAddList.style.display = "none"
            }
        }
    }

    async addPersonne() {
        const modalAddPersonne = $("#addPersonneModal")
        modalAddPersonne.style.display = 'block'
        const addPersonneCancel = $("#registerPersonneCancel")
        window.onclick = function (event) {
            if (event.target === modalAddPersonne){
                modalAddPersonne.style.display = "none"
            }
        }  
        addPersonneCancel.onclick = function () {
            modalAddPersonne.style.display = "none"
        }
    }

    async createDateInfos() {
        const note = $("#noteDate").value
        const dateRencontre = $("#dateModalList").value
        const comment = $("#commentModalList").value
        const token = sessionStorage.getItem('Auth')
        try {
            const dateList = await this.model.createDate({
                'dateDating': dateRencontre,
                'comment': comment,
                'note': note,
                'UserId': token.id
            })
            if (!dateList) {
                console.log(401 + 'Echec de l\'ajout dans les dates')
            } else {
                console.log(201 + 'Ajout dans les dates')
            }
        } catch (e) {
            console.error(e)
            return {error: 'Error d\'ajout dans la liste'}
        }

    }

    async createPersonneInfos() {
        const firstNamePersonne = $("#firstNamePersonneModalList").value
        const lastNamePersonne = $("#lastNamePersonneModalList").value
        const sexePersonne = $("#sexePersonneModalList").value
        const dateNaissancePersonne = $("#birthdatePersonneRencontre").value
        try {
            const addPersonne = await this.model.createPersonneInfos({
                'firstName': firstNamePersonne,
                'lastName': lastNamePersonne,
                'sexe': sexePersonne,
                'birthdate': dateNaissancePersonne,
            })
            if (!addPersonne) {
                console.log(401 + ' ' + 'Echec de l\'ajout de la personne')
            } else {
                console.log(201 + ' ' + 'Personne ajouter')
            }
        } catch (e) {
            console.error(e)
            return {error: 'Error add personne'}
        }
    }

    async getInfosUserDate(){
        const infos = await this.model.getInfos()
        const select = $("#datingSelect")
        for (const infosKey in infos){
            select.innerHTML +=`<option 
value="${infos[infosKey].id}">${infos[infosKey].firstName} ${infos[infosKey].lastName}
</option>`
            select.value
        }
    }
}

window.acceuilController = new AccueilController()