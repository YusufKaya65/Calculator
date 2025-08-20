
function which_operation(){
  var operation = prompt("Yapmak istediğiniz işlemin giriniz "
    +" toplama"
    +" çıkarma" 
    +" çarpma"
    +" bölme")

    var new_val = operation.toLowerCase();

    if (new_val == "toplama"){
      var a = Number(prompt("Sayı giriniz"));
      var b = Number(prompt("Sayı giriniz"));
      addition(a,b);
    }
    else if(new_val == "çıkarma"){
      var a = Number(prompt("Sayı giriniz"));
      var b = Number(prompt("Sayı giriniz"));
      subtraction(a,b);
    }
    else if(new_val == "çarpma"){
      var a = Number(prompt("Sayı giriniz"));
      var b = Number(prompt("Sayı giriniz"));
      multiplication(a,b);
    }
    else if(new_val == "bölme"){
      var a = Number(prompt("Sayı giriniz"));
      var b = Number(prompt("Sayı giriniz"));
      division(a,b);
    }
    else{
      which_operation();
    }

}


function addition(a,b){
    var sum = a+b;
    console.log("Toplam " + sum)
}

function subtraction(a,b){
    var sub = a-b;
    console.log("Çıkarma " + sub)
}

function multiplication(a,b){
    var multip = a*b;
    console.log("Çarpma " + multip)
}

function division(a,b){
  var reminder = a%b;
  var devi= a/b;
    console.log("Bölüm " + devi
      +"\nKalan" + reminder
    )
}

function main(){
  
  which_operation();
  var exit_or_not = prompt("Çıkış yapmak isitiyor musunuz?" +
    "\n çıkış yapmak için E'ye bas" 
    +"\ndevam etmek için bir tuşa bas"
  )
  exit_or_not = exit_or_not.toLowerCase();
  



  if(exit_or_not != "e"){
    which_operation();
  }
  else{
    console.log("program exit")
  }

}


main();