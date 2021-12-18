## 取得資料(get):https://cwslbot.herokuapp.com/res/test





## 上傳資料(post):https://cwslbot.herokuapp.com/res/addRes

### 上傳格式

```javascript
const res=new Schema({
    name:String,
    add:String,
    img:String,
    cat:String,
    star:Number,
    menu:Array,
})
範例:
{
    "name":"老八食堂",
    "add":"XX街xx號",
    "img":"https://i.imgur.com/LrMama2.jpg",
    "cat":"美式餐廳",
    "star":1,
    "menu":[
        {
            "name":"小漢堡",
            "price":"128",
            "img":"https://i.imgur.com/5AT0wYn.jpg"
        }
    ]
}
```



