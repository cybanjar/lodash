fetch("../data/merchants.json")
.then(response => {
   return response.json();
})
.then(data => {
    const mapping = _.map(data.data, 'merchantName')
    console.log(mapping)
});