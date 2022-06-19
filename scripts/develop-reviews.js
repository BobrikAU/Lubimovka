const [left, right] = document.querySelectorAll('.reviews__b');
const reviews = document.querySelector('.reviews__list');
const rootStyle = getComputedStyle(document.querySelector(':root'));
const review = document.querySelector('.reviews__item');
let listMovementStep = getListMovementStep();
let numberOfReviewsViewed = 0;

//установление начального положения списка отзывов (слайдера)
reviews.style.left = '0px';

//определение шага движения списка отзывов (слайдера)
function getListMovementStep() {
  return parseInt(getComputedStyle(review).width, 10) + parseInt(getComputedStyle(review).marginRight, 10);
}

//переопределение положения списка отзывов (слайдера) и шага его движения при изменении ширины окна
window.addEventListener('resize', () => {
  listMovementStep = getListMovementStep();
  reviews.style.left = listMovementStep * numberOfReviewsViewed + 'px';
})

//перемещение списка отзывов (слайдера) при нажатии на кнопки
left.addEventListener('click', () => {
  reviews.style.left = parseInt((getComputedStyle(reviews).left), 10) + listMovementStep + 'px';
  numberOfReviewsViewed +=1;
})
right.addEventListener('click', () => {
  reviews.style.left = parseInt((getComputedStyle(reviews).left), 10) - listMovementStep + 'px';
  numberOfReviewsViewed -=1;
})
