// JavaScript is a programming language as well as a scripting language, where we put logics in the websites using JavaScript. Think of JavaScript as a brain of the website. 

// JavaScripts runs on Website Console, By linking in HTML file, By Node JS 

// JavaScript holo khub weakly typed language, jar karone JS e amra amon onek kichu likhe feli jegulo abar javascript run oo kore fele without any error, tai ei vul theke bachar jonno amra "use strict" use kori

// amra "use strict" use kori akdm prothom line e. 

// "use strict"
// let age = 10; 
// let name = "abcd";
// console.log(age);

// Word vs Keyword -> Keyword mane javascript e jar special kichu meaning royeche, Word mane javascript er kache jar kono meaning nei, jeta amra normal use kori. 

// Ex: Hahahaha -> Word, let/var/array/object/function egulo keyword 

// Variable : akta box jekhane amra data store kori, sei data amra abar reuse oo korte pari, change oo korte pari, update oo korte pari. 

// Variable declear kori 3 te keyword diye -> var , let, const

// let name = "ayan; // Ekhane let holo keyword jeta diye amra variable declear korlam, name holo variable er name, ar "ayan" holo variable er value .

// var -> amra reassign korte pari, abar re-declear oo korte pari, var holo function scoped, var holo purono technique jeta amra eriye cholbo. 

// let -> amra let diye reassign to korte parbo kintu re-declear korte parbo na, let holo blocked scoped 

// const -> eta constatnt, amra kono vabei change korte parbo na. , etao block scoped. 


// Hoisting & TDZ (Temporal Dead Zone)
// console.log(age); // error asbe, karon nicher variable ta dui vabe venmge hoisting hoyeche, kintu jehetu amra let use korechi tai let e amra undefined pabo na, error pabo je "cannot access variable before initialize"

// let age = 10; 
// console.log(age);  // ekhane erroe asbe na, karon var diye variable declear korle seta hoisted to hoy, kintu opore declearation part e autometic value undefined set hoye jay. 

// var age = 10;

// variable declear ar initialize howar agei jodi amra value access korte chai, tahole sei variable dui vag e vag hoy, jeta ke amra HOISTING boli. 
// Ar, hoisting howa theke suru kore, value assign howa line er age porjonto area ke amra boli TDZ -> Temporal Dead Zone 