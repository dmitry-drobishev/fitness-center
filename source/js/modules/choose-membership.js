const membership = document.querySelector('.membership');
const membershipButtonsContainer = membership.querySelector('.membership__period-list');
const membershipPeriodList = membership.querySelectorAll('.membership__period-button');
const membershipOptionList = membership.querySelectorAll('.membership__option-list');

function hideAll() {

  for (let i = 0; i < membershipPeriodList.length; i++) {
    membershipPeriodList[i].classList.remove('membership__period-button--active');
  }

  for (let i = 0; i < membershipOptionList.length; i++) {
    membershipOptionList[i].classList.add('membership__option-list--disable');
  }
}

const chooseMembership = () => {
  membershipButtonsContainer.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('membership__period-button')) {
      return 0;
    }

    if (evt.target.classList.contains('membership__period-button--active')) {
      return 0;
    } else {
      hideAll();
      evt.target.classList.add('membership__period-button--active');
      const numb = evt.target.getAttribute('data-num');
      membershipOptionList[numb].classList.remove('membership__option-list--disable');
    }
    return 1;
  });
};

export {chooseMembership};
