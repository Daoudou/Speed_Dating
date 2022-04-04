class IndexController extends BaseController{
    constructor() {
        super();
        this.model = new Usermodel()
        this.loginEmailElem = $("#loginEmail")
        this.loginPasswordElem = $("#loginPassword")
    }


    async getUsers(email,password){
        const emailLogin = this.loginEmailElem.value
        const passwordLogin = this.loginPasswordElem.value

        if (emailLogin !== "" || passwordLogin !== "" ){
            await this.model.getUsers(emailLogin, passwordLogin)
        }

    }

}

window.indexController = new IndexController()