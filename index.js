const driver = 'bob';

function log() {
  console.log('this code was called');

  console.log(driver);

  console.log(driver, 'is the driver variable name');  
}

module.exports = {
  driver,
  log
}