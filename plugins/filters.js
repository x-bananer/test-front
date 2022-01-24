import Vue from 'vue';

Vue.filter('declOfNum', (value) => {
  value = Math.abs(value) % 100;
  let n = value % 10;
  if (value > 10 && value < 20) { return "лет";}
  if (n > 1 && n < 5) { return "года"; }
  if (n == 1) { return "год"; }
  return "лет";
});

Vue.filter('declOfNum', (value) => {
  value = Math.abs(value) % 100;
  let n = value % 10;
  if (value > 10 && value < 20) { return "человек"; }
  if (n > 1 && n < 5) { return "человека"; }
  if (n == 1) { return "человек"; }
  return "человек";
});


