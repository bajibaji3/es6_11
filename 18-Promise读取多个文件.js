//引入 fs 模块
const fs = require('fs');

//使用Promise封装
const p = new Promise((resolve, reject) => {
  fs.readFile('./resources/1.md', (err, data) => {
    resolve(data);
  })
});

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/2.md', (err, data) => {
      resolve([value, data]);
    });
  });
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/3.md', (err, data) => {
      value.push(data)
      resolve(value);
    });
  });
}).then(value => {
  console.log(value.toString());
})