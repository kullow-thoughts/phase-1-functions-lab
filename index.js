function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const blockHq = 42;
    const distanceFromHq = Math.abs(someValue - blockHq);
    return distanceFromHq;

  }

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  return distanceFromHqInBlocks(someValue)*264;
  
}

function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(destination - start)
    const distanceinFeet = distance * 264
    return distanceinFeet
}


function calculatesFarePrice(start, destination){
    const travelDistance = distanceTravelledInFeet(start, destination)
    const priceForAbove2000 = 25
   
    if(travelDistance <= 400){
        return travelDistance*0
        
    } else if(travelDistance > 400 && travelDistance <= 2000){
        return (travelDistance - 400) * 0.02
    
    } else if(travelDistance > 2000 && travelDistance <= 2500){
        return priceForAbove2000
   
    } else{
        return ('cannot travel that far')
    }
}