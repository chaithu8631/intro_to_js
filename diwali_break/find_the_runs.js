function isIncreasing(element1,element2) {
  return element1<=element2;
}
function isDecreasing(element1,element2) {
  return element1>=element2;
}
function findRuns(a){
  const runs = [];
  let currentRuns = [a[0]];
  let hasDirectionChange = false;
  for(let i=0;i<a.length;i++) {
    if(!hasDirectionChange) {
      if(!isIncreasing(a[i],a[i+1])){
        runs.push(currentRuns);
        currentRuns=[];
        hasDirectionChange = true;
      }
      currentRuns.push(a[i+1]);
    }
    else{
      if(!isDecreasing(a[i],a[i+1])){
        runs.push(currentRuns);
        currentRuns=[];
        hasDirectionChange = false;
      }
      currentRuns.push(a[i+1]);
    }
  }
  return runs;
}
console.log(findRuns([1,2,3,4,5,5,5,4,3,4,2,1]));
