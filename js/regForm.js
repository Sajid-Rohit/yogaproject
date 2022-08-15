$(document).ready(function(){
  
    $('#fnamecheck').hide();
    $('#lnamecheck').hide();
    $('#profilepiccheck').hide();
    $('#datecheck').hide();
    $('#mobilecheck').hide();
    $('#emailcheck').hide();
    $('#adresscheck').hide();
    $('#zipcheck').hide();
    $('#joinascheck').hide();
    $('.ttypeclass').hide();
    $('#ttypecheck').hide();
    $('.yoeclass').hide();
    $('#yoecheck').hide();
    $('.tcertclass').hide();
    $('#tcertidcheck').hide();
    

    var first_err = true;
    var last_err = true;
    var profile_err = true;
    var date_err = true;
    var mobile_err = true;
    var email_err = true;
    var adress_err = true;
    var zip_err = true;
    var join_err = true;
    var ttype_err = true;
    var yoe_err = true;
    var tcert_err = true;


    /*First name Validation*/
    $('#fnameid').keyup(function(){
        fname_check();
    });

    function fname_check(){
        var first_val = $('#fnameid').val();
        var pattern=/^[a-zA-Z]*$/;
       if(first_val.length == '' ){
           $('#fnamecheck').show();
           $('#fnamecheck').html("* Please Fill the First name");
           $('#fnamecheck').focus();
           first_err = false;
           return false;
       }else{
        $('#fnamecheck').hide();
       }

       if(pattern.test(first_val)&& first_val !== ''){
        $('#fnamecheck').hide();
       }else{
        $('#fnamecheck').show();
           $('#fnamecheck').html("* only character allowed");
           $('#fnamecheck').focus();
           first_err = false;
           return false;
       }
       
       if((first_val.length < 3)  || (first_val.length > 10)){
           $('#fnamecheck').show();
           $('#fnamecheck').html("* First Name Length Must Be Between 3 to 10 ");
           $('#fnamecheck').focus();
           first_err = false;
           return false;
       }else{
        $('#fnamecheck').hide();
       }  
    }

/*Last name Validation*/

$('#lnameid').keyup(function(){
    lname_check();
});

function lname_check(){
    var last_val = $('#lnameid').val();
    var pattern=/^[a-zA-Z]*$/;
   

   if(last_val.length == '' ){
       $('#lnamecheck').show();
       $('#lnamecheck').html("* Please Fill the Last name");
       $('#lnamecheck').focus();
       last_err = false;
       return false;
   }else{
    $('#lnamecheck').hide();
   }

   if(pattern.test(last_val)&& last_val !== ''){
    $('#lnamecheck').hide();
    }else{
    $('#lnamecheck').show();
    $('#lnamecheck').html("* Only Characters Allowed");
    $('#lnamecheck').focus();
    last_err = false;
    return false;
}
   
   if((last_val.length < 3)  || (last_val.length > 10)){
       $('#lnamecheck').show();
       $('#lnamecheck').html("* Last Name Length Must Be Between 3 to 10 ");
       $('#lnamecheck').focus();
       last_err = false;
       return false;
   }else{
    $('#lnamecheck').hide();
   }  
}

 /*Profile Validation*/

 /*$('#profilepicid').keyup(function(){
    profile_check();
    
});      
   function profile_check(){
    var profile_val = $('#profilepicid').val();
    var file_size = $('#profilepicid')[0].files[0].size;
   alert(file_size);

   if(profile_val.files[0] == '' ){

    $('#profilepiccheck').show();
       $('#profilepiccheck').html("* Upload Profile picture");
       $('#profilepiccheck').focus();
       $('#profilepiccheck').css("color","red");
       profile_err = false;
       return false;
   
   }else{
    $('#profilepiccheck').hide();
   }
   
      if(file_size > 2097152 ){
        alert(file_size);
    $('#profilepiccheck').show();
       $('#profilepiccheck').html("* File Size less than 2mb require");
       $('#profilepiccheck').focus();
       profile_err = false;
       return false;

   }
   else{
    $('#profilepiccheck').hide();
   }   
  }*/

/**Date Validation */

$('#dateid').keyup(function(){
    date_check();
});

function date_check(){
    var date_val = $('#dateid').val();
   

   if(date_val.length == '' ){
       $('#datecheck').show();
       $('#datecheck').html("* Please Fill the date");
       $('#datecheck').focus();
       date_err = false;
       return false;
   }else{
    $('#datecheck').hide();
   }
}
/**Mobile Validation */

$('#mobileid').keyup(function(){
    mobile_check();
});

function mobile_check(){
    var mobile_val = $('#mobileid').val();
   

   if(mobile_val.length == '' ){
       $('#mobilecheck').show();
       $('#mobilecheck').html("* Please Enter Mobile no");
       $('#mobilecheck').focus();
       mobile_err = false;
       return false;
   }else{
    $('#mobilecheck').hide();
   }

   if(mobile_val.length == 10 ){
     if(isNaN(mobile_val)){
      $('#mobilecheck').show();
       $('#mobilecheck').html("* Enter Number Only");
       $('#mobilecheck').focus();
       mobile_err = false;
       return false;

     } else{
      $('#mobilecheck').hide();
     }
   }else{
    $('#mobilecheck').show();
       $('#mobilecheck').html("* 10 Numbers Require");
       $('#mobilecheck').focus();
       mobile_err = false;
       return false;
   }

  }

  /**Email Validation */

  $('#emailid').keyup(function(){
    email_check();
});

function email_check(){
    var email_val = $('#emailid').val();
  

   if(email_val.length == '' ){
       $('#emailcheck').show();
       $('#emailcheck').html("* Please Fill the Email");
       $('#emailcheck').focus();
       email_err = false;
       return false;
   }else{
    $('#emailcheck').hide();
   }

   var mail = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

   if(mail.test($('#emailid').val())){
    $('#emailcheck').hide();
   } else {
    $('#emailcheck').show();
       $('#emailcheck').html("* Please Enter a valid Email ");
       $('#emailcheck').focus();
       email_err = false;
       return false; 
   }
}

/**Address Validation */

$('#adressid').keyup(function(){
    adress_check();
});

function adress_check(){
    var adress_val = $('#adressid').val();
   

   if(adress_val.length == '' ){
       $('#adresscheck').show();
       $('#adresscheck').html("* Please Fill the Adress");
       $('#adresscheck').focus();
       adress_err = false;
       return false;
   }else{
    $('#adresscheck').hide();
   }
}

/**Zipcode Validation */


$('#zipid').keyup(function(){
    zip_check();
});

function zip_check(){
    var zip_val = $('#zipid').val();
   

   if(zip_val.length == '' ){
       $('#zipcheck').show();
       $('#zipcheck').html("* Please Enter Zipcode");
       $('#zipcheck').focus();
       zip_err = false;
       return false;
   }else{
    $('#zipcheck').hide();
   }

   if(zip_val.length == 6 ){
     if(isNaN(zip_val)){
      $('#zipcheck').show();
       $('#zipcheck').html("* Enter Number Only");
       $('#zipcheck').focus();
       zip_err = false;
       return false;

     } else{
      $('#zipcheck').hide();
     }
   }else{
    $('#zipcheck').show();
       $('#zipcheck').html("* 6 Numbers Require");
       $('#zipcheck').focus();
       zip_err = false;
       return false;
   }

  }

  /**Join As Validation */

  $('#joinasid').click(function(){
    join_check();
});

function join_check(){
    var join_val = $('#joinasid').val();
   

   if(join_val == '' ){
       $('#joinascheck').show();
       $('#joinascheck').html("* Please Select Type");
       $('#joinascheck').focus();
       join_err = false;
       return false;
   }else{
    $('#joinascheck').hide();
   }


   if(join_val == 'trainer' ){
    $('.ttypeclass').show();
    $('.yoeclass').show();
    $('.tcertclass').show();
    ttype_check();
    yoe_check();
    /*tcert_check();*/
   

    
    
}else{
    $('.ttypeclass').hide();
    $('#ttypecheck').hide();
    $('.yoeclass').hide();
    $('#yoecheck').hide();
    $('.tcertclass').hide();
    $('#tcertidcheck').hide();
}


}

/** Training Type Validation */

$('#ttypeid').keyup(function(){
    ttype_check();
});

function ttype_check(){
    var ttype_val = $('#ttypeid').val();
    var pattern=/^[a-zA-Z]*$/;
   if(ttype_val.length == '' ){
       $('#ttypecheck').show();
       $('#ttypecheck').html("* Training Type is Required");
       $('#ttypecheck').focus();
       ttype_err = false;
       return false;
   }else{
    $('#ttypecheck').hide();
   }

   if(pattern.test(ttype_val)&& ttype_val !== ''){
    $('#ttypecheck').hide();
   }else{
    $('#ttypecheck').show();
       $('#ttypecheck').html("* only character allowed");
       $('#ttypecheck').focus();
       ttype_err = false;
       return false;
   }
}

/** Year of Exp validation */

$('#yofid').keyup(function(){
    yoe_check();
});

function yoe_check(){
    var yoe_val = $('#yofid').val();
   

   if(yoe_val.length == '' ){
       $('#yoecheck').show();
       $('#yoecheck').html("* Please Enter Exp");
       $('#yoecheck').focus();
       yoe_err = false;
       return false;
   }else{
    $('#yoecheck').hide();
   }

   if(yoe_val.length <3 ){
     if(isNaN(yoe_val)){
      $('#yoecheck').show();
       $('#yoecheck').html("* Enter Number Only");
       $('#yoecheck').focus();
       yoe_err = false;
       return false;

     } else{
      $('#yoecheck').hide();
     }
   }else{
    $('#yoecheck').show();
       $('#yoecheck').html("* 2 Numbers Require");
       $('#yoecheck').focus();
       yoe_err = false;
       return false;
   }

  }

  /* Training Certificate Validation*/
/*
 $('#tcertid').keyup(function(){
    tcert_check();
    
});      
   function tcert_check(){
    var tcert_val = $('#tcertid').val();
    var file_size = $('#tcertid')[0].files[0].size;
   alert(file_size);

   if(tcert_val.files[0] == '' ){

    $('#tcertidcheck').show();
       $('#tcertidcheck').html("* Upload Certificate");
       $('#tcertidcheck').focus();
       $('#tcertidcheck').css("color","red");
       tcert_err = false;
       return false;
   
   }else{
    $('#tcertidcheck').hide();
   }
   
      if(file_size > 2097152 ){
        alert(file_size);
    $('#tcertidcheck').show();
       $('#tcertidcheck').html("* File Size less than 2mb require");
       $('#tcertidcheck').focus();
       tcert_err = false;
       return false;

   }
   else{
    $('#tcertidcheck').hide();
   }   
  }
*/


/**Submit Button */
$("#submitbtn").click(function(){
    first_err = true;
     last_err = true;
    /* profile_err = true;*/
     date_err = true;
     mobile_err = true;
     email_err = true;
     adress_err = true;
     zip_err = true;
     join_err = true;
    /* ttype_err = true;
     yoe_err = true;*/
     /*tcert_err = true;*/

    fname_check();
    lname_check();
    /*profile_check();*/
    date_check();
    mobile_check();
    email_check();
    adress_check();
    zip_check();
    join_check();
   /* ttype_check();
    yoe_check();*/
    /*tcert_check();*/

if((first_err == true) && (last_err == true) && (date_err == true) && (mobile_err == true) && (email_err == true) && (adress_err == true) && (zip_err == true) &&(join_err == true)){
    return true;
}else{
    return false;
}
});

});