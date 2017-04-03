var expect = require("chai").expect;
var datesToDo = require("../dates.js");


describe("Convert and display Unix and Natural dates", function() {
	describe("Std to Unix converter", function() {
		it("converts the string", function() {
			var aprilFools = datesToDo.checkStd('April 1, 2017');

			expect(aprilFools).to.equal(1491019200000);
		});
  });
	describe("Unix to Std converter", function() {
		it("converts the string", function() {
			var bday = datesToDo.checkUnix(701326800000);

			expect(bday).to.equal("March 23, 1992");
		});
	});
});