const year = () => {
  const max = new Date().getUTCFullYear();
  const year = _.range(2016, max + 1);
  console.log(year);
}
year()