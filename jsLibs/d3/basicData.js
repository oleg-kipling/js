svg = d3.select("body").append("svg").attr({
	width: 1100,
	height: 600
});


svg.selectAll("rect")
	.data(d3.range(5))
	.enter()
	.append("rect")
	.attr({
		width: 100,
		height: 100,
		y: 100,
		x: function (d,i) { return i * 101; },
		fill: "#474747"
	});

var moreData = d3.range(3);
var rects = svg.selectAll("rect").data(moreData);
rects.attr("fill", "#ccc");


// rects.exit().attr("fill", "#ececec");
rects.exit().remove();

// rects.enter()
// 	.append("rect")
// 	.attr({
// 		width: 50,
// 		height: 50,
// 		y: 100,
// 		x: function (d,i) { return i * 101; },
// 		fill: "lightblue"
// 	});