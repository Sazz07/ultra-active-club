// use local storage to manage cart data
const addToDb = restTime => {
    let restTimeObj = {};
  
    restTimeObj = restTime;
  
    localStorage.setItem('restTimeObj', JSON.stringify(restTimeObj));
  };
  
  const getStoredObj = () => {
    let restTimeObj = 0;
  
    //get the shopping cart from local storage
    const storedrestTimeObj = localStorage.getItem('restTimeObj');
  
    if (storedrestTimeObj) {
      restTimeObj = JSON.parse(storedrestTimeObj);
    }
  
    // console.log('inside controller:');
    // console.log(typeof breakTimeObj);
  
    return restTimeObj;
  };
  
  export { addToDb, getStoredObj };
  