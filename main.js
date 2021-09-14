menu_list_array = ["Veg Margherita Pizza",
    "Cheeze Pizza", "Fish Pizza", "Chocolate Pizza", "Icecream Pizza"];
    topping_list_array=["Garlic","Pepper","Syrup","Salt"];
function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>";
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>';
        document.getElementById("display_menu").innerHTML = htmldata;
    }
}
var icon="pizzaImg.png";
function add_item() {
    var htmldata;

    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='menu_list_array'>";
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + "<div class='cards'>" + "<img src='images/pizzaImg.png' height=50 width=50>"+ menu_list_array[i];
        htmldata=htmldata+"</lo>";
    document.getElementById("display_menu").innerHTML = menu_list_array[i]+"</div>";
    }
htmldata=htmldata+"</section>";
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_top() {
    item=document.getElementById("toppingname").value;

topping_list_array.push(item);
topping_list_array.sort();
htmldata1 = "<section class='topping_list_array'>";
for (var i = 0; i < topping_list_array.length; i++) {
    htmldata1 = htmldata1 + "<div class='cards' style='color:white;'>" + "<img src='toppingicon.png' height=50 width=50>"+ topping_list_array[i];
    htmldata1=htmldata1+"</lo>";
htmldata1=htmldata1+"</section>"+"</div>";
document.getElementById("topping_menu").innerHTML = htmldata1;
}

}
