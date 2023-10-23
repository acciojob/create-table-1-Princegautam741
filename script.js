function insert_Row() {
    // Create a new row element
    var newRow = document.createElement('tr');
    
    // Create the first cell with the text "New Cell1"
    var newCell1 = document.createElement('td');
    newCell1.textContent = 'New Cell1';

    // Create the second cell with the text "New Cell2"
    var newCell2 = document.createElement('td');
    newCell2.textContent = 'New Cell2';

    // Append the cells to the new row
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);

    // Get the table by its ID ("sampleTable")
    var table = document.getElementById('sampleTable');

    // Insert the new row at the top of the table
    if (table.rows.length > 0) {
        table.insertBefore(newRow, table.rows[0]);
    } else {
        table.appendChild(newRow);
    }
}
