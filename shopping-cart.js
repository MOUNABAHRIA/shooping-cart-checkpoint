var cartvisible = false
if (DocumentFragment.readyState=='loading'){
    Document.addEventListener('DOMCententLoaded', ready)
}else{
    ready()
}
function ready(){
    
 var buttonsDeleteItem=document.getElementsByClassName('btn-eliminate')
 for(var i =0; i < buttonsDeleteItem.length; i++){
 var button = buttonsDeleteItem[i]
 button.addEventListener('click', removeItemCart)
 }
 var buttonsSumQuantity = document.getElementsByClassName('fa-plus')
 console.log(buttonsSumQuantity )
 for(var i =0; i < buttonsSumQuantity.length; i++){
    var button= buttonsSumQuantity[i]
    button.addEventListener('click', sumQuantity)
 }
 
 var buttonssubtractQuantity = document.getElementsByClassName('subtract-amount')
  console.log(buttonssubtractQuantity)
  for(var i =0; i < buttonssubtractQuantity.length; i++){
     var button= buttonssubtractQuantity[i]
     button.addEventListener('click', subtractAmount)
 }
 var buttonhearts = document.getElementsByClassName('fa-heart')
  console.log(buttonhearts)
  for(var i =0; i < buttonhearts.length; i++){
     var button= buttonhearts[i]
     button.addEventListener('click', heartsbtn)
 }
 
function heartsbtn(event){
   
      var buttonClicked =event.target
      buttonClicked.style.color='red';
    
}
 function removeItemCart(event){
    var buttonClicked =event.target
    buttonClicked.parentElement.remove()
   
    apdate();
   
 }
 function apdate(){
    var cartcontainer = document.getElementsByClassName('cart')[0];
    console.log(cartcontainer)
    var cartItems = cartcontainer.getElementsByClassName('cart-item')
    console.log(cartItems )
    var  total = 0
    for(var i = 0; i<cartItems.length; i++){
        var item= cartItems[i]
        var priceElement = item.getElementsByClassName('cart-item-price')[0]
        console.log(priceElement );
        var price = parseFloat(priceElement.innerText.replace('$','').replace('.',''))
       console.log(price);
       var quantityItem =item.getElementsByClassName('cart-item-quantity')[0];
       console.log(quantityItem)
       var quantity = quantityItem.value
       console.log(quantity)
       total= total+(price*quantity)
       console.log(total)
    }
     total=Math.round(total*100)/100;
     console.log(total)

    //  document.getElementsByClassName('carrito-percio-total')[0].innerText = total
    document.getElementsByClassName('cart-price-total')[0].innerText= '$' + total.toLocaleString("es")+',00'
 }
 
 
function sumQuantity(event){
  var buttonClicked = event.target
  var selector =buttonClicked.parentElement ;
   var currentquantity = selector.getElementsByClassName('cart-item-quantity')[0].value; 
   console.log(currentquantity)
   currentquantity++
    console.log(currentquantity)
     selector.getElementsByClassName('cart-item-quantity')[0].value=currentquantity
     apdate()
}
function subtractAmount(event){
  var buttonClicked = event.target
  var selector =buttonClicked.parentElement 
  var currentquantity= selector.getElementsByClassName('cart-item-quantity')[0].value
  console.log(currentquantity)
  currentquantity--
  if(currentquantity>=1){
   selector.getElementsByClassName('cart-item-quantity')[0].value= currentquantity
   apdate()
  } 

  
}
}
const button2 = document.querySelector('.btn-payer')
function alertbtn() { 
    alert('cart finished')}
button2.addEventListener("click", alertbtn)