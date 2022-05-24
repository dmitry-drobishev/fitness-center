// const membership = document.querySelector('.membership');
// const membershipButtonsContainer = membership.querySelector('.membership__period-list');
// const membershipPeriodList = membership.querySelectorAll('.membership__period-item');
// const membershipOptionList = membership.querySelectorAll('.membership__option-list');

// function hideAll() {

//   for (let i = 0; i < membershipPeriodList.length; i++) {
//     membershipPeriodList[i].classList.remove('membership__period-item--active');
//   }

//   for (let i = 0; i < membershipOptionList.length; i++) {
//     membershipOptionList[i].classList.add('membership__option-list--disable');
//   }
// }

// const chooseMembership = () => {
//   membershipButtonsContainer.addEventListener('click', (evt) => {
//     if (evt.target.tagName !== ('LI')) {
//       return 0;
//     }

//     if (evt.target.classList.contains('membership__period-item--active')) {
//       return 0;
//     } else {
//       hideAll();
//       evt.target.classList.add('membership__period-item--active');
//       const numb = evt.target.id;
//       membershipOptionList[numb].classList.remove('membership__option-list--disable');
//     }
//     return 1;
//   });
// };

// export {chooseMembership};
