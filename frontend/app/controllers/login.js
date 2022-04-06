class LoginController extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
    }

    async loginUsers() {
            const emailLogin = $("#loginEmail").value
            const passwordLogin = $("#loginPassword").value
            console.log(emailLogin)
            console.log(passwordLogin)
            try {
                const login = await this.model.loginUsers({'email': emailLogin, 'password': passwordLogin})
                if (!login) {
                    console.log('401')
                } else {
                    console.log('201')
                }
            }   catch (e) {
                console.error(e)
            }

    }
}

window.loginController = new LoginController()