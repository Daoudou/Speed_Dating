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

       try {
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
               console.log('201')
               navigate("index")
           }
       }catch (e){
           console.error(e)
           return {error: 'Oula'}
       }
    }

    async validatePassword(){
        var msg;
        const str = $("#registerPassword").value
        if (str.match(/[0-9]/g) && str.match(/[A-Z]/g) && str.match(/[a-z]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >=5){
            msg = "<p style='color:green'> Mot de passe fort. </p>"
        }
        else
            msg = "<p style='color: red'>Mot de passe faible.</p>"
        document.getElementById("msg").innerHTML = msg
    }

}

window.registerController = new RegisterController()