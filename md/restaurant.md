## 取得所有餐廳資料(get):https://cwslbot.herokuapp.com/res/test

### 資料格式:

```javascript
[
    {
        "_id":"61bdba7a7d93cc8a5e2d15dc",
        "owner":"admin",
        "name":"老八食堂",
        "add":"XX街xx號",
        "img":"https://cdn.discordapp.com/attachments/476745393032658944/921718285333069864/0bd882957e79dbde.jpg",
        "cat":"美式餐廳",
        "star":1,
        "menu":[
            {
                "name":"小漢堡",
                "price":"128",
                "img":"https://cdn.discordapp.com/attachments/476745393032658944/921718701944893480/29185a41eaa72dda1c52947e713bb55397c5d923.jpg"
            }
        ],
        "__v":0
    }
]
```

### 範例:

```javascript
axios.get('https://cwslbot.herokuapp.com/res/test')
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```



## 取得特定餐廳資料(put):https://cwslbot.herokuapp.com/res/findResByName

### 上傳格式

```javascript
{
    "owner":"admin"
}
```

### 範例:

```javascript
axios.put('https://cwslbot.herokuapp.com/res/editRes',{
    "owner":"admin"
})
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```



## 上傳餐廳資料(post):https://cwslbot.herokuapp.com/res/addRes

### 上傳格式

```javascript
//格式Schema
const res=new Schema({
    name:String,
    add:String,
    img:String,
    cat:String,
    star:Number,
    menu:Array,
})

//範例:
{
    "owner":"admin",
    "name":"老八食堂",
    "add":"XX街xx號",
    "img":"https://cdn.discordapp.com/attachments/476745393032658944/921718285333069864/0bd882957e79dbde.jpg",
    "cat":"美式餐廳",
    "star":1,
    "menu":[
        {
            "name":"小漢堡",
            "price":"128",
            "img":"https://cdn.discordapp.com/attachments/476745393032658944/921718701944893480/29185a41eaa72dda1c52947e713bb55397c5d923.jpg"
        }
    ]
}
```

### 範例:

```javascript
axios.post('https://cwslbot.herokuapp.com/res/addRes',{
    "owner":"CWL",
    "name":"爆哥拌飯",
    "add":"北新路58號",
    "img":"https://cdn.discordapp.com/attachments/643047433407823888/922059220105445396/9k.png",
    "cat":"印度餐廳",
    "star":5,
    "menu":[
        {
            "name":"爆哥經典拌飯",
            "price":"99",
            "img":"https://cdn.discordapp.com/attachments/643047433407823888/922060111466364938/unknown.png"
        }
    ]
})
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```



## 修改餐廳資料(put):https://cwslbot.herokuapp.com/res/editRes

### 上傳格式

```javascript
//範例:
{
    "id":"61bdba7a7d93cc8a5e2d15dc"
    "data":{
    	"owner":"admin",
        "name":"你媽食堂",
        "add":"XX街xx號",
        "img":"https://cdn.discordapp.com/attachments/476745393032658944/921718285333069864/0bd882957e79dbde.jpg",
        "cat":"美式餐廳",
        "star":1,
        "menu":[
            {
                "name":"小漢堡",
                "price":"128",
                "img":"https://cdn.discordapp.com/attachments/476745393032658944/921718701944893480/29185a41eaa72dda1c52947e713bb55397c5d923.jpg"
            }
        ]
    }
}
```

### 範例:

```javascript
axios.put('https://cwslbot.herokuapp.com/res/editRes',{
    "id":"61befe2253b9604165638e61",
    "data":{
        "owner":"LWR",
        "name":"爆哥拌飯",
        "add":"北新路58號",
        "img":"https://cdn.discordapp.com/attachments/643047433407823888/922059220105445396/9k.png",
        "cat":"印度餐廳",
        "star":5,
        "menu":[
            {
                "name":"爆哥經典拌飯",
                "price":"99",
                "img":"https://cdn.discordapp.com/attachments/643047433407823888/922060111466364938/unknown.png"
            }
        ]
    }
})
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
```



## 刪除餐廳資料(delete):https://cwslbot.herokuapp.com/res/delRes
### 上傳格式

```javascript
//範例:
{
	"id":"61bdba7a7d93cc8a5e2d15dc"
}
```

### 範例:

```javascript
axios.delete("https://cwslbot.herokuapp.com/res/delRes", {
    headers: {
        Authorization: "***" 
    },
    data: {
        "id":"61befe1f53b9604165638e5d"
    }
}).then( (response) => console.log(response.data)).catch( (error) => console.log(error))
```
