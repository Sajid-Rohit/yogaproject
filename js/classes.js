/** filter arrow animation / custom select box */
/** Day filter */
  $(".default_option-day").click(function(){
$(this).parent().toggleClass("active");
})

$(".select_ul-day li").click(function(){
var currentele = $(this).html();
$(".default_option-day li").html(currentele);
$(this).parents(".select_wrap-day").removeClass("active");
})

/** level FIlter */
$(".default_option-level").click(function(){
  $(this).parent().toggleClass("active");
  })
  
  $(".select_ul-level li").click(function(){
  var currentele = $(this).html();
  $(".default_option-level li").html(currentele);
  $(this).parents(".select_wrap-level").removeClass("active");
  })

  /** Teacher FIlter */
$(".default_option-teacher").click(function(){
  $(this).parent().toggleClass("active");
  })
  
  $(".select_ul-teacher li").click(function(){
  var currentele = $(this).html();
  $(".default_option-teacher li").html(currentele);
  $(this).parents(".select_wrap-teacher").removeClass("active");
  })

  /** Style FIlter */
$(".default_option-style").click(function(){
  $(this).parent().toggleClass("active");
  })
  
  $(".select_ul-style li").click(function(){
  var currentele = $(this).html();
  $(".default_option-style li").html(currentele);
  $(this).parents(".select_wrap-style").removeClass("active");
  })

/*Filter Navigation */

var numberOfItems = $('#loop .singlerow').length;

var limitPerPage = 3;

$('#loop .singlerow:gt(' + (limitPerPage - 1) + ')').hide();
var totalPages = Math.round(numberOfItems / limitPerPage); 


$(".pagination").append("<li class='current-page active page-item'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page page-item '><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
}

$(".pagination").append("<li id='next-page' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>");

$(".pagination li.current-page").on("click", function(){
  if($(this).hasClass("active")){
    return false;
  } else{
    
    var currentPage = $(this).index();
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
    $("#loop .singlerow").hide();

    var grandTotal = limitPerPage * currentPage;

    for(var i =grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#loop .singlerow:eq(" + i +")").show();
    }
  }
  
});

/* Next Btn*/

$("#next-page").on("click", function(){
  var currentPage = $(".pagination li.active").index();
  if(currentPage === totalPages){
    return false;
  } else{
    currentPage++;
    $(".pagination li").removeClass("active");
    $("#loop .singlerow").hide();

    var grandTotal = limitPerPage * currentPage;

    for(var i =grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#loop .singlerow:eq(" + i +")").show();
    }

    $(".pagination li.current-page:eq("+(currentPage - 1)+")").addClass("active");

  }
  
});

/**Previous btn */
$("#prev-page").on("click", function(){
  var currentPage = $(".pagination li.active").index();
  if(currentPage === 1){
    return false;
  } else{
    currentPage--;
    $(".pagination li").removeClass("active");
    $("#loop .singlerow").hide();

    var grandTotal = limitPerPage * currentPage;

    for(var i =grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#loop .singlerow:eq(" + i +")").show();
    }

    $(".pagination li.current-page:eq("+(currentPage - 1)+")").addClass("active");

  }
  
});
