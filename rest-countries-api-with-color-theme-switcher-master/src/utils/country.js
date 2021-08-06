export function getConvertedPopulation(population) {
  let str = population.toString();
  const strArr = [];
  // slice first last three chars
  strArr.push(str.slice(-3));
  str = str.substring(0, str.length - 3);
  return splitStrToArr(str, strArr).join(",");
}

function splitStrToArr(name, arr, charLength) {
  if (name.length === 0) {
    return arr;
  }

  arr.unshift(name.slice(-2));

  if (name.length <= charLength) {
    return arr;
  }

  return splitStrToArr(name.substring(0, name.length - 2), arr, charLength);
}

export function getRegionsFromCountires(countries) {
  return countries
    .reduce(
      (regions, country) =>
        regions.includes(country.region)
          ? regions
          : [...regions, country.region],
      []
    )
    .filter((region) => !!region);
}
