'use strict';

var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 в а увеличилось значение, но вернуло предыдущее
d = b++; alert(d); // 1 значение увеличилось  на 1, вернуло 2

c = (2+ ++a); alert(c); // 5 а = 2. то есть ( 2 + 3)
d = (2+ b++); alert(d); // 4 b увеличилось, но вернуло предідущее значение

alert(a); // 3 понятно до єтого
alert(b); // 3 вернуло увеличенное значение