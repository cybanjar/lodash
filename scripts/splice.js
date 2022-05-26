fetch("../data/merchants.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const items = data.data
        const addIsActive = items.map(v => ({ ...v, isActive: false }))
        const newItem = [
            {
                idMerchant: 167,
                merchantName: '1231',
                isActive: true
            }
        ]
        for (let i = 0; i < addIsActive.length; i++) {
            const row = addIsActive[i]
            const id = addIsActive[i]['idMerchant']
            const isSelected = addIsActive[i]['isActive']

            if(newItem[0]['isActive']) {
                console.log('ada')
            } else {
                console.log('no')
            }

        }

    });