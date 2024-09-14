const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;
const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const footer = document.querySelector('main footer');
const result = document.querySelector('#result');
const description = document.querySelector('#description');

amount.addEventListener("input", (event) =>{
  const character = /\D+/g;
  amount.value = amount.value.replace(character, "");
  
});


form.onsubmit = (event) =>{
  event.preventDefault();
  const opcao = currency.value;
  
  switch (opcao) {
    case "USD":
      converterMoeda(amount.value, USD, "US$");
      break;
    case "EUR": 
     converterMoeda(amount.value, EUR, "€");
      break;
      
    case "GBP":
      converterMoeda(amount.value, GBP, "GBP");
      break;
  }
  
}

function converterMoeda(amount,preco,symbol){
  try { 
    description.textContent = `${symbol} 1 = ${formatarMoeda(preco)}`
    let total = amount * preco 
    total = formatarMoeda(total).replace("R$", "")

    result.textContent = `${total} reais` ;
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error);
    alert("Erro ao converter a moeda!, tente novamente mais tarde");
    footer.classList.remove("show-result")
  }
  
}

function formatarMoeda(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}