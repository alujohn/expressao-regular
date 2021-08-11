function print(exemplo1) {
    var texto = "0"
    var texto = "a"
    var texto2 = "b"
    if (exemplo1 == '01*') {
        var texto = "0"
        for (var i = 0; i < 9; i++) {
            if (i == 0) {
                console.log(texto)
            } else {
                texto = texto + '1';
                console.log(texto)
            }
        }

    } else if (exemplo1 == '01^+') {
        var texto = "01"
        for (var i = 0; i < 9; i++) {
            if (i == 0) {
                console.log(texto)
            } else {
                texto = texto + '1';
                console.log(texto)
            }
        }

    } else if (exemplo1 == '(01)^+') {
        var texto = "01"
        for (var i = 0; i < 9; i++) {
            if (i == 0) {
                console.log(texto)
            } else {
                texto = texto + '01';
                console.log(texto)
            }
        }
    } else if (exemplo1 == '(a+b)a*') {
        for (var i = 0; i < 9; i++) {
            if (i == 0) {
                console.log(texto)
                console.log(texto2)
            } else {
                texto = texto + 'a'
                console.log(texto)
                texto2 = texto2 + 'a'
                console.log(texto2)

            }
        }

    } else {
        console.log("Expressão não existe!")
    }

}
print('01*');