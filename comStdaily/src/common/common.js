export default {
  getTime: nTime => {
    // return new Date(parseInt(nTime) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
    let date = new Date(parseInt(nTime));
    let year = date.getFullYear();//获取完整的年份(4位,1970)
    let month = date.getMonth();//获取月份(0-11,0代表1月,用的时候记得加上1)
    let day = date.getDate();//获取日(1-31)
    let time = date.getTime();//获取时间(从1970.1.1开始的毫秒数)
    let hour = date.getHours();//获取小时数(0-23)
    let minute = date.getMinutes();//获取分钟数(0-59)
    let second = date.getSeconds();//获取秒数(0-59)
    let newTime;
    return newTime = year + "/" + month + "/" + day + "     " + hour + ":" + minute + ":" + second
  },
  getItemValue(item, data) {
    let regTime = /^\/Date\((.*)\)\/$/;
    for (let i = 0; i < item.length; i++) {
      if (item[i].Key == data.id) {
        if(data.type == "DateTime"){
          regTime.test(item[i].Value);
          return this.$common.getTime(RegExp.$1);
        } else if(data.type == "Picklist"){
          return item[i].Value.Value
        } else if(data.type == "Customer"){
          return item[i].Value.Name
        } else if(data.type == "Virtual"){
          return item[i].Value.Value
        } else if(data.type == "Lookup"){
          return item[i].Value.Name
        } else if(data.type == "Owner"){
          return item[i].Value.Name
        }else {
          return item[i].Value
        }
      }
    }
  }
}