'use strict';

if (-1 || 0) alert( 'первое' ); // выполнится
if (-1 && 0) alert( 'второе' ); // не выполнится
if (null || -1 && 1) alert( 'третье' ); // выполнится
