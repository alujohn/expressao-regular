function print(exemplo1) {
    var texto = "a"
    var texto2 = "b"
    if (exemplo1 == '(a+b)a*') {
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
    }
}
print('(a+b)a*');