class userApi{
    constructor() {
        this.api = "http://localhost:8080/users"
    }

    myFetch(url){
        return new Promise(((resolve, reject) =>{
            fetch(`${this.api}/${url}`)
                .then(response => {
                    if (response.status !== 200){
                        reject(response.status)
                    } else {
                        resolve(response.json())
                    }
                })
                .catch(error => reject(error))
        }))
    }

    createUsers(firstName, lastName,
                pseudo, email, password,
                sexe, birthdate){
        return this.myFetch(`${firstName}/${lastName}/${pseudo}/${email}/${password}/${sexe}/${birthdate}`)
    }

    getUsers(email,password){
        return this.myFetch(`${email}/${password}`)
    }

}