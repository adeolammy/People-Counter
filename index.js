
 let counter = 0;
 let totalSum = 0;
    document.getElementById('btn').addEventListener('click', function increase(){
       counter = counter + 1;
       document.getElementById('count').innerText = counter;
       
    });

    document.getElementById('clear').addEventListener('click', function clear(){
        counter = counter = 0
        document.getElementById( 'count' ).innerText=counter;
    })

    document.getElementById('btn_decre').addEventListener('click', function decrease(){
       counter = counter - 1;
       counter < 0 ? counter = 0 : document.getElementById('count').innerText = counter;        
       
    });

    document.getElementById('save').addEventListener( "click", saveData);
    let show = document.getElementById('show')
    let total = document.getElementById('totalSum')
function saveData() {
   var count = document.getElementById('count');
   show.innerText += " " + count.innerHTML + "+" ;
   totalSum += counter; 
   total.innerText ="Total: "+ totalSum;
   counter = 0
   count.innerText = counter;

   console.log(`saved item:`,  count.innerHTML);
   console.log(`totalSum:`,  totalSum);
}
