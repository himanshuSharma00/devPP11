const allFilters = document.querySelectorAll('.filter');
const container = document.querySelector('.container');

for(let i=0; i<allFilters.length; i++){
    allFilters[i].addEventListener('click',selectFilter);
}

function selectFilter(e){
    if(container.classList.length > 1){
        container.classList.remove(container.classList[1]);
    }
    let filterSelected = e.target.classList[1];
    container.classList.add(filterSelected);
}