function palindrome(str) {
  str = str.toLowerCase().split(/[\()\_\/:,-\s\.]/).join("").split("")
  const arr = [...str];
  str.reverse()
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]!=str[i])
    {
      return false
    }
  }

  return true
}

console.log(palindrome("A man, a plan, a canal. Panama"));
