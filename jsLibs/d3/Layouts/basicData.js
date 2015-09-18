var radius = window.innerHeight;

var svg = d3.select("body").append("svg")
	.attr({
		width: window.innerWidth,
		height: window.innerHeight
	}).append("g")
	.attr("transform", "translate(" + [50, radius / 2] + ")rotate(60)");

var tree = d3.layout.tree().size([60, radius]);

var diagonal = d3.svg.diagonal.radial()
	.projection(function (d) {
		return [d.y, d.x / 180 * Math.PI];
	});

d3.json("lang.json", function (data){

	var nodeData = tree.nodes(data);
	var linkData = tree.links(nodeData);

	svg.selectAll("path.link")
		.data(linkData)
		.enter()
		.append("path")
		.attr({
			"class": "link",
			fill: "none",
			stroke: "#ccc",
			d: diagonal
		});

	var nodes = svg.selectAll("g.node")
		.data(nodeData)
		.enter()
		.append("g")
		.attr({
			"class": "node",
			"transform": function (d) {
				return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
			}
		});

	nodes.append("circle")
		.attr({
			fill: "#fff",
			stroke: "#78B446",
			"stroke-width": 4,
			r: 4
		});

	nodes.append("text")
		.attr("dx", 10)
		.text(function (d) {
			return d.name;
		})

});