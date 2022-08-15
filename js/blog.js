/** Ratings Of Customer */
  // Initial Ratings
const ratings = {
  client1: 4.7,
  client2: 3
}

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Get ratings
function getRatings() {
for (let rating in ratings) {
// Get percentage
const starPercentage = (ratings[rating] / starsTotal) * 100;

// Round to nearest 10
const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

// Set width of stars-inner to percentage
document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

}
}



/* pagination of Right Panel */

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
