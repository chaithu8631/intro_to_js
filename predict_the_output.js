const x = 2;

switch (x) {
    case 1:
        console.log("A");

    case 2:
        console.log("B");

    case 3:
        console.log("C");
        break;

    case 4:
        console.log("D");
}

//Because break has not placed after the case 2,
// so it executed until the break in the case 3 
// to get out of the block.
