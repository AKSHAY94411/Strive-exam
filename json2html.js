// json2html.js
export default function json2html(data) {
  // Create table element
  let table = '<table data-user="akshay45offical@gmail.com">';
  
  // Create table header
  table += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
  // Create table body
  table += '<tbody>';
  data.forEach(row => {
    table += '<tr>';
    table += `<td>${row.Name}</td>`;
    table += `<td>${row.Age}</td>`;
    table += `<td>${row.Gender || ''}</td>`;
    table += '</tr>';
  });
  table += '</tbody>';
  
  // Close table element
  table += '</table>';
  
  return table;
}
