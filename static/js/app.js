var tbody = d3.select("tbody");

// Provide a means of filtering the table by date

var inputSel = d3.select("#datetime");
var submit = d3.select("#filter-btn");


// Append the table data from the data file
data.forEach(datum => {
    var tr = tbody.append("tr");
    Object
        .entries(datum)
        .forEach(([datumKey, datumValue]) => {
            tr.append("td").text(datumValue)
        })
});
// The code above this point works. Hooray!


// After 
submit.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var inputValue = inputSel.property("value");
    var matchingDates = data.filter(sighting => {
        return sighting.datetime == inputValue;
    });
    console.log(matchingDates)
    // Clear existing entries
    document.getElementById("data-rows").innerHTML = "";
    matchingDates.forEach(datum => {
        var tr = tbody.append("tr");
        Object
            .entries(datum)
            .forEach(([datumKey, datumValue]) => {
                tr.append("td").text(datumValue)
            })
    });

});


