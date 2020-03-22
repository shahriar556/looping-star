//start  *************

var star = "";
for (i = 1; i <= 4; i++) {
  star += "*";
  console.log(star);
}

// *
// **
// ***
// ****

// end **************




//start  *************

let d = 5;
for (i = 1; i <= 5; i++) {
  var star = "";
    for(a = 1; a <= d; a++){
      star += "*";
      
    }
    d -= 1;
  console.log(star);
}

// *****
// ****
// ***
// **
// *

// end **************


//start  *************


for (i = 1; i <= 5; i++) {
    var star = "";
      for(a = 1; a <= 5; a++){
        star += "*";
        
      }
    console.log(star);
  }
  
  // *****
  // *****
  // *****
  // *****
  // *****
  
  // end **************



  //start  *************

let d = 6;
for (i = 0; i <= 4; i++) {
  var star = "";
    for(a = 1; a <= d; a++){
      star += "*";
      
    }
    if(i % 2 == 0){
      d =2
    }else{
      d = 6;
    }
  console.log(star);
}

// ******
// **
// ******
// **
// ******

// end **************

//start  *************

let d = 10;
for (i = 0; i <= 10; i++) {
  var star = "";
    for(a = 1; a <= d; a++){
      star += "*";
      
    }
    d = Math.floor(Math.random() * 10) + 1; 
  console.log(star);
}


// rendom
// ******
// **
// ****
// ********
// *****

// end **************

//start  *************

let d = 18;
for (i = 0; i <= 10; i++) {
  var star = "";
    for(a = 1; a <= d; a++){
      if(i >= 2 && i <= 8){
        if(a >= 4 && a <= 7){
          star += " ";
        }else{
          if(i == 8){
            if(a >= 5 && a <= 15){
              star += " ";
            }else{
              star += "*";
            }
          }else{
            star += "*";
          }
        }
      }else{
        star += "*";
      }
    }
  console.log(star);
}


// ******************
// ******************
// ***    ***********
// ***    ***********
// ***    ***********
// ***    ***********
// ***    ***********
// ***    ***********
// ***            ***
// ******************
// ******************


// end **************


//start  *************

let d = 18;
for (i = 0; i <= 8; i++) {
  var star = "";
    for(a = 1; a <= d; a++){
      if(i <= 6){
        if(a >= 5){
          star += " ";
        }else{
            star += "*";
        }
      }else{
        star += "*";
      }
    }
  console.log(star);
}



// ****
// ****    
// ****    
// ****    
// ****    
// ****    
// ****            
// ******************
// ******************


// end **************


//start  *************

let d = 10;
for (i = 1; i <= 5; i++) {
  var star = "";
    for(a = 1; a <= d; a++){
      if(i==1){
        if(a < 5 || a > 6){
          star += " ";
        }else{
          star += "*";
        }
      }else if(i==2){
        if(a < 4 || a > 7){
          star += " ";
        }else{
          star += "*";
        }
      }else if(i==3){
        if(a < 3 || a > 8){
          star += " ";
        }else{
          star += "*";
        }
      }else if(i==4){
        if(a < 2 || a > 9){
          star += " ";
        }else{
          star += "*";
        }
      }else{
        star += "*";
      }
      
    }
  console.log(star);
}



//     **
//    ****  
//   ******   
//  ********
// **********


// end **************


//start  *************

let d = 10;
for (i = 1; i <= 5; i++) {
  var star = "";
    for(a = 1; a <= d; a++){
      if(i==1){
        if(a < 5 || a > 6){
          star += " ";
        }else{
          star += "*";
        }
      }else if(i==2){
        if(a < 4 || a > 7 || 5 == a || a == 6 ){
          star += " ";
        }else{
          star += "*";
        }
      }else if(i==3){
        if(a < 3 || a > 8){
          star += " ";
        }else{
          star += "*";
        }
      }else if(i==4){
        if(a < 2 || a > 9 || (a >= 3 && a <= 8)){
          star += " ";
        }else{
          star += "*";
        }
      }else if(i==5){
        if(a < 1 || a > 10 || (a >= 2 && a <= 9)){
          star += " ";
        }else{
          star += "*";
        }
      }
      
    }
  console.log(star);
}



//     **
//    *  *  
//   ******   
//  *      *
// *        *


// end **************