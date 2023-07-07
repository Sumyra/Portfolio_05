$(function(){
 
  let proDes = $(`.Product_Description`)
  let customerCare = $(`.customerCare`)
  proDes.click(function(){
    customerCare.toggle(300);  
  })
  proDes.click(function(){
    proDes.toggleClass("active");  
  })
  let cusRev = $(`.Customer_Review`)
  let customerCare2 = $(`.customerCare2`)

  cusRev.click(function(){
    customerCare2.toggle(300);  
  })
  cusRev.click(function(){
    cusRev.toggleClass("active");  
  })
  let addInfo = $(`.Additional_Information`)
  let customerCare3 = $(`.customerCare3`)

  addInfo.click(function(){
    customerCare3.toggle(300);  
  })
  addInfo.click(function(){
    addInfo.toggleClass("active");  
  })

 $("#banner").slick({
  arrows: false,
  dots: true,

 });
 $("#shop_details.bottom_img_slider").slick({
  slidesToShow:4,
  arrows: true ,
  prevArrow:'#shop_details.bottom_img_slider .arrows .leftArrows',
  nextArrow:"#shop_details.bottom_img_slider .arrows .rightArrows",



});
 $(".wrapper_slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 2,

 });

$(".latest_slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
})
$(".product_slider").slick({
  slidesToShow: 4,
  slidesToScroll:1,
  arrows: true,
  prevArrow:'#New_Product .arrows .leftArrows',
  nextArrow:"#New_Product .arrows .rightArrows",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
          infinite: true,
        }
    }
    
  ]


})
$(".Related_slider").slick({
  slidesToShow:4,
  arrows: true ,
  prevArrow:'#Related_Product .arrows .leftArrows',
  nextArrow:"#Related_Product .arrows .rightArrows",


responsive: [
  {
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 3,
      infinite: true,
    }
  },
  {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        infinite: true,
      }
  }
  
]
});
// shop_details page*//
$(' #shop_details .top_img_slider .img_card').slick({
  slidesToShow:1,
  slidesToScroll:1,
  arrows:false,
  asNavFor: ' #shop_details  .bottom_img_slider .img_card'
})
$("#shop_details .bottom_img_slider .img_card").slick({
  slidesToShow:5,
  slidesToScroll:1,
  asNavFor: ' #shop_details .top_img_slider .img_card ',
  centerMode: true,
  centerPadding: '0px',
  arrows: true ,
  prevArrow:'#shop_details .bottom_img_slider .arrows .leftArrows',
  nextArrow:"#shop_details .bottom_img_slider .arrows .rightArrows",
responsive: [
  {
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 3,
      infinite: true,
    }
  },
  {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        infinite: true,
      }
  }
  
]
});
   $(".countdown").countdown("2022/12/23 16:30:45" , function(e){
    let time = e.strftime("%D days %H:%M:%S");
     $(".countdown .days").html(e.strftime("%D"))
     $(".countdown .hours").html(e.strftime("%H"))
     $(".countdown .minutes").html(e.strftime("%M"))
     $(".countdown .sec").html(e.strftime("%S"))

   })
 $(".profile_slider").slick({
  slidesToShow: 4,
  slidesToScroll:1,
  arrows: true,
  prevArrow:'#profile .arrows .leftArrows',
  nextArrow:"#profile .arrows .rightArrows",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
          infinite: true,
        }
    }
    
  ]


 })
 $(".customise_slider").slick({
  dots: true,
  arrows: false,
 })
 $(".actor_slider").slick({
  dots: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
          infinite: true,
        }
    }
    
  ]

 })
$(".blog_slider").slick({
slidesToShow: 3,
slidesToScroll: 3,
 
  arrows : false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 9,
        infinite: true,
      }
    },
    {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
          infinite: true,
        }
    }
    
  ]


 })

})













