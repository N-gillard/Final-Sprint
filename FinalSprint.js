fetch("./Final.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(record => {
      console.log(`Make: ${record.Make}, Model: ${record.Model}`);
    });
  })
  .catch(error => console.error(error));

  function getMakes() {
    return fetch('Final.json')
      .then(response => response.json())
      .then(data => [...new Set(data.map(record => record.Make))].join(', '))
      .catch(error => console.error(error));
  }

  function getModelsByMake(make) {
    return fetch("Final.json")
      .then(response => response.json())
      .then(data => data.filter(record => record.Make === make).map(record => record.Model).join(', '))
      .catch(error => console.error(error));
  }

  function countByStatus() {
    return fetch("Final.json")
      .then(response => response.json())
      .then(data => {
        let domesticCount = 0;
        let importCount = 0;
        data.forEach(record => {
          if (record.Status === "Domestic") {
            domesticCount++;
          } else if (record.Status === "Import") {
            importCount++;
          }
        });
        return `There are ${domesticCount} domestic cars and ${importCount} imported cars in the JSON file.`;
      })
      .catch(error => console.error(error));
  }