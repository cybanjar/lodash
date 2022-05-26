const user = {
    "data": {
        "attactments": [
            {
                "berkasId": 142550,
                "category": "ktp",
                "url": "https://cdn.quasar.dev/img/avatar.png"
            },
            {
                "berkasId": 142551,
                "category": "foto",
                "url": "https://cdn.quasar.dev/img/boy-avatar.png"
            }
        ],
        "user": {
            "email": "syamsul@gmail.com",
            "userId": 691315
        }
    },
    "code": 200,
    "message": "Success get detail data"
}

// function dataUser() {
//     const attact = user.data.attactments
//     const log = _.find(attact, poke => poke.category === 'foto')
//     console.log(log);
// }
// dataUser()

const attact = user.data.attactments
// const log = _.find(attact, function(id) { return id.category ===  'ktp'})
const log = _.find(attact, { category:  'ktp'})
console.log(log)