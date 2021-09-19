var body  = document.querySelector('.right-content');
var foods  = document.querySelector('#foods');
var addToCardBtn  = document.querySelector('#add_to_cart');
var resetBtn  = document.querySelector('#reset');
var checkout  = document.querySelector('#checkout');
var totalDiv  = document.querySelector('#total');
var tshsSpan  = document.querySelector('#tshs');
var display_text = document.querySelector('#user_selected_text')
var display_value = document.querySelector('#user_selected_value')
var notification = document.querySelector('#notification')
var total = 0;
var total_item = 0;

// initialize class to Button for styling
addToCardBtn.classList.add('hidden');
resetBtn.classList.add('hidden');

// list of all foods
var food_list =[
    {name: 'Ugali Nyama', price:1500.00},
    {name: 'Wali Nyama', price:2000.00},
    {name: 'Pilau Nyama', price:2500.00},
    {name: 'Biriani Nyama', price:5000.00},
    {name: 'Biriani Kuku', price:7000.00},
]
