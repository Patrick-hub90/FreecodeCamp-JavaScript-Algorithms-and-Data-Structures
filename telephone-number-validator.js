function telephoneCheck(str) {
  let regex = /(^[1]?\s?(\(\d{3}\)\s?\d{3}-\d{4}|\d{3}[-\s]\d{3}[-\s]\d{4}))|^\d{10}$/
  //
   console.log(regex.test(str));
   return regex.test(str)
}

telephoneCheck("27576227382");
