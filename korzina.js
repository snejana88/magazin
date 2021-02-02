var cart = {}; //корзина


$.getJSON('massiv.json', function (data) {
    var massiv = data; 
   
    checkCart();
   
    showCart(); 

    function showCart() {
        var out = '';
        for (var key in cart) {
            out += '<button class="delete" data-art="'+key+'" >x</button>';
            out += '<img src="'+massiv[key].image+'" width="48">';
            out += massiv[key].name;
            out += '<button class="minus" data-art="'+key+'">-</button>';
            out += cart[key];
            out += '<button class="plus" data-art="'+key+'">+</button>';
            out += cart[key]*massiv[key].cost;
            out +='<br>';
        }
        $('#my_cart').html(out);
        $('.plus').on('click', plusMassiv);
        $('.minus').on('click', minusMassiv);
        $('.delete').on('click', deleteMassiv); }

    function plusMassiv(){
      var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS(); //сохраняю корзину в localStorage
        showCart();}

    function minusMassiv(){
        var articul = $(this).attr('data-art');
        if (cart[articul]>1) {
            cart[articul]--;}
        else {
            delete cart[articul]; }
        saveCartToLS();//сохраняю корзину в localStorage
        showCart(); }

   function deleteMassiv(){
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();//сохраняю корзину в localStorage
       showCart();
    }
    

});



function checkCart() {
    //проверяю наличие корзины в localStorage;
   if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart')); }}

function saveCartToLS(){
   localStorage.setItem('cart', JSON.stringify(cart) );}
    
