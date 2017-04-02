var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

module.exports = {

	getDate: function() {
		var t = new Date();
		var today = t.getTime();
		return today;
	},

	checkUnix: function(arg) {
		if(arg.length>10) {
			arg = arg.slice(0, 9);
		}
		if(parseInt(arg)){
			return months[month] + " " + day + ", " + year;
		} else {
			return null;
		}
	},
	checkStd: function(arg) {
		if(Date.parse(arg)) {
			return Date.parse(arg);
		} else {
			return null;
		}
	},
	convertMe: function(arg) {
		if(checkUnix(arg) != null) {
			var blok = {
				"unix": arg,
				"natural": checkUnix(arg)
			}
			return blok;
		} else {
			var bloque = {
				"unix": checkStd(arg),
				"natural": arg
			}
			return bloque;
		}
	}
} 