# NewGen-test-task

На сайте есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.
## Например: ##
* от 100 до 200 рублей;
* от 500 рублей;
* до 400 рублей.

Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.
## Требование: ##
Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене?

## Решение ##
Решение довольно простое. Представляем искомый и ценовой диапазон в виде двух отрезков. 
Релевантны все курсы, ценовой диапазон которых входит в коллизию с пользовательским.
Коллизия определяется простым сравнением крайних точек диапазонов.
