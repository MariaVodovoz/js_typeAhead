/*
export function numberWithCommas(x) {
    // Don't have to use Stackoverflow's solution in video
    // Refer new number formatting feature - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

const formatter = new Intl.NumberFormat('en');
    return formatter.format(x);
    // return new Intl.NumberFormat('en-CA').format(x);
}
*/    //  ??????????      // I was trying



export function numbersWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};




// How to do Import, export functions : https://www.loom.com/share/05ad6b9e147043398741e70b1413a816