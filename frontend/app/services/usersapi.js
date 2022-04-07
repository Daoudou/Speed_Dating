class userApi{
    constructor() {
        this.api = "http://localhost:3000"
    }

AddTokenHeader(jwt){
    return new Headers({'Accept'        : 'application/json',
                           'Authorization' : 'Bearer ' + jwt,
    'Content-Type'  : 'application/json'})
}

    myFetch(url, body){
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

    async myFetchGet(url) {
        return new Promise((resolve, reject) => {
            fetch(`${this.api}/${url}`)
                .then(r => {
                    if (r.status !== 200) {
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


    createUsers(body){
        return this.myFetch(`users/create`,body)
    }

    loginUsers(body){
        return this.myFetch(`users/login`,body)
    }

    createPersonneInfos(body){
        return this.myFetch(`infos/infosAdd`,body)
    }

    createDate(body){
        return this.myFetch(`dating/datingAdd`,body)
    }

    getInfos(id){
        return this.myFetchGet(`infos/infoId/${id}`)
    }

    getInfosList(){
        return this.myFetchGet('infos/infos')
    }

    getDates(){
        return this.myFetchGet('dating/')
    }

    getUser(id){
        return this.myFetchGet(`users/usersId/${id}`)
    }

}