import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
  button: document.querySelector('button'),
  
}

refs.form.addEventListener('submit', onFormSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


function onFormSubmit(e) {
  e.preventDefault();

  let evtDelay = Number(refs.delay.value);
  let evtStep = Number(refs.step.value);
  let evtAmount = Number(refs.amount.value);
  
  for (let i = 1; i <= evtAmount; i++) {

   
    createPromise(i, evtDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
       })
    
      .catch(({ position, delay }) => {
     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    evtDelay += evtStep;
   
    }
}



