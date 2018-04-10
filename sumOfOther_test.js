describe('sumOfOther', function() {
    it('[2, 3, 4, 1] => [8, 7, 6, 9]', function() {
        assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
    it('[1] => [0]', function() {
        assert.deepEqual(sumOfOther([1]), [0]);
    });
    it('[10, 20, 30, 40] => [90, 80, 70, 60]', function() {
        assert.deepEqual(sumOfOther([10, 20, 30, 40]), [90, 80, 70, 60]);
    });
    it('[3, 5] => [5, 3]', function() {
        assert.deepEqual(sumOfOther([3, 5]), [5, 3]);
    });
    it('[456, 583, 1089, 364, 5] => [2041, 1914, 1408, 2133, 2492]', function() {
        assert.deepEqual(sumOfOther([456, 583, 1089, 364, 5]), [2041, 1914, 1408, 2133, 2492]);
    });
    it('[] => []', function() {
        assert.deepEqual(sumOfOther([]), []);
    });
    it('[10, \'20\', \'30\', 40] => [90, 80, 70, 60]', function() {
        assert.deepEqual(sumOfOther([10, '20', '30', 40]), [90, 80, 70, 60]);
    });
});