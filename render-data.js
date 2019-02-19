const filePath="./data/information.json";

window.fetch(filePath).then(response => response.json()).then(jsonData => {
  let renderElement = document.getElementById('render-here');
  jsonData.forEach((item, index) => {
    let id = `data-row-${index}`;
    let elem = createNewElement('div', {id});
    renderElement.appendChild(elem);
    renderData(item, elem);
  })
})

//-------------------------------------------------------------------------

function createNewElement (tagName, props) {
  let elem = document.createElement(tagName);
  for (var key in props) {
    elem.setAttribute(key, props[key]);
  }
  return elem;
}


function renderData (item, elem) {
  elem.classList.add('render');
  switch (item.type) {
    case "log": return renderLog(item.data, elem);
    case "results": return renderResults(item.data, elem);
    case "setup-info": return renderSetupInfo(item.data, elem);
    default: console.warn(`"${item.type}" data type was not rendered because it had no handler`);
  }
}

function renderLog (data, elem) {
  elem.classList.add('log');
  elem.innerHTML = `<code>${data}</code>`;
}

function renderResults (data, elem) {
  elem.classList.add('results');

  let passFail = data.pass ? 'PASS' : 'FAIL';

  let html = `
    <h3>${data.name}</h3>
    <table>
      <tr> <th>Time</th> <th>Status</th> <th>% Complete</th> </tr>  
      <tr class="result ${passFail}"> 
        <td>${new Date(data.timestamp).toLocaleTimeString()}</td> 
        <td>${passFail}</td> 
        <td>${data.percentComplete}</td>
      </tr>  
    </table>  
  `;

  elem.innerHTML = html;
}

function renderSetupInfo (data, elem) {
  elem.classList.add('setup-info');
  
  let colNames = Object.keys(data.rows[0] || {});

  let html = `
    <table>
      <tr>${colNames.map(col => `<th>${col}</th>`).join('')}</tr>
      ${data.rows.map(row => `<tr class="${row.outOfTolerance ? 'out-of-tolerance' : ''}">
        ${colNames.map(col => `<td>${row[col]}</td>`).join('')
      }</tr>`).join('')}
    </table>
  `;

  elem.innerHTML = html;
}



