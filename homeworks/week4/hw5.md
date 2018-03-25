# 作業



## hw5：簡答題

1. 什麼是 DOM？
DOM（Document Object Model）是瀏覽器拿到html後轉變成的樹狀物件結構
2. 什麼是 Ajax？
Ajax是一種無需重新加載頁面，也能更新網頁資料的技術
3. HTTP method 有哪幾個？有什麼不一樣？
HTTP method有8種
GET：向server獲取資訊，發送要求的方式是把資訊加入url中
POST：向server傳送client端資訊
HEAD：向server要求head訊息，而不是全部的資料
PUT：取代server端資料
DELETE:刪除server端資料
CONNECT:讓server跟代理伺服器連線
OPTIONS:問serveer端提供什麼樣的method（應該是這樣吧）
TRACE：請serveer端回覆收到的request是什麼（用於測試）
4. `GET` 跟 `POST` 有哪些區別，可以試著舉幾個例子嗎？
GET：藉由把資料放入url的方式更server獲取資訊（例如：
POST：藉由把資料放入header的方式更server獲取資訊（例如：帳號密碼這些不適合被看到的資訊就用POST送）
5. 什麼是 RESTful API？

6. JSON 是什麼？
JSON（JavaScript Object Notation）是一種傳遞資訊用的純文字資料結構
7. JSONP 是什麼？
JSONP(JOSN with padding)是一種利用script跨網域拿資料的方式
8. 要如何存取跨網域的 API？
* 利用JSONP
* server端在header加上Access-Control-Allow-Origin
