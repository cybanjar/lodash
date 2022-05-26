const data = {
    "code": 200,
    "data": {
        "merchants": [
            {
                "idMerchant": 466,
                "merchantName": "Merchant Non RA",
                "userId": 691198,
                "userEmail": "jumatan+5720+@gmail.com",
                "userPhone": "+6289123455720",
                "attachments": {
                    "passport": {
                        "id": 142091,
                        "uuid": "dc308920-5f18-11ec-aef9-07003e4e0e8a",
                        "privyId": null,
                        "name": "Screen Shot 2021-12-02 at 16.55.21.png",
                        "url": "https://core.privydev.id/attachment/2021/12/17/dbef34a4-5f18-11ec-8ad9-6e9454d58bc8.png?Expires=1643126685&Signature=abjYaphFtJlp%2BNEdPxRnARv1kS3ARj6zwp39XPJzWAFCg0tUG6541ltBPSDwr1RZqvR0%2Fh53d%2FN2B5QF%2FWksacLlqGoBTiLVz1G7fF2F%2BDdsIxyZpZv1HkZZSbWB1Er0b92dcjf89X5xI%2BVHPhdK1LmhKVUpqSyrBtpsvxdvk3LQtxnf7IDDpFd19ATuwvRvj%2B%2B6%2BWqE7T9Ow5IJ3aVW%2FywhSFzAuB9kT3mCfNulCPmW6TllFhLKWH7u1LbNlt%2FHGlXQigpD3Q9SAn3ew5fdZKPA4Zl48kOt%2B2zxbtNShqwmpMsi0RXaP1p0cd%2BWrcEm43qCSACYpEuEcHRUNpnYpQ%3D%3D",
                        "caption": null,
                        "description": null,
                        "type": "image/png",
                        "size": 204247,
                        "category": {
                            "data": {
                                "id": 10,
                                "name": "Passport",
                                "slug": "passport",
                                "description": "image passport",
                                "mimetypes": "image/png,image/jpeg"
                            }
                        }
                    },
                    "selfie": {
                        "id": 142086,
                        "uuid": "4c755590-5f14-11ec-9fa3-4b7d944e2a50",
                        "privyId": null,
                        "name": "selfie ariana.jpeg",
                        "url": "https://core.privydev.id/attachment/2021/12/17/4c215888-5f14-11ec-9322-6e9454d58bc8.jpeg?Expires=1643126685&Signature=gLloONeC2yyEibloISbLGTSJ%2BNP3Q3PS9SxgXT10gkG7zvoUH3%2F6taZ5PnnwrEQiAr0fYMpe35sJ8Nx9IffRiskPQUVO%2FLMk1nOWzaBAB0h8CA4Un50lNZ5IwCaGJY4haaJRkAPPrIwL1XmwEmERGV0dT9AlfydSKx1P2kRllffXu%2BW8iCqVU1L3j6dCms4733d2TntE1xeYviDX703VSN1RsAMa4JU3tgGHQDvDiVSfuV5ulrMaKwC63%2BBhCc%2B5ri0cuI%2B8F9FX9QqGkF7o7q6ilOsUxJDUM7Tp0wCgVw6ryOoxhx1pc4va1UCh%2B4MNwJW8Dr%2BS6yJcQAnO%2BZhF2Q%3D%3D",
                        "caption": null,
                        "description": null,
                        "type": "image/jpeg",
                        "size": 63269,
                        "category": {
                            "data": {
                                "id": 6,
                                "name": "Berkas file image foto",
                                "slug": "foto",
                                "description": null,
                                "mimetypes": "image/png,image/jpeg"
                            }
                        }
                    }
                },
                "areaVersion": "v1"
            }
        ],
        "meta": {
            "total": 1,
            "page": 1,
            "per_page": 2
        }
    },
    "message": "OK"
}

const parse = data.data.merchants[0]
const result = _.get(parse, ('attachments.passport'))
console.log(result)

// const users = {
//     'barney': { 'age': 36, 'active': true },
//     'fred': { 'age': 40, 'active': false },
//     'pebbles': { 'age': 1, 'active': true }
// }

// const user = _.findLastKey(users, { 'age': 36 })
// console.log(user)