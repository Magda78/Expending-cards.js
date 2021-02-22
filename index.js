const img = document.querySelectorAll('.page__expendingCardsItem'); //returns nodelist object 


const clickHandler = (item) => {
    removeHandler()
    item.classList.add('active');
}

const removeHandler = () => {
    img.forEach(item => {
        item.classList.remove('active')
    })
}


//[...img].map(item => {                                              //converting object into array and map
//    item.addEventListener('click', () => clickHandler(item))
//})


img.forEach(item => {                                              //or use forEach no need to convert
    item.addEventListener('click', () => clickHandler(item))
})

