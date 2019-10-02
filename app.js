//start with node -e require('./app').handler({}) on console

exports.handler =  async function(event, context) {
    try
    {
    const r1 = await callapi1(false);
    console.log("R1:",r1);
    const r2 = await callapi1(true);
    console.log("R2:",r2);
    }
    catch (e)
    {
        console.log(e);
    }
  console.log("ende");
}

async function callapi1(error){
    return new Promise(function(resolve,reject){
        if (error) {
            reject("Fehler");
        }
        else
        {
          resolve('ababababa');  
        } 
    })
}