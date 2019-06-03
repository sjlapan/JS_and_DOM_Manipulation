var tbody = d3.select("tbody");
console.log(data);

data.forEach(datum => {
    var tr = tbody.append("tr");
    Object
        .entries(datum)
        .forEach(([datumKey, datumValue]) => {
            tr.append("td").text(datumValue);
        })
})