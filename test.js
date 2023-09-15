let names= [
    "Soojung Bae Horrey",
    "Jimin Go Baba",
    "Dohee Kim Ho"
  ]
  
  let data = names.map((upper)=>upper.toUpperCase())
  console.log(data)
  
  let firstNames = names.map((item)=>item.split(' ')[0])
  console.log(firstNames)
  
  let initialOnly = names.map((item)=>{
    let splitName = item.split(" ");
    let initial = "";
    splitName.forEach((nameItem)=>(initial += nameItem[1]));
    return initial;
  })
  console.log(initialOnly)
  
  let includeA = names.filter((item)=>item.includes('a'));
  console.log(includeA)
  
  let doubleLetter =  names.filter((item) => {
      let splitName = item.split("");
      return splitName.some((letter, index) => letter == splitName[index + 1]);
    })
  
  console.log(doubleLetter)