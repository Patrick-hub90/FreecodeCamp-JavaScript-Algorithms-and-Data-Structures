function checkCashRegister(price, cash, cid) {
  const arr={}
  let tot=0
  const arri=[]
  for(let j=0;j<cid.length;j++)
  {
    arr[cid[j][0]]=cid[j][1]
    tot+=cid[j][1]
  }
  let as = [...Object.keys(arr)]
  let change;
  const array = {0.01:"PENNY",0.05:"NICKEL",0.1:"DIME",0.25:"QUARTER",1:"ONE",5:"FIVE",10:"TEN",20:"TWENTY",100:"ONE HUNDRED"}
  const monnaie = [...Object.keys(array)].sort(function(a,b) {return b-a})
  let mon = cash-price;
  let a=cash-price
  const top=[]
  let t=0
  for(let i=0;i<monnaie.length;i++)
  {
    let nb=parseInt(mon/monnaie[i])*monnaie[i]
    let quantite = arr[array[monnaie[i]]]
         console.log(mon)
    if(nb>0 && quantite>0 && mon>0.0000001)
    {
      top.push([array[monnaie[i]],nb<quantite?nb:quantite]);
      t=nb<quantite?nb:quantite;
      arri.push(array[monnaie[i]])
 
    }
    mon=mon-t+0.000000000000005
    t=0
  }
  const dict={}
  if(mon<=0.00000001 && tot>a)
  {
    dict["status"]="OPEN"
    dict["change"]=top
  }
  else if(mon<=0.00000001 && tot==a)
  {
    dict["status"]="CLOSED"

      for(let i=0;i<as.length;i++)
      {
        if(arri.indexOf(as[i])==-1)
        {
          
          top.push([as[i],0])
        }
      }
    dict["change"]=top
    
  }
  else 
  {
      dict["status"]="INSUFFICIENT_FUNDS"
      dict["change"]=[]

  }
  return dict;
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
