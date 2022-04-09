class infosApi {
    constructor() {
        this.api = "http://localhost:3000"
    }

    AddTokenHeader(jwt){
        return new Headers({'Accept'        : 'application/json',
            'Authorization' : 'Bearer ' + jwt,
            'Content-Type'  : 'application/json'})
    }

    myFetchInfosPost(url, body){
        // console.log(`userApi.myFetch(${this.api}/${url}, ${JSON.stringify(body)})`)
        return new Promise(((resolve, reject) =>{
            fetch(`${this.api}/${url}`,{
                method: 'POST',
                headers: this.AddTokenHeader(sessionStorage.getItem('Auth')),
                body: JSON.stringify(body)
            })
                .then(async response => {
                    if (response.status !== 200) {
                        reject(await response.text())
                    } else {
                        resolve(response.text())
                    }
                })
                .catch(error => reject(error))
        }))
    }

    async myFetchInfosGet(url) {
        return new Promise((resolve, reject) => {
            fetch(`${this.api}/${url}`)
                .then(r => {
                    if (r.status !==200) {
                        reject(r.status)
                    } else {
                        resolve(r.json())
                    }
                })
                .catch(
                    err => reject(err)
                );
        })
    }

    createPersonneInfos(body){
        return this.myFetchInfosPost(`infos/infosAdd`,body)
    }

    getInfos(id){
        return this.myFetchInfosGet(`infos/infoId/${id}`)
    }

    getInfosList(){
        return this.myFetchInfosGet('infos/infos')
    }

}