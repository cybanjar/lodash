fetch("../data/merchants.json")
.then(response => {
   return response.json();
})
.then(data => {
    const newArr = data.data.map(v => ({...v, isActive: false}))
    const mapping = _.map(data.data, 'merchantName')
    console.log(mapping)
});

// const newArr = [
//     {name: 'eve'},
//     {name: 'john'},
//     {name: 'jane'}
//   ].map(v => ({...v, isActive: true}))