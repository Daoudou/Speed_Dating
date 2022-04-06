class userApi{
    constructor() {
        this.api = "http://localhost:3000/users"
    }


    myFetch(url, body){
        console.log(`userApi.myFetch(${this.api}/${url}, ${JSON.stringify(body)})`)
        return new Promise(((resolve, reject) =>{
            fetch(`${this.api}/${url}`,{
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then(async response => {
                    if (response.status !== 200) {
                        reject(await response.text())
                    } else {
                        resolve(response.status)
                    }
                })
                .catch(error => reject(error))
        }))
    }

    createUsers(body){
        return this.myFetch(`create`,body)
    }

    loginUsers(body){
        return this.myFetch(`login`,body)
    }


}