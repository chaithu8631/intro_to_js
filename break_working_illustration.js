const x = 2;

switch (x) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    //break;
    
  case 3:
    console.log("C");
    break;

  case 4:
    console.log("D");
    break;
}

//If we keep break in the end of the case 2 then the case 2 block before the break gets executed.
//Output ,if break is present inside(at the end) case 2 block:

//If we don't keep break in the end of the case 2, then the case 3 block also executes 
// after case 2 block execution and executes until break occurs
//Output ,if break is not present inside(at the end) case 2 block and break at the end of the case 3:
// B
// C
