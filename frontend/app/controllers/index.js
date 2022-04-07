class IndexController extends BaseController{
    constructor() {
        super();
        this.model = new Usermodel()

    }

}

window.indexController = new IndexController()