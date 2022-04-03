function convertToRoman(num) {
  let j= num;
  let l = num.toString().length
  let po = Math.pow(10,l-1)
  const arr=[]
  let temp;
  while(po>1)
  {
     temp= parseInt(j/po);
    arr.push(temp)
    j=j%po;
    temp = j
    po/=10
  }
  arr.push(num%10)
  const chiffre={1:'I',5:'V',10:'X',50:'L',100:'C',500:'D',1000:'M'}
  let chaine =[]
for(let j=0;j<arr.length;j++)
{
  let st=""
  if(arr[j]<4)
  {
    for(let i=0;i<arr[j];i++)
    {
      st+=chiffre[Math.pow(10,(arr.length-j-1))]
    }
    console.log("4")
  }
  else if(arr[j]==4)
  {
    st+=chiffre[Math.pow(10,(arr.length-j-1))]+chiffre[5*Math.pow(10,(arr.length-j-1))]
    console.log(arr.length-j-1)
  }
  else if(arr[j]==5)
  {
    st+=chiffre[5*Math.pow(10,(arr.length-j-1))]
  }
  else if(arr[j]>5 && arr[j]<9)
  {
    st+=chiffre[5*Math.pow(10,(arr.length-j-1))]

    for(let i=0;i<arr[j]-5;i++)
    {
      st+=chiffre[Math.pow(10,(arr.length-j-1))]
    }
  }
  else if(arr[j]==9)
  {
    st+=chiffre[Math.pow(10,(arr.length-j-1))]+chiffre[Math.pow(10,(arr.length-j))]
  }
  chaine.push(st)
  st=""
}
return chaine.join("").split("").join("")
}
console.log(convertToRoman(9))
