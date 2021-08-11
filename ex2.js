function print(exemplo1) {
    var texto = "01"
    if (exemplo1 == '01^+') {
        var texto = "01"
        for (var i = 0; i < 9; i++) {
            if (i == 0) {
                console.log(texto)
            } else {
                texto = texto + '1';
                console.log(texto)
            }
        }

    }

}
print('01^+');