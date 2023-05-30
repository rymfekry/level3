scrolotop=document.querySelector(".scroll-top")
scrollbar=document.querySelector(".scroll-bar")
links=document.querySelectorAll(".nav-link")


links.forEach(function(item) {
    item.addEventListener("click",function(e){
        e.preventDefault()
        let targetelement = document.getElementById(item.dataset.target)
        // console.log(targetelement);
        let position = targetelement.offsetTop-(targetelement.clientHeight)
        window.scrollTo({
            top: position
        })
        
    })

    
});
// scrolltop.style.display="block"

window.addEventListener("scroll",function(){
    let mainhtght= ( document.documentElement.scrollHeight 
        - document.documentElement.clientHeight)
    let percentage=document.documentElement.scrollTop /mainhtght
   
    // console.log(percentage*100);
    scrollbar.style.width=`${percentage*100}%`

    scrollkotop()
})



scrolotop.addEventListener("click",function(){
    window.scrollTo({
        top:0
    })
})

function scrollkotop(){
    if(window.scrollY >500){
        scrolotop.style.display="block"
    }
    else{
        scrolotop.style.display="none"
    }
}
// *********************************task22222222222222222222222222222222**********************************************
let textcontainer=document.querySelectorAll(".number-container p")
let colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

textcontainer.forEach(function(item){
    let number=+item.textContent
    let incrasenumber=parseInt((5/100)*number)
    
    item.textContent=0
    
    let counter=setInterval( function()  {
        
        item.textContent=+item.textContent +incrasenumber
        
        if(+item.textContent>=number){
            item.parentElement.style.backgroundColor=getcolor()
            item.textContent=number
            clearInterval(counter)
        }
    },70);

})

function getcolor(){
    let color =""
    for(let i=0 ;i<6 ;i++){   
    
    let newcolor=parseInt(Math.random() * colors.length)
     color+= colors[newcolor]

    }

    return"#" + color
}