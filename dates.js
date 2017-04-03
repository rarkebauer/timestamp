/*var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
*/
module.exports = {
	//checks if a string is a valid unix date and converts to natural date
	checkUnix: function(arg1) { 
		var arg = parseInt(arg1);
		var d = new Date(arg);
		var day = d.getDate();
		var month = d.getMonth();
		var year = d.getFullYear();
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

		if(Number(arg1)){
			return months[month] + " " + day + ", " + year;
		} else {
			return null;
		}
	},
	//checks if a string is a valid natural date and converts to a unix date (number)
	checkStd: function(arg2) {
		if(Date.parse(arg2)) {
			return Date.parse(arg2);
		} else {
			return null;
		}
	}
} //module.exports