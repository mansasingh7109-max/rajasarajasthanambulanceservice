/*
⚠️ OLD CODE BACKUP - 09/07/2026 SE PEHLE WALA - SAFE - KUCH HATAYA NAHI - OTHER REPO - GitHub Pages Wala

// constants.js - OTHER REPO - Alag Website Ke Liye - GitHub Pages Version
if (typeof CART_KEY === 'undefined') {
  var CART_KEY = "movePracCart_v2";
  window.CART_KEY = CART_KEY;
}
if (typeof MYCHOICE_KEY === 'undefined') {
  var MYCHOICE_KEY = "movePracChoice_v2";
  window.MYCHOICE_KEY = MYCHOICE_KEY;
}
if (typeof BASE_URL === 'undefined') {
  var BASE_URL = "https://mansasingh7109-max.github.io/move-prac-7-10-11-won";
  window.BASE_URL = BASE_URL;
}
console.log("✅ Constants loaded - OTHER REPO - GitHub Pages");

OLD CODE BACKUP END - 09/07/2026 SAFE
*/

// constants.js - 2nd REPO - Alag Domain - Firebase Hosting - FINAL - Old Code Save With Update - 3 File Safe
console.log("✅ constants.js - 2nd REPO - Firebase Domain - Old Code Save With Update");

if (typeof CART_KEY === 'undefined') { var CART_KEY = "movePracCart_v2"; window.CART_KEY = CART_KEY; }
if (typeof MYCHOICE_KEY === 'undefined') { var MYCHOICE_KEY = "movePracChoice_v2"; window.MYCHOICE_KEY = MYCHOICE_KEY; }
if (typeof ADMIN_WHATSAPP === 'undefined') { var ADMIN_WHATSAPP = "918003200377"; window.ADMIN_WHATSAPP = ADMIN_WHATSAPP; }

if (typeof BASE_URL === 'undefined') { 
  // Auto-detect - GitHub Pages ho ya Firebase Hosting ho - dono pe chalega
  let host = window.location.hostname;
  if(host.includes('github.io')){
    var BASE_URL = "https://mansasingh7109-max.github.io/move-prac-7-10-11-won";
  } else {
    var BASE_URL = "https://move-prac-7-10-11-won.web.app"; // ✅ New Firebase Domain - FINAL
  }
  window.BASE_URL = BASE_URL; 
}

window.CONSTANTS_LOADED = true;
window.SECRETS_LOADED = true;

console.log("✅ Constants loaded - 2nd REPO - BASE_URL = "+window.BASE_URL+" - Alag Website - LAST LINE OK");