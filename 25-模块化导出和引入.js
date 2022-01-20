/******分别暴露******/
// export let name = 'peiqi';
//
// export function change() {
//   console.log('qiaozhi');
// }

/******统一暴露******/
// let name = 'peiqi';
//
// function change() {
//   console.log('qiaozhi');
// }
//
// export {name, change}

/******默认暴露******/
export default {
  name: 'peiqi',
  change: function () {
    console.log('qiaozhi');
  }
}

