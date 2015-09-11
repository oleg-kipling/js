var svg = d3.select("body").append("svg")
	.attr({
		width: window.innerWidth,
		height: window.innerHeight
	});

var data = d3.range(20);
var barWidth = window.innerWidth / data.length;

// category20b, c 10
var color = d3.scale.category20c();

svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
	.attr({
		width: barWidth,
		height: window.innerHeight,
		y: 0,
		x: function (d, i) {
			return barWidth * i;
		},
		fill: color
	});