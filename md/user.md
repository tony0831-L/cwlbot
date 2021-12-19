
## 取得所有用戶資料(get):https://cwslbot.herokuapp.com/user/test

### 資料格式:

```javascript
[
    {
        "_id":"61bde33627bb0155c33a8860",
        "name":"admin",
        "pass":"password",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/215px-Vue.js_Logo_2.svg.png",
        "__v":0
    }
]
```

### 範例:

```javascript
axios.get('https://cwslbot.herokuapp.com/user/test')
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```



## 用戶註冊(post):https://cwslbot.herokuapp.com/user/regi

### 上傳格式

```javascript
//格式Schema
const users=new Schema({
    name:String,
    pass:String,
    img:String
})
//範例:
{
	"name":"admin",
    "pass":"password",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/215px-Vue.js_Logo_2.svg.png",
}
```

### 範例:

```javascript
axios.post('https://cwslbot.herokuapp.com/user/regi',{
    "name":"CWL",
    "pass":"123456",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/215px-Vue.js_Logo_2.svg.png",
})
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```



## 用戶登入(post):https://cwslbot.herokuapp.com/user/sign

### 上傳格式

```javascript
//範例:
{
	"name":"admin",
    "pass":"password",
}
```

### 範例:

```javascript
axios.post('https://cwslbot.herokuapp.com/user/sign',{
    "name":"LWR",
    "pass":"123456"
})
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```



## 刪除用戶(delete):https://cwslbot.herokuapp.com/user/del

### 上傳格式

```javascript
//範例:
{
    "name":"admin",
}
```

### 範例:

```javascript
axios.delete("https://cwslbot.herokuapp.com/user/del", {
    headers: {
        Authorization: "***" 
    },
    data: {
        "name":"admin"
    }
}).then( (response) => console.log(response.data)).catch( (error) => console.log(error))
```



## 修改用戶資料(put):https://cwslbot.herokuapp.com/user/edit

### 上傳格式

```javascript
//範例:
{
    "name":"admin"
    "data":{
        "name":"admin1",
        "pass":"password",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/215px-Vue.js_Logo_2.svg.png",
	}
}
```

### 範例

```javascript
axios.put('https://cwslbot.herokuapp.com/user/edit',{
    "name":"LWR",
    "data":{
        "name":"CWL",
        "pass":"123456789",
        "img":"https://cdn.discordapp.com/attachments/639611642945994772/922061054442352640/267214691_411988757337283_8397226962135184915_n.png",
    }
})
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```

