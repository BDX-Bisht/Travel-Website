var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
})

typewriter
    .typeString('A simple yet powerful native javascript')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Lorem ipsum dolor sit amet.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Cnsectetur adipisicing elit. Dipanshu.')
    .pauseFor(1000)
    .deleteAll()
    .start();

$(".bdx_slider").slick({
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    speed: 300,
    arrows: true,
    infinite:false,
    slidesToShow: 5,
    responsive: [
        {breakpoint: 1024,settings: {slidesToShow: 4,arrows:false,dots: true,},},
        {breakpoint: 768,settings: {slidesToShow: 3,arrows:false,dots: true,},},
        {breakpoint: 550,settings: {slidesToShow: 1,arrows:false,dots: true,},},
    ],
});
$(".bdx_slider_2").slick({
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    speed: 300,
    arrows: true,
    infinite:false,
    slidesToShow: 4,
    responsive: [
        {breakpoint: 1024,settings: {slidesToShow: 3,arrows:false,dots: true,},},
        {breakpoint: 768,settings: {slidesToShow: 2,arrows:false,dots: true,},},
        {breakpoint: 500,settings: {slidesToShow: 1,arrows:false,dots: true,},},
    ],
});
$(".bdx_slider_3").slick({
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    speed: 300,
    arrows: true,
    infinite:false,
    slidesToShow: 4,
    responsive: [
        {breakpoint: 1024,settings: {slidesToShow: 3,arrows:false,dots: true,},},
        {breakpoint: 768,settings: {slidesToShow: 2,arrows:false,dots: true,},},
        {breakpoint: 500,settings: {slidesToShow: 1,arrows:false,dots: true,},},
    ],
});

$(".test_slider").slick({
    arrows:false,
    speed: 300,
    dots:true,
    slidesToShow: 3,
    responsive: [
        {breakpoint: 992,settings: {slidesToShow: 2,arrows:false,dots: true,},},
        {breakpoint: 650,settings: {slidesToShow: 1,arrows:false,dots: true,},},
    ],
});

$(".menu_opner").click(function(){
    $(".header2").toggleClass("active")
    let hasmenuClass = $(".header2").hasClass("active")
    if(hasmenuClass){
        $(".poijiojijfwf").addClass("fa-xmark")
        $(".poijiojijfwf").removeClass("fa-bars")
    }else{
        $(".poijiojijfwf").removeClass("fa-xmark")
        $(".poijiojijfwf").addClass("fa-bars")
    }
})

$(".read_moreBtn").click(function(){
    let iuytrftyuiolk = $(".iuytrftyuiolk").hasClass("active")
    if(iuytrftyuiolk){
        $(this).text("Read More")
        $(".iuytrftyuiolk").removeClass("active")
    }else{
        $(this).text("Read Less")
        $(".iuytrftyuiolk").addClass("active")
    }
})

let mybutton = document.querySelector(".bottomButton");
let whatsappButotn = document.querySelector(".whatsappButotn");

window.onscroll = function() {scrollFunction();ItiniearyFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.classList.add("active")
    whatsappButotn.classList.add("active")
  } else {
    mybutton.classList.remove("active")
    whatsappButotn.classList.remove("active")
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click',topFunction)

let sections = document.querySelectorAll(".egfwbgkwkbubu")
let navLinks = document.querySelectorAll(".fgyuioijhbvijh a")

function ItiniearyFunction (){
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 170;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector(`.fgyuioijhbvijh a[href*='${id}']`).classList.add("active");
            })
        }
    })
}


function EnquiryModalOpen(img,description,price,c_price){
    $("#enquiry_modal").modal("show")
    $("#enuiry_desc").text(description)
    $("#enquiryModalImg").attr("src",img)
    $("#modalPrice").text(`INR ${price}`)                  
    $("#modalPriceCut").text(`INR ${c_price}`)
}