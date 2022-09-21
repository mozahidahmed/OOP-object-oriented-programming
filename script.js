




document.getElementById("add-button").addEventListener('click', function(){


  const inputValue=document.getElementById("product").value;
  const inputQuantity=document.getElementById("quantity").value;
  const inputMIlkValue=document.getElementById("milk").value;
  const inputCreamValue=document.getElementById("cream").value;
  const inputLatteValue=document.getElementById("latte").value;
  const depositOutput = document.getElementById("deposit-output");

 const price=Number(inputMIlkValue)+Number(inputCreamValue)+Number(inputLatteValue)
 const total=price*inputQuantity




  if(inputValue == ""){alert('please write somting')}
  if(inputMIlkValue == ""){alert('please write somting')}
  if(inputCreamValue == "" ){alert('please write somting')}
  if(inputLatteValue == ""){alert('please write someting')}


  else {

      const mainContainer=document.getElementById("document-container");
      const tableContainer=document.createElement("tr");
     
      tableContainer.innerHTML=`
      <td>${inputValue}</td>
      <td>${inputMIlkValue}</td>
      <td>${inputCreamValue}</td>
      <td>${inputLatteValue}</td>
      <td>${inputQuantity}</td>
      <td>${total}</td>
    
      
     

      
      `;

      

     


      const totalDeposit =total;
      depositOutput.innerText = totalDeposit;

    mainContainer.appendChild(tableContainer);


    
   document.getElementById("product").value=""
   document.getElementById("milk").value=""
   document.getElementById("cream").value=""
   document.getElementById("latte").value=""
   document.getElementById("quantity").value=""
  }



  
  })



