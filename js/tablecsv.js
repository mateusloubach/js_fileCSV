export default class {
    /**
     * @param {HTMLTableElement} root The table element which will display the CSV data.
     */
    constructor(root) {
        this.root = root;
        console.log("cool. this seems to be working!");
    }

    update(data, headerColumns = []) {
        this.clear();
        this.setHeader(headerColumns);
        this.setBody(data);
    }


    /**
    * Clears existing data in the table and replaces it with new data.
    *
    * @param {string[]} headerColumns List of headings to be used
    */

    setHeader(headerColumns) {
        this.root.insertAdjacentHTML("afterbegin", `
            <thead>
                <tr>
                    ${headerColumns.map(text => `<th>${text}</th>`).join("")}
                </tr>
            </thead>
        `);
    }

    /**
     * Clears all contents of the table (incl. the header).
     */
    clear() {
        this.root.innerHTML = "";
    }


    /**
     * Sets the table body.
     *
     * @param {string[][]} data A 2D array of data to be used as the table body
     */
    setBody(data) {
        const rowsHtml = data.map((row) => {
            return `
                    <tr>
                        ${row.map((text) => `<td>${text}</td>`).join("")}
                    </tr>
                `;
        });
        console.log(rowsHtml);

        this.root.insertAdjacentHTML("beforeend", `
        <tbody> 
            ${rowsHtml.join("")}
        </tbody>
        `);
    }
}