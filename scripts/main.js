const DATEINPUT=document.getElementById("dateInput")
DATEINPUT.setAttribute("min",new Date().toLocaleDateString('en-ca'))
DATEINPUT.addEventListener("change",(ev)=>{
    if((ev.target.value).match(/\d{4}-\d{2}-\d{2}/)){
        let freeTables=Math.round(Math.random()*10)
        console.log(document.querySelector(".status .free"))
        document.querySelector(".status .free").innerText=freeTables+" free tables"
        document.querySelector(".status .text").innerText=freeTables?"We will be glad if you honor us in our restaurant":"We are sad that there are no tables on this day but you can book another day"
        document.querySelector(".status").style.display="block"
    }
})