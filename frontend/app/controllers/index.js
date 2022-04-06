class IndexController extends BaseController{
    constructor() {
        super();
        this.model = new Usermodel()
        this.launch()
    }

    async launch(){
        const groupUser = $("#buttonUser")
        groupUser.style.visibility = "hidden"
    }


}

window.indexController = new IndexController()