'use strict';

var i = 3;

while (i) {
  alert( i-- ); // выведет сначала 3, после уменьшение i , оно станет 2 и выведет 2 и так до нуля, ноль будет как false
}

var i = 0;
while (++i < 5) alert( i ); // выведет от 1 до 4, так как изначально i увеличится на 1 потом 2,3,4 потом до 5 , проверка, 5 < 5 - false, отсановка.
var i = 0;
while (i++ < 5) alert( i ); // выведет от 1 до 5, так как увеличив 0 до 1, ++ вернет старое значение и так до 5. как увеличится веренет старое значение поэтому вернет  и 5.

for (var i = 0; i < 5; ++i) alert( i ); // 
for (var i = 0; i < 5; i++) alert( i ); //  нету разници между i++ ++i так как значение i не используется, увеличение оператора работает независимо о устловия
