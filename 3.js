let longestCountryName = (countryNames) => {
    let longestName = ""
    for(let i = 0; i < countryNames.length; i++){
        let currentName = countryNames[i]
        if(currentName.length > longestName.length){
            longestName = currentName;
        }
    }
    return longestName;
}

console.log(longestCountryName(["India","Bhutan","Pakistan","Nepal","Sri Lanka","United States of America"]))