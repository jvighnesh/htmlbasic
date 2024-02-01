const productContainer = document.getElementById("products")
const search = document.getElementById("search")
const productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    const enteredValue = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1)
    {
        const productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display = "none"
        }
        else{
            productlist[count].style.display = "block"
        }
    }
})