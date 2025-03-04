var number = function(busStops){
  //Initialize tracking variable
  let peopleOnBus = 0;
  //Setup for loop to interate through the array
  for (let i = 0; i < busStops.length; i++){
    //Add the first number to the tracking variable
    peopleOnBus += busStops[i][0];
    //Subtract the second number from the tracking variable
    peopleOnBus -= busStops[i][1];
  }
  //Return the total left in the tracking variable once done
  return peopleOnBus;
}