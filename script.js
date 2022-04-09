$(function() {

    $(window).scroll(function() {
  
      var mass = Math.min(20, 1+0.005*$(this).scrollTop());
  
      $('.background-img h1').css('transform', 'scale(' + mass + ')');
      $('body').css('overflow-x','hidden')

      $('.background-img button').css('margin-top', '40px');
    });
  });

// $('.btn-primary').click(function(){

//   $('body').css('background-color',"red");
//   $('body').css('margin-top',"20px");
//   $('body').css('position',"relative");
//   $('body').css('z-index',"1");
  

// })

$('.view-offers').click(function(){
$('.bg-offers-popup').css('display',"flex")
$('body').css('height', "100%")
$('body').css('overflow-y','hidden')
})

$('.about-us').click(function(){
  $('.bg-aboutus-popup').css('display',"flex")
  $('body').css('height', "100%")
  $('body').css('overflow-y','hidden')
  })
  
$('.close').click(function(){
  $('.bg-offers-popup').css('display',"none");
  $('.bg-aboutus-popup').css('display',"none");
  $('body').css('height', "")
  $('body').css('overflow-y','')
})

  $('.carousel-card-button').click(function(){
    $('.popup-carousel').css("display","flex")
    $('body').css("overflow-y",'hidden' )
    $('.carousel-images').css("overflow-y","scroll")
    $('.carousel-control-prev').css("display","none")
    $('.carousel-control-next').css("display","none")
  
    // $('.popup-carousel').css("transition", ' transform 2s')
  })



$('.carousel-popup-close').click(function(){
  $('.popup-carousel').css('display',"none")
  $('body').css("overflow-y",'' )
  $('.carousel-control-prev').css("display","")
  $('.carousel-control-next').css("display","")

})



function sendMail(params){
  var tempParams= {
    from_name:document.getElementById('fromName').value,
    from_email: document.getElementById('fromEmail').value,
    subject: document.getElementById('subject').value,
    message:document.getElementById('msg').value,
  }
  emailjs.send('service_s5tci3d', 'template_6cvxcsf', tempParams)
  .then(function(res){
    console.log("success", res.status)
  }).then(()=>{
    document.getElementById('fromName').value = ''
    document.getElementById('fromEmail').value = ''
    document.getElementById('subject').value =''
    document.getElementById('msg').value =''
  })
  
}

