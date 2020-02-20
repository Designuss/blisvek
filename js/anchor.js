$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("ul li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});
$(document).ready(function(){
  // плавное перемещение страницы к нужному блоку
  $("nav a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});