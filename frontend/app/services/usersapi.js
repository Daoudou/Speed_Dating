class userApi{
    constructor() {
        this.api = "http://localhost:3000"
    }


    myFetch(url, body){
       // console.log(`userApi.myFetch(${this.api}/${url}, ${JSON.stringify(body)})`)
        return new Promise(((resolve, reject) =>{
            fetch(`${this.api}/${url}`,{
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
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

    createDateInfos(body){
        return this.myFetch(`infos/infosAdd`,body)
    }

    createDate(body){
        return this.myFetch(`dating/datingAdd`,body)
    }

}