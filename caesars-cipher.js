function rot13(str) {
  const lettre=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const arr = str.split('')
  for(let i=0;i<arr.length;i++)
  {
    if(lettre.indexOf(arr[i])!=-1)
    {
        let t = (lettre.indexOf(arr[i])+13)%26
        arr[i]=lettre[t]

    }
  }

  return arr.join('')
}

rot13("SERR PBQR PNZC");
