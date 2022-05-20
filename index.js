// На сайте UniPage есть подборка интересных языковых курсов.
// У каждого курса есть цена, которая является диапазоном.
// Например:
// от 100 до 200 рублей;
// от 500 рублей;
// до 400 рублей.
//
// Пользователю сайта нужно найти подходящие ему курсы.
// Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.
// Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене?
// Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.

// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, // от 0 до 100
    { name: "Courses in Germany", prices: [500, null] }, // от 500
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] }, //до 400
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] }, //Без диапазона, примем за "От 0 до Бесконечности"
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [null,null];
let requiredRange5 = [50, 123];

let range = requiredRange5;

// Представляем диапазон цен и диапазон поиска как отрезки.
// Если имеется коллизия отрезков - следовательно курс подходит.
const filterFun = (item) => {
    const min = item.prices[0]; // Минимальные null условно являются 0
    const max = item.prices[1] ? item.prices[1]  : Infinity; // Максимальные null - это бесконечность
    if (!range[1]) range[1] = Infinity;

    return (
        (range[0] <= min && range[1] >= min) || //Если минимальная граница в искомом диапазоне
        (range[0] <= max && range[1] >= max) || //Если максимальная граница в искомом диапазоне
        (max >= range[1] && min <= range[0])  //Если сам диапазон внутри границ
    )
}
let result = courses.filter(filterFun)

console.log(result);