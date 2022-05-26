function search(val) {
    alert(`word ${val}`);
}

fetch("../data/merchants.json")
.then(response => {
   return response.json();
})
.then(data => {
    const active = _.filter(data.data, {'merchantName': 'aa'})
    console.log(active)
});
