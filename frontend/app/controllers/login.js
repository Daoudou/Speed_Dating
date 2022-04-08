class LoginController extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
    }

    async loginUsers() {
            const emailLogin = $("#loginEmail").value
            const passwordLogin = $("#loginPassword").value
            const modalLogin = $("#loginModal")
            const loginCloseBTN = $("#loginModalBtnClose")
            const modalLoginError = $("#loginModalError")
            const modalLoginErrorBtnClose = $("#loginModalErrorBtnClose")

        if (emailLogin !== undefined && passwordLogin !== undefined){
            try {
                const login = await this.model.loginUsers({'email': emailLogin, 'password': passwordLogin})
                if (!login) {
                    console.log('401')
                    modalLoginError.style.display = "block"
                    modalLoginErrorBtnClose.onclick = function () {
                        modalLoginError.style.display = "none"
                        navigate('index')
                    }
                } else {
                    modalLogin.style.display = "block"
                    loginCloseBTN.onclick = function () {
                        modalLogin.style.display = "none"
                        navigate('accueil')
                    }
                    console.log('201')
                    console.log(login)
                    sessionStorage.setItem('Auth',JSON.stringify(login))
                }
            }   catch (e) {
                console.error(e)
            }

            window.onclick = function (event) {
                if (event.target === modalLogin){
                    modalLogin.style.display = "none"
                }
            }
        }
    }
}

window.loginController = new LoginController()
