const http = require('http');
const HEADER_TO_READ = "numberstogenerate";
const MAX_POINTS_TO_GENERATE = 1000000;

const requestListener = function (req, res) {
  // CORS set-up
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  
  // pre-flight requests
  if (req.method=== 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // read header from req and validate (ensure max value is respected)
  const { headers } = req;
  const numbersToGenerate = headers[HEADER_TO_READ];
  if (!numbersToGenerate) {
    res.writeHead(400);
    res.end(`Missing ${HEADER_TO_READ} header`);
    return;
  }
  let N = Number(numbersToGenerate);
  if (!N) {
    res.writeHead(400);
    res.end(`Invalid ${HEADER_TO_READ} header. Must be a number`);
    return;
  }
  if (N > MAX_POINTS_TO_GENERATE) {
    res.writeHead(400);
    res.end(`MAX ${HEADER_TO_READ} header reached. MAX Value is ${MAX_POINTS_TO_GENERATE}. Pro tip: Use multiple batches`);
    return; 
  }  

  //create N random numbers
  let result = [];
  for (let i=0; i<N ;i++) {
    let x = Math.random();
    let y = Math.random();
    result.push({x,y});
  }
  res.writeHead(200);
  res.end(JSON.stringify(result));
  return;
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log("(http) listening on port 8080")











