## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。


* <img src="url" /> 插入圖片
* <b> 讓字形成粗體
* <i> 讓字形成斜體


## 請問什麼是盒模型（box modal）

由外而內的content->padding->border->Margin盒狀結構

* content：box的內容
* padding：box邊緣跟content間的距離
* border：box的邊線
* Margin:box跟其他區塊的距離


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

* display: inline box大小根據內容大小變化，無法設定的width、height的屬性
* display: block 未設定前自己佔據ㄧ行，設定後可以隨意調整box的width、height屬性
* display: inline-block box的大小根據內容變化，可以設定idth、height的屬性

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

* position: static 未設定前的默認排列模式
* position: relative 以原本的位置為基準點進行微調
* position: absolute 以上一層有設定relative/absolute/fixed的區塊為基準點的定位模式（如果上一層皆無設定，就以body為基準點）
* position: fixed  以screen原點為基準點的定位模式，可以將區塊固定在screen的特定區域