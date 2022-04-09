class AccueilController extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
        this.modelDate = new Datemodel()
        this.modelInfo = new Infosmodel()
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
        const select = $("#datingSelect").value
        const dateModal = $("#addDateListModal")
        const dateModalBtnCloe = $("#dateModalBtnClose")
        try {
            console.log(select)
            const dateList = await this.modelDate.createDate({
                'dateDating': dateRencontre,
                'comment': comment,
                'note': note,
                'UserId': token.id,
                'InfoId': select
            })
            if (!dateList) {
                console.log(401 + 'Echec de l\'ajout dans les dates')
            } else {
                console.log(201 + 'Ajout dans les rencontres')
                dateModal.style.display = "block"
                dateModalBtnCloe.onclick = function () {
                    dateModal.style.display = "none"
                }
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
        const personneModal = $("#AddPersonneListModal")
        const personnalModalBtn = $("#personneAddModalBtnClose")
        try {
            const addPersonne = await this.modelInfo.createPersonneInfos({
                'firstName': firstNamePersonne,
                'lastName': lastNamePersonne,
                'sexe': sexePersonne,
                'birthdate': dateNaissancePersonne,
            })
            if (!addPersonne) {
                console.log(401 + ' ' + 'Echec de l\'ajout de la personne')
            } else {
                console.log(201 + ' ' + 'Personne ajouter')
                personneModal.style.display = "block"
                personnalModalBtn.onclick = function () {
                    personneModal.style.display = "none"
                }
            }
        } catch (e) {
            console.error(e)
            return {error: 'Error add personne'}
        }
    }

    async getInfosUserDate(){
        const infos = await this.modelInfo.getInfosList()
        const select = $("#datingSelect")
        for (const infosKey in infos){
            select.innerHTML +=`<option value="${infos[infosKey].id}">${infos[infosKey].firstName} ${infos[infosKey].lastName}</option>`
        }
    }
    async logOut(){
        sessionStorage.clear()
        localStorage.clear()
        navigate('index')
    }
}

window.acceuilController = new AccueilController()