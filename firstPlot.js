



var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers'
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 10],
  mode: 'lines'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'
};

var data1 = [ trace1, trace2, trace3 ];

var data2 = [ trace1, trace2 ];

var layout = {};

Plotly.newPlot('myDiv1', data1, layout);
Plotly.newPlot('myDiv2', data2, layout);
