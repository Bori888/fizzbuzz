QUnit.module('fizzbuzz', function() {
    QUnit.test('Létezik-e', assert => {
        assert.ok(fizzbuzz);
    });
    QUnit.test('Függvény-e', assert => {
        assert.ok(typeof(fizzbuzz) === 'function');
    });


    QUnit.test('2', assert => {
        assert.ok(fizzbuzz(2) === 2);
    });
    QUnit.test('3', assert => {
        assert.ok(fizzbuzz(3) === "fizz");
    });
    QUnit.test('5', assert => {
        assert.ok(fizzbuzz(5) === "buzz");
    });
    QUnit.test('15', assert => {
        assert.ok(fizzbuzz(15) === "fizzbuzz");
    });
    QUnit.test('2.6', assert => {
        assert.ok(fizzbuzz(2.6) === 2);
    });
    QUnit.test('3.876', assert => {
        assert.ok(fizzbuzz(3.876) === "fizz");
    });
    QUnit.test('5.245', assert => {
        assert.ok(fizzbuzz(5.245) === "buzz");
    });
    QUnit.test('15.666', assert => {
        assert.ok(fizzbuzz(15.666) === "fizzbuzz");
    });
    QUnit.test('"3"', assert => {
        assert.ok(fizzbuzz("3") === "fizz");
    });
    QUnit.test('"kutya"', assert => {
        assert.ok(fizzbuzz("kutya") === "Ez nem szám");
    });
    QUnit.test('negatív', assert => {
        assert.ok(fizzbuzz(-6) === "pozitív szám lehet csak a bemenet!");
    });
    QUnit.test('tömb tesztelése fizz-re', assert => {
        let fizzek = [5, 10, 20];
        fizzek.forEach(elem =>{
            assert.ok(fizzbuzz(elem) === "buzz");
        } );
        
    });
    QUnit.test('tömb tesztelése buzz-ra', assert => {
        let fizzek = [3, 9, 21, 123, 1002];
        fizzek.forEach(elem =>{
            assert.ok(fizzbuzz(elem) === "fizz");
        } );
        
    });
    QUnit.test('tömb tesztelése fizzbuzz-ra', assert => {
        let fizzek = [30, 90, 270, 1230, 1020];
        fizzek.forEach(elem =>{
            assert.ok(fizzbuzz(elem) === "fizzbuzz");
        } );
        
    });

  });