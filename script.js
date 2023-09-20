const fetchData = fetch("https://jsonplaceholder.typicode.com/users")

let tableData = document.querySelector('tbody')

   

fetchData.then((data)=>{
  console.log(data)
  return data.json()

}).then((result)=>{
  result.map((item)=>{
   console.log(item)
   console.log( item.name)
//    console.log( item.address.city)
let btn = document.createElement('button')
  let newRow = document.createElement('tr')
  let newData1 = document.createElement('td')
  let newData2 = document.createElement('td')
  let newData3 = document.createElement('td')
  let newData4 = document.createElement('td')
  let newData5 = document.createElement('td')
  let newData6 = document.createElement('td')
  let newData7 = document.createElement('td')
  let newData8 = document.createElement('td')

  btn.style.backgroundColor = " rgb(202, 104, 230)"
  
 
  

  tableData.appendChild(newRow)
  newRow.appendChild(newData1)
  newRow.appendChild(newData2)
  newRow.appendChild(newData3)
  newRow.appendChild(newData4)
  newRow.appendChild(newData5)
  newRow.appendChild(newData6)
  newRow.appendChild(newData7)
  newRow.appendChild(newData8)
  newData8.appendChild(btn)
  

  newData1.innerText = item.id
  newData2.innerText = item.name
  newData3.innerText = item.username
  newData4.innerText = item.email
  newData5.innerText = item.address.street
  newData6.innerText = item.address.suite
  newData7.innerText = item.address.city
  
  btn.innerText = "delete"
  btn.addEventListener('click',()=>{
    newRow.remove()
  })

  
  })

  
})