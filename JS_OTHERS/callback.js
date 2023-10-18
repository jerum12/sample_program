const displayLogs = () => {
   var a = "";
   console.log('hello world');
};

const transact = (a, b, callBack) => {
  const result = a + b;
  console.log(result);
    callBack();
};

transact(1, 2,displayLogs());

