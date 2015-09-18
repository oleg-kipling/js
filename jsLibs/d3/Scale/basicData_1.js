svg = d3.select("body").append("svg").attr({
	width: window.innerWidth,
	height: window.innerHeight
});

var data = [1, 5, 2, 4, 3];

var heightScale = d3.scale.linear()  // y = mx + b
	.domain([0, d3.max(data)])
	.range([0, window.innerHeight - 40]);

var color = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range(["green", "red"]);

svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
	.attr({
		width: 100,
		height: heightScale,
		x: function (d, i) { return i * 101; },
		y: 20,
		fill: color
	})