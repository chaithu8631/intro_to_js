function printEvens(limit) {
    let presentEven = 2
    while(presentEven <= limit) {
        console.log(presentEven);
        presentEven = presentEven + 2;
    }
}

printEvens(16);