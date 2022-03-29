import TableCsv from "./tablecsv.js";

const tableRoot = document.querySelector("#csvRoot");
const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCsv(tableRoot);

csvFileInput.addEventListener("change", (e) => {
    Papa.parse(csvFileInput.files[0], {
        delimiter: ",",
        skipEmptyLines: true,
        complete: (results) => {
            //while SLICE is mentioned, the only reason it is input in my code, is to elimite the need of fetching and inserting HEADER into table.
            tableCsv.update(results.data.slice(1), results.data[0]);
        }
    });
});