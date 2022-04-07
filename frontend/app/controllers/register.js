class RegisterController extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
    }

    async createUsers() {
        const firstNameRegister = $("#registerfirstName").value
        const lastNameRegister = $("#registerlastName").value
        const pseudoRegister = $("#registerPseudo").value
        const emailRegister = $("#registerEmail").value
        const passwordRegister = $("#registerPassword").value
        const sexeRegister = $("#registerSexe").value
        const dateRegister = $("#registerDate").value
        const registerModalConfirm = $("#registerModalConfirm")
        const registerModalCloseBtn = $("#registerModalBtnClose")
        try {
           let msg;
           const str = $("#registerPassword").value
           if (str.match(/[0-9]/g) && str.match(/[A-Z]/g) && str.match(/[a-z]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >=5){
               msg = "<p style='color:green'> Mot de passe fort. </p>"
               const createUser = await this.model.createUsers({
                   'firstName': firstNameRegister,
                   'lastName': lastNameRegister,
                   'pseudo': pseudoRegister,
                   'email': emailRegister,
                   'password': passwordRegister,
                   'sexe': sexeRegister,
                   'birthdate': dateRegister,
                   'roles' : 'MEMBER'
               })
               if (!createUser) {
                   console.log('401')
               } else {
                   registerModalConfirm.style.display = "block"
                   registerModalCloseBtn.onclick = function (){
                       registerModalConfirm.style.display = "none"
                       navigate('login')
                   }
               }
               console.log('201')
           } else {
               msg = "<p style='color: red'>Mot de passe faible.</p>"
               navigate('index')
           }
           document.getElementById("msg").innerHTML = msg
       }catch (e){
           console.error(e)
           return {error: 'Error'}
       }

       window.onclick = function (event) {
           if (event.target === registerModalConfirm){
               registerModalConfirm.style.display = "none"
           }
       }
    }
}

window.registerController = new RegisterController()