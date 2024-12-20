const button = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastPercent = document.querySelector('.current-forecast p');
const forecastsContainer = document.querySelector ('.forecasts');
const forecastTemplate = document.querySelector('#forecast-item');

function generateRandomPrediction() {
    const randomInt = Math.floor(Math.random() * 8);
    let prediction = "";

    if (randomInt === 0) {
        prediction = "Сегодня будет хороший день!";
    } else if (randomInt === 1) {
        prediction = "Впереди тебя ждет безграничное счастье!";
    } else if (randomInt === 2) {
        prediction = "Миллионером станешь ты и купишь все свои мечты!";
    } else if (randomInt === 3) {
        prediction = "Не бойся идти навстречу новому!";
    } else if (randomInt === 4) {
        prediction = "Ты сдашь все экзамены!";
    } else if (randomInt === 5) {
        prediction = "Все твои мечты исполнятся!";
    } else if (randomInt === 6) {
        prediction = "В Новом году сбудется все, что ты задумал!";
    } else if (randomInt === 7) {
        prediction = "В Новом году тебя ожидает интересная поездка!"
    }
    
    return prediction;
}

    
function generatePercent(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


button.addEventListener('click', function generatePrediction () {
    const prediction = generateRandomPrediction();
    const percent = generatePercent(50,101);

    currentForecastTitle.textContent = prediction;
    currentForecastPercent.textContent = `процент вероятности: ${percent}%`;

    const forecastItem = forecastTemplate.content.cloneNode(true);
    forecastItem.querySelector('h3').textContent = prediction;
    forecastItem.querySelector('p').textContent = `процент вероятности: ${percent}%`;

    forecastsContainer.prepend(forecastItem);
});
/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
