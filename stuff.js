window.addEventListener('load', function(){
    document.querySelector('#submit').addEventListener('click', () => {
        let input = document.querySelector('input');
        if (input.value != '') {
            document.querySelector('#hello').innerHTML = `Hello, ${input.value}. It's lovely to meet you!`
        } else {
            document.querySelector('#hello').innerHTML = "Hello, please enter your name!"
        }
    })})