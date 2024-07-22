// первое задание
function hidePhone(phoneNumber) {
   if (phoneNumber.length > 2) {
       return phoneNumber.slice(0, -2) + "xx";
   } else {
       return phoneNumber;
   }
}

let phone = "+996 555 123 123";
let hiddenPhone = hidePhone(phone);
console.log(hiddenPhone); 



//второе задание
function myReverse(str) {
   let reversedStr = " ";
   for (let i = str.length - 1; i >= 0; i--) {
       reversedStr += str[i];
   }
   return reversedStr;
}

let originalStr = "123456789";
let reversedStr = myReverse(originalStr);
console.log(reversedStr);  