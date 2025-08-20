
function which_operation(){
  var operation = prompt("Yapmak istediğiniz işlemin giriniz "
    +" toplama"
    +" çıkarma" 
    +" çarpma"
    +" bölme")

    lower_case =operation.toLowerCase;

    if (lower_case == "toplama"){
      var a = prompt("Sayı giriniz")
      var b = prompt("Sayı giriniz")
      addition(a,b);
    }
    else if(lower_case =="çıkarma"){
      var a = prompt("Sayı giriniz")
      var b = prompt("Sayı giriniz")
      subtraction();
    }
    else if(lower_case == "çarpma"){
      var a = prompt("Sayı giriniz")
      var b = prompt("Sayı giriniz")
      multiplication();
    }
    else if(lower_case =="bölme"){
      var a = prompt("Sayı giriniz")
      var b = prompt("Sayı giriniz")
      division();
    }
    else{
      islem();
    }

}


function addition(a,b){
    var sum = a+b;
    console.log("Toplam " + sum)
}

function subtraction(a,b){
    var sub = a+b;
    console.log("Çıkarma " + sub)
}

function multiplication(a,b){
    var multip = a+b;
    console.log("Çarpma " + multip)
}

function division(a,b){
  var reminder = a%b;
  var devi= a/b;
    console.log("Bölüm " + sum
      +"/nKalan" + devi
    )
}

function main(){
  
  which_operation();
  var exit_or_not = prompt("Çıkış yapmak isitiyor musunuz?" +
    "/n çıkış yapmak için E'ye bas" 
    +"/devam etmek için bir tuşa bas"
  )
  exit_or_not.toLocaleLowerCase;
  if(exit_or_not != "e"){
    which_operation();
  }
  else{
    console.log("program exit")
  }

}


main();