var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

module.exports = {
	//checks if a string is a valid unix date and converts to natural date
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
	//checks if a string is a valid natural date and converts to a unix date
	checkStd: function(arg) {
		if(Date.parse(arg)) {
			return Date.parse(arg);
		} else {
			return null;
		}
	}
} 