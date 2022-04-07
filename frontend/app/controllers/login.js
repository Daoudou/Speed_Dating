class LoginController extends BaseController {
    constructor() {
        super();
        this.model = new Usermodel()
    }

    async loginUsers() {
            const emailLogin = $("#loginEmail").value
            const passwordLogin = $("#loginPassword").value
            const modalLogin = $("#loginModal")
            const modalLoginError = $("#loginModalError")
            const loginCloseBTN = $("#loginModalBtnClose")
            const loginCloseBTNError = $("#loginModalErrorBtnClose")
            console.log(emailLogin)
            console.log(passwordLogin)
            try {
                const login = await this.model.loginUsers({'email': emailLogin, 'password': passwordLogin})
                if (!login) {
                    console.log('401')
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

window.loginController = new LoginController()
