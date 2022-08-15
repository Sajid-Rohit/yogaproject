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


  /** Ratings In Leave a Comment Form */
  const stars = document.querySelectorAll('.star');
  //console.log(stars);

  for(x=0; x<stars.length; x++){
     stars[x].starValue = (x+1);
  //stars[x].addEventListener('click', function(){
    // console.log("smruti");
  //});
  ["click", "mouseover", "mouseout"].forEach(function(e){
     stars[x].addEventListener(e, showRating);
  });
 }

 function showRating(e){
     let type = e.type;
     //console.log(type);
     let starValue = this.starValue;
    // console.log(starValue);

    stars.forEach(function(elem,ind){
     if( type === 'click'){
         if( ind < starValue){
             elem.classList.add("click");
         }else{
             elem.classList.remove("click");
         }
     }
     if( type === 'mouseover'){
         if( ind < starValue){
             elem.classList.add("hover");
         }else{
             elem.classList.remove("hover");
         }
     }

     if( type === 'mouseout'){
             elem.classList.remove("hover");
     }
    });
 }

 