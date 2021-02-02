var cart = {}; //моя корзина

$('document').ready(function(){
    loadMassiv();
    checkCart();
    showKarzina();
});

function loadMassiv() {
    //загружаю товары на страницу
    $.getJSON('massiv.json', function (data) {
        //console.log(data);
        var hru = '';
        for (var key in data){
            hru+='<div class="massiv_item">';
            hru+='<h3>'+data[key]['name']+'</h3>';
            hru+='<p>Цена: '+data[key]['cost']+'</p>';
            hru+='<img src="'+data[key].image+'">';
            hru+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
            hru+='</div>';
        }
        $('#massiv').html(hru);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    let articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }


    localStorage.setItem('cart', JSON.stringify(cart) );
    showKarzina();
}
function checkCart(){
    //проверяю наличие корзины в localStorage;
    if ( localStorage.getItem('cart') != null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }

    //console.log(cart);
}