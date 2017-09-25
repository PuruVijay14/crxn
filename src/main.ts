import { createGrid, reactions } from './dom';

/*
When anybody will click on `select` create the board
 */
window.onload = () => {
    var select = document.getElementById('select')
    var nParts = document.querySelector('select#nParts')

    select.addEventListener('change', createGrid)

    select.addEventListener('change', reactions)
}