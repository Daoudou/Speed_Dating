class LoginController extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
    }

    async loginUsers() {
        try {
            const emailLogin = $("#loginEmail").value
            const passwordLogin = $("#loginPassword").value
            console.log(emailLogin)
            console.log(passwordLogin)
            if (emailLogin !== "" || passwordLogin !== "") {
                const login = await this.model.loginUsers({'email': emailLogin, 'password': passwordLogin})
                if (!login) {
                    console.log('401')
                } else {
                    console.log('201')
                    navigate("index")
                }

            }
        }catch (e) {
            console.error(e)
            return {error: 'Oula'}
        }
    }
}

window.loginController = new LoginController()