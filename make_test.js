describe('make', function() {
    function sum(a, b) {
        return a + b;
    }
    function product(a, b) {
        return a * b;
    }
    function ratio(a, b) {
        return a / b;
    }
    function difference(a, b) {
        return a - b;
    }
    it('make(15)(34, 21, 666)(41)(sum) = 777', function() {
        assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
    });
    it('make(sum) = null', function() {
        assert.equal(make(sum), null);
    });
    it('make(1)(2, 3, 4, 5, 6, 7, 8, 9)(10)(sum) = 55', function() {
        assert.equal(make(1)(2, 3, 4, 5, 6, 7, 8, 9)(10)(sum), 55);
    });
    it('make(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(sum) = 55', function() {
        assert.equal(make(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(sum), 55);
    });
    it('make(10)(20, 30, 40)(50)(100)(product) = 1200000000', function() {
        assert.equal(make(10)(20, 30, 40)(50)(100)(product), 1200000000);
    });
    it('make(10000)(10)(10)(10)(ratio) = 10', function() {
        assert.equal(make(10000)(10)(10)(10)(ratio), 10);
    });
    it('make(35, 40, 73)(1)(3)(difference) = -82', function() {
        assert.equal(make(35, 40, 73)(1)(3)(difference), -82);
    });
    it('make(11)(product) = 11', function() {
        assert.equal(make(11)(product), 11);
    });
    it('make(15)()()()(sum) = 15', function() {
        assert.equal(make(15)()()()(sum), 15);
    });
});