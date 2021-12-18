# 偉倫外賣後端:

## 欄位說明:

### 	1._id為後端生成,新增時不需填入,後續須使用其操作。

### 	2.__v為後端生成無須理會,後續操作無需使用。

### 	3.其餘值請自行填入,為保證頁面完整性請不要填入空值,竟可能在前台阻擋用戶輸入空值。



## 取得資料(get):https://cwslbot.herokuapp.com/res/test

### 資料格式:

```javascript
[
    {
        "_id":"61bdba7a7d93cc8a5e2d15dc",
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



## 上傳資料(post):https://cwslbot.herokuapp.com/res/addRes

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

## 修改資料(post):https://cwslbot.herokuapp.com/res/editRes

### 上傳格式

```
//範例:
{
    "id":"61bdba7a7d93cc8a5e2d15dc"
    "data":{
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



## 刪除資料(post):https://cwslbot.herokuapp.com/res/delRes

### 上傳格式

```
//範例:
{
	"id":"61bdba7a7d93cc8a5e2d15dc"
}
```

