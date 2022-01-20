const fs = require('fs');

//读取第一个文件
function read1() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/1.md', (err, data) => {
      if (err)
        reject(err);
      resolve(data);
    });
  });
}

//读取第二个文件
function read2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/2.md', (err, data) => {
      if (err)
        reject(err);
      resolve(data);
    });
  });
}

//读取第三个文件
function read3() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/3.md', (err, data) => {
      if (err)
        reject(err);
      resolve(data);
    });
  });
}

async function main() {
  let res1 = await read1();
  let res2 = await read2();
  let res3 = await read3();

  console.log(res1.toString());
  console.log(res2.toString());
  console.log(res3.toString());
}

main();

