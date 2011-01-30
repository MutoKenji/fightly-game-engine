var unit_ = require("../lib/world/unit.js");
var player_ = require("../lib/world/player.js");


exports["test-unit-toJSON"] = function (test) {

        var st = new unit_.Unit();
        st.owner = new player_.Player();

        var str = "{" + "\"id\"" + ":-1,"+"\"name\""+":null,"+ "\"owner\""+":-1," +"\"type\""+":null,"+"\"attack\""+":null,"+"\"defense\""+":null,"+"\"view\""+":null,"+"\"move\""+":null,"+"\"properties\""+":[]}" ;
        test.equal(str,st.toJSON());
        test.done();
}

exports["test-unit-removeProperties"] = function (test) {

        var un = new unit_.Unit();
        un.properties = ["a","b","c"];
        var prop = un.removeProperties("c");
        test.equal("a,b,", prop.properties);

        var un = new unit_.Unit();
        un.properties = ["a","b","c"];
        var prop = un.removeProperties("b");
        test.equal("a,,c", prop.properties);
        test.done();
}

exports["test-unit-addProperties"] = function (test) {

        var un = new unit_.Unit();
        un.properties = ["a","b"];
        un.addProperties("c");
        test.equal("a,b,c" , un.properties);
        test.done();

}

exports["test-unit-addProperties"] = function (test) {

        var un = new unit_.Unit();
        un.properties = ["a","b"];
        un.addProperties("c");
        test.equal("a,b,c" , un.properties);
        test.done();

}

exports["test-unit-hasProperties"] = function (test) {

        var un = new unit_.Unit();
        un.properties = ["a","b","c"];
        test.equal(true , un.hasProperties("b"));
        test.equal(false , un.hasProperties("d"));
        test.done();

}
