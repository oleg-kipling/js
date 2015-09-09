var w = window.innerWidth,
	h = window.innerHeight,
	margin =  { top: 40, right: 20, bottom: 20, left: 40 },
	radius = 6,


svg = d3.select("body").append("svg").attr({
	width: w,
	height: h
});

var data = [
	{ x: 100, y: 110 },
	{ x: 83, y: 43 },
	{ x: 92, y: 28 },
	{ x: 49, y: 74 },
	{ x: 51, y: 10 },
	{ x: 25, y: 98 },
	{ x: 77, y: 30 },
	{ x: 20, y: 83 },
	{ x: 11, y: 63 },
	{ x:  4, y: 55 },
	{ x:  0, y: 0  },
	{ x: 85, y: 110 },
	{ x: 85, y: 40 },
	{ x: 70, y: 80 },
	{ x: 10, y: 20 },
	{ x: 40, y: 50 },
	{ x: 25, y: 31 }
];

var xScale = d3.scale.linear()
	.domain([0, d3.max(data, function (d) { return d.x; }) + 10])
	.range([margin.left, w - margin.right]);

var yScale = d3.scale.linear()
	.domain([0, d3.max(data, function (d) { return d.y; }) + 10])
	.range([margin.top, h - margin.bottom]);

// .tickPadding(10) .tickSize(20) .tickValues([0, 13, 43, 85, 110])
var xAxis = d3.svg.axis().scale(xScale).orient("top");
var yAxis = d3.svg.axis().scale(yScale).orient("left");

var circleAttrs = {
	cx: function (d) { return xScale(d.x); },
	cy: function (d) { return yScale(d.y); },
	r: radius
};

svg.append("g").attr({
	"class": "axis",
	transform: "translate(" + [0, margin.top] + ")"
}).call(xAxis);

svg.append("g").attr({
	"class": "axis",
	transform: "translate(" + [margin.left, 0] + ")"
}).call(yAxis);

	svg.selectAll("circle")
	.data(data)
	.enter()
	.append("circle")
	.attr(circleAttrs)
	.on("mouseover", handleMouseOver)
	.on("mouseout", handleMouseOut);

	svg.on("click", function () {
		var coords = d3.mouse(this);

		var newData = {
			x: Math.round (xScale.invert(coords[0])),
			y: Math.round (yScale.invert(coords[1]))
		};

		data.push(newData);

		svg.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.attr(circleAttrs)
			.on("mouseover", handleMouseOver)
			.on("mouseout", handleMouseOut);
	});

function handleMouseOver(d, i) {
	d3.select(this).attr({
		fill: "orange",
		r: radius *2
	});

	svg.append("text")
		.attr({
			id: "t" + d.x + "-" + d.y + "-" + i,
			x: function () { return xScale(d.x) - 30; },
			y: function () { return yScale(d.y) - 15; }
		})
		.text(function () {
			return [d.x, d.y];
		});
	};

function handleMouseOut(d, i) {
		d3.select(this).attr({
			fill: "black",
			r: radius
		});

		d3.select("#t" + d.x + "-" + d.y + "-" + i).remove()
	};
