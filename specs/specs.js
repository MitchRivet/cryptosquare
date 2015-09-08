describe('encrypt', function() {
    it("is true if it has no spaces", function() {
        expect(encrypt("the donkey has no tail")).to.equal("thedonkeyhasnotail");
    });

    it("returns string with lower case letters and no spaces", function() {
        expect(encrypt("ThE DonKey HaS nO TaIl")).to.equal("thedonkeyhasnotail");
    });

});
