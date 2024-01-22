console.log('Подключение main.js');

const btnLanguageList = document.querySelector('.language-select > a');
console.log(btnLanguageList);
// console.dir(btnLanguageList);

btnLanguageList.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log(event);
    const elList = document.querySelector('.language-list');
    console.log('elList');
    console.dir(elList);

//     // if (elList.classList.contains('hide')) {
//     //     elList.classList.remove('hide')
//     // } else {
//     //     elList.classList.add('hide')
//     // }

    elList.classList.toggle('hide');
});


// Second - event

const btnServiceList = document.querySelector('.big-block > a');

btnServiceList.addEventListener('click', function(event) {
    event.preventDefault();
    
    const OList = document.querySelector('.service-list');
    // console.log('OList');
    // console.dir(Olist);

    OList.classList.toggle('hide');
});


