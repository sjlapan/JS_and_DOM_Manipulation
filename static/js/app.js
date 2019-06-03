var tbody = d3.select("tbody");

// Append the table data from the data file
data.forEach(datum => {
    var tr = tbody.append("tr");
    Object
        .entries(datum)
        .forEach(([datumKey, datumValue]) => {
            tr.append("td").text(datumValue)
        })
})

// Provide a means of filtering the table by date
