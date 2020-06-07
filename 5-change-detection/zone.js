

const oldSetTimeout = setTimeout;
setTimeout = (callback, timer) => {
  console.log('START');
  oldSetTimeout(() => {
    callback();
    console.log('FINISH')
  }, timer);
};



//----------------------------------------------------------------

setTimeout(_ => {
  console.log('DONE');
}, 3000);