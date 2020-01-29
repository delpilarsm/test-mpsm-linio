alert('Activate the browser ´s JavaScript console, to see the numbers');
function functionMultiple(n) {  
    let value = '' + n;
    const linio = 'Linio';
    const linianos = 'Linianos';
    const it = 'IT'
    if (n == 1)
        return linianos;
    switch (n % 3) {
        case 0:
            value = linio;
            break;
        case 1:
            switch (n % 5) {
                case 0:
                    value = it;
                    break;
                case 1:
                    value = '' + n;
                    break;
            }
        default:
            value = '' + n;
            break;
    }
    switch (n % 5) {
        case 0:
            value = it;
            break;
    }
    switch ((n % 5 == 0) && (n % 3 == 0)) {
        case true:
            console.log(linianos);
            break;
        case false:
            console.log(value);
            break;
    }    
    console.log(functionMultiple(n - 1));
}
