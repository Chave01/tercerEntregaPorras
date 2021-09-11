const toggleButton = document.querySelector('.darkbtn');

$(".darkbtn").on ("click", () =>{
   

if (localStorage.getItem("estilo")== "dark"){
    lighttheme ()
   
}else{
        darktheme()
      }




})



const darktheme = () => {
    $("nav").css ( "background-color", "black")
    $("a").css ( "color", "white")
    $("footer").css ({

   
        "background-color": "black",
        "color": "white",
     

    } )

    $("h1").css ( "color", "white")
    $("h2").css ( "color", "white")
    $("p").css ( "color", "white")
    $("body").css ( "background-color", "black")
    $(".Section2").css ( "background-color", "black")
    $(".Section3").css ( "background-color", "black")
    $("svg").css ( "color", "black")



localStorage.setItem("estilo", "dark")

}

const lighttheme = () => {

$("nav").css ( "background-color", "white")
$("a").css ( "color", "#6c757d")
$("footer").css ({


    "background-color": "#e5e5e5",
    "color": "black",
 

} )

$("h1").css ( "color", "black")
$("h2").css ( "color", "black")
$("p").css ( "color", "white")

$(".Section2").css ( "background-color", "#f4511e")
$(".Section3").css ( "background-color", "white")
$(".Section3").css ( "background-color", "white")
$("#parrafo").css ( "color", "#6c757d")


localStorage.setItem("estilo", "light")
}
