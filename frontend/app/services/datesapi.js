class datesApi {
    constructor() {
        this.api = "http://localhost:3000"
    }

    AddTokenHeader(jwt){
        return new Headers({'Accept'        : 'application/json',
            'Authorization' : 'Bearer ' + jwt,
            'Content-Type'  : 'application/json'})
    }

    myFetchDate(url, body){
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

    myFetchUpdate(url,body){
        // console.log(`userApi.myFetch(${this.api}/${url}, ${JSON.stringify(body)})`)
        return new Promise(((resolve, reject) =>{
            fetch(`${this.api}/${url}`,{
                method: 'PUT',
                headers: this.AddTokenHeader(sessionStorage.getItem('Auth')),
                body: JSON.stringify(body)
            })
                .then(async response => {
                    if (response.status !== 200) {
                        reject(response.status)
                    } else {
                        resolve(await response.text())
                    }
                })
                .catch(error => reject(error))
        }))
    }


    myFetchDelete(url){
        // console.log(`userApi.myFetch(${this.api}/${url}, ${JSON.stringify(body)})`)
        return new Promise(((resolve, reject) =>{
            fetch(`${this.api}/${url}`,{
                method: 'DELETE',
                //headers: this.AddTokenHeader(sessionStorage.getItem('Auth')),
            })
                .then(async response => {
                    if (response.status !== 200) {
                        reject(response.status)
                    } else {
                        resolve(await response.text())
                    }
                })
                .catch(error => reject(error))
        }))
    }

    createDate(body){
        return this.myFetchDate(`dating/datingAdd`,body)
    }

    getDates(){
        return this.myFetchGet('dating/')
    }

    getDateById(id){
        return this.myFetchGet(`dating/deleteDate/${id}`)
    }

    deleteDateList(id){
        return this.myFetchDelete(`dating/deleteDate/${id}`)
    }

    updateDateList(id,body){
        return this.myFetchUpdate(`dating/${id}`,body)
    }

}