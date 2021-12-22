

let supNode=document.getElementById("supele")
let showCartItemsContainer=document.getElementById("showContainer")
showCartItemsContainer.classList.add("shoes-section")

let cartImage=document.getElementById("cartImg")



function addToCart(element){
    
    let prevCount=supNode.textContent; 
    let currentCount=parseInt(prevCount)+1;
    supNode.textContent=currentCount;

    let cardItem=document.createElement("div")
    cardItem.classList.add("image-card")
    let imageEl=document.createElement("img");
  
    imageEl.src=element.children[0].src;
    imageEl.classList.add("longwalk-img")
    
    let para1=document.createElement("p");
    para1.textContent=element.children[1].textContent;
    let para2=document.createElement("p");
    para2.innerHTML=element.children[2].innerHTML;
    let para3=document.createElement("p");
    para3.textContent=element.children[3].textContent;

    let span1=document.createElement("span")
    span1.textContent="Size:"
    let span3=document.createElement("span");
    span3.textContent=span2.textContent
    let brEl=document.createElement("br")

    let buyBtn=document.createElement("button");
    buyBtn.textContent="Buy Now"

    buyBtn.classList.add("buy-button")


    cardItem.append(imageEl,para1,para2,para3,span1,span3,brEl,buyBtn);
    showCartItemsContainer.append(cardItem)
   
}


let span2=document.createElement("span")
function getValue(ele){  
    let value=ele.value   
    span2.textContent=value;       
}
  



