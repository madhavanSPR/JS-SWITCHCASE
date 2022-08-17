let amount = 61000;

switch (true) {
  case amount > 10000 && amount < 60000:
    console.log('BUY ANDROID MOBILE');
    break;
  case amount >= 60000:
    console.log('BUY IPHONE MOBILE');
    break;
  case amount > 5000 && amount < 10000:
    console.log('BUY BASIC PHONE');
    break;
  default:
    console.log("YOU CAN'T AFFORD PHONE NOW");
}
