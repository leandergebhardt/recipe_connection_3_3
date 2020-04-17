const zipCode = require('german-zip-codes');
var myDistrict = zipCode.getDistrictsByZipCode("12459");
console.log(myDistrict);
