import { colors } from './colors';
/**
 * Short for `document.querySelector()`
 * @param {string} selector
 * @return {HTMLElement}
 */
export function $(selector: string): any {
    return document.querySelector(selector)
}

/**
 * short for `document.querySelectorAll`
 * @param selector {string}
 */
export function $$(selector: string): any {
    return document.querySelectorAll(selector)
}

/**
 * Data about a specific cell
 * @class Cell
 * @param {Integer} parts
 */
class Cell {
    /** The size of each cell
     * @type {number}
     * @public 
     */
    public cellSize: number

    constructor(public parts: number = 10) {
        this.cellSize = window.innerHeight / this.parts
    }
}

/**
 * Creates the grid in which the game will happen
 * @return {void}
 */
export function createGrid() {
    const cell: Cell = new Cell(10)
    const cellSize: number = cell.cellSize

    // Empty `div`
    var div = $('body > div')
    div.innerHTML = null

    // Let's create the table
    var table = document.createElement('table')

    // Append table to this div
    div.appendChild(table)

    // Set the properties of the table
    table.style.width = `${window.innerHeight}px`

    // Let's create its rows
    for (var i = 0, parts = cell.parts; i < parts; i++) {
        // First create rows
        var row = document.createElement('tr')
        table.appendChild(row)

        // Create cells in each
        for (var j = 0; j < parts; j++) {
            // Create cells
            let cell = document.createElement('td')

            cell.id = `${i}${j}`

            cell.align = 'center'
            row.appendChild(cell)
        }
    }
}

/**
 * Changes the color of the grid according to the present player
 * @param {string} color What should be the color of the grid
 */
export function changeGridColor(color: string) {
    const table = $('table')
    const tds = $$('td')

    const td = Array.prototype.slice.call(tds)

    table.style.borderColor = color

    for (let i = 0; i < td.length; i++) {
        td[i].style.borderColor = color
    }
}

/**
 * Control the reactions
 * @return void
 */
export function reactions(): void {
    // Let's set the fields for specific reactions
    /**
     * Corner field would be of this form:
     * ** 1 touch -> Nothing
     * ** 2 touches -> Splits to adjacent fields
     *
     * Edge fields would be of this form:
     * ** 1 touch -> Nothing
     * ** 2 touch -> Nothing
     * ** 3 touches -> Will spread to adjacent fields(will vary)
     *
     * Fields other than edge fields and corner fields
     * ** 1 touch -> Nothing
     * ** 2 touches -> Nothing
     * ** 3 touches -> Nothing
     * ** 4 touches -> Spread to adjacent fields
     */

    // Let's mark the corner fields
    const corner: string[] = [
        '00',
        '09',
        '90',
        '99'
    ]

    var edges: string[] = []

    //  Let's mark edge fields
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            edges.push(`${i}${j}`)
        }
    }

    edges = edges.filter(item => corner.indexOf(item) < 0)

    // We have all the edges now


}