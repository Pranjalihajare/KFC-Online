function OrderClick(){
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblMoblie").innerHTML = document.getElementById("txtMoblie").value;

    var mealName = "";
    var mealCost = 0;

    var optBurger = document.getElementById("optBurger");
    var optRoller = document.getElementById("optRoller");
    var imgMeal = document.getElementById("imgMeal");

    if(optBurger.checked) {
        mealName = optBurger.value ;
        mealCost = 120;
        imgMeal.src = "../public/image/burger.jpg";
    }

    if(optRoller.checked) {
        mealName = optRoller.value;
        mealCost = 100;
        imgMeal.src = "../public/image/roller.jpg";
    }

    var adonName = "";
    var adOnCost = 0;

    var optLava = document.getElementById("optLava");
    var optPepsi = document.getElementById("optPepsi");

    if(optLava.checked) {
        adonName += optLava.value + "<br>";
        adOnCost = 60;
        mealCost += adOnCost;
    }
    if(optPepsi.checked) {
        adonName += optPepsi.value + "<br>";
        adOnCost = 40;
        mealCost += adOnCost;
    }

    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdon").innerHTML = adonName;
    document.getElementById("lblTotal").innerHTML = mealCost.toLocaleString("en-in",{style: 'currency', currency: 'INR'});

}