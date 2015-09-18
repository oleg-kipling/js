var svg = d3.select("body").append("svg")
	.attr({
		width: window.innerWidth,
		height: window.innerHeight
	});

var parse = d3.time.format("%Y").parse;

d3.csv("tuts.csv", function (d) { d.year = parse(d.year); return d; }, function (data) {

	var yearScale = d3.time.scale()
		.domain(d3.extent(data, function (d) { return d.year; }))
		.range([50, window.innerWidth -  50]);

	var numberScale = d3.scale.linear()
		.domain([ 0, d3.max(data, function (d) { return d.number; })])
		.range([50, window.innerHeight - 50]);

	svg.append("line")
		.attr({
			x1: 50,
			y1: 50,
			x2: window.innerWidth - 50,
			y2: 50,
			fill: "none",
			stroke: "#474747"
		});

	var area = d3.svg.area()
		.x(function (d) { return yearScale(d.year); })
		.y0(window.innerHeight - 50)
		.y1(function (d) { return window.innerHeight - numberScale(d.number); });

	svg.append("path")
		.data([data])
		.attr({
			d: area,
			fill: "#C3E4A8",
			stroke: "none"
		});

	var line = d3.svg.line()
		.x(function (d) { return yearScale(d.year); })
		.y(function (d) { return window.innerHeight - numberScale(d.number); });

	svg.append("path")
		.data([data])
		.attr({
			d: line,
			fill: "none",
			stroke: "#78B446",
			"stroke-width": 4
		});

	var yearAxis = d3.svg.axis().scale(yearScale)
		.tickSize(100 - window.innerHeight)
		.orient("bottom");

	svg.append("g")
		.attr({
			"class": "axis",
			"transform": "translate(" + [0, window.innerHeight - 50] + ")"
		}).call(yearAxis);

	svg.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr({
			cx: function (d) { return yearScale(d.year); },
			cy: function (d) { return window.innerHeight - numberScale(d.number); },
			r: 4,
			fill: "#fff",
			stroke: "#78B446",
			"stroke-width": 4
		});
});		
