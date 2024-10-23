// Massivga oid masalalr
// 1-misol
// const oquvchilar = [
//     { ism: "Ali", yosh: 17 },
//     { ism: "O'ktam", yosh: 18 },
//     { ism: "Sardor", yosh: 19 }
// ];
// console.log(oquvchilar);


// 2-misol
// const mahsulotlar = [
//     { nom: "Olma", narx: 100 },
//     { nom: "Nok", narx: 150 },
//     { nom: "Banan", narx: 200 }
// ];
// let res = mahsulotlar.map(function(v) {
//     return v.narx * 0.2
// })
// console.log(res);


// 3-misol
// const oquvchilar = [
//     { ism: "Dilorom", yosh: 20 },
//     { ism: "Shahrizoda", yosh: 17 },
//     { ism: "Akbar", yosh: 19 }
// ];
// let res = oquvchilar.filter(function(v) {
//     return v.yosh >= 18
// })
// console.log(res);


// 4-misol
// const kitoblar = [
//     { nom: "Kitob A", muallif: "Said Ahmad" },
//     { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//     { nom: "Kitob C", muallif: "Murodjon Abduqodirov" }
// ];

// kitoblar[0].muallif = kitoblar[0].muallif.toLowerCase();
// kitoblar[1].muallif = kitoblar[1].muallif.toLowerCase();
// kitoblar[2].muallif = kitoblar[2].muallif.toLowerCase();

// console.log(kitoblar);


// 5-misol
// const xodimlar = [
//     { ism: "Rashid", ishHaqi: 3000 },
//     { ism: "Dilshod", ishHaqi: 2500 },
//     { ism: "Farhod", ishHaqi: 4000 }
// ];
// let res = xodimlar.map(function(v) {
//         return v.ishHaqi * 0.1
//     })
//     console.log(res);


// 6-misol
// let oquvchilar = [
//     { ism: "Jasur", yosh: 21 },
//     { ism: "Sardorbek", yosh: 22 },
//     { ism: "Azizbek", yosh: 20 }
// ];
// const res = oquvchilar.map(function(oquvchi) {
//     return { ...oquvchi, ism: "Mr. " + oquvchi.ism };
// });

// console.log(res);


// 7-misol
// const avtomobillar = [
//     { nom: "Tesla", tur: "elektr" },
//     { nom: "Toyota", tur: "benzin" },
//     { nom: "Nissan Leaf", tur: "elektr" }
// ];
// let res = avtomobillar.filter(function(v) {
//     return v.tur == 'elektr'
// })
// console.log(res);


// 8-misol
// const foydalanuvchilar = [
//     { ism: "Aziz", email: "aziz@example.com" },
//     { ism: "Nodir", email: "nodir@example.com" },
//     { ism: "Malika", email: "malika@example.com" }
// ];
// console.log(foydalanuvchilar);


// 9-misol
// const mahsulotlar = [
//     { nom: "Televizor", narx: 500 },
//     { nom: "Konditsioner", narx: 700 },
//     { nom: "Butler", narx: 300 }
// ];


// let max = mahsulotlar[0];

// for (let i = 1; i < mahsulotlar.length; i++) {
//     if (mahsulotlar[i].narx > max.narx) {
//         max = mahsulotlar[i];
//     }
// }

// console.log(max);


// 10-misol
// const oquvchilar = [
//     { ism: "Zarina", ball: 85 },
//     { ism: "Doston", ball: 90 },
//     { ism: "Gulbahor", ball: 95 }
// ];
// let res = oquvchilar.filter(function(v) {
//     return v.ball = 100
// })
// console.log(res);



// Yozuvga iod misollar
// 1-misol
// function toLowerCase(str) {
//     console.log(str.toLowerCase());
// }
// let arr = "HELLO";
// console.log(toLowerCase(arr));

// 2-misol
// function Length(str) {
//     console.log(str.length);
// }
// let arr = "hello"
// console.log(Length(arr));


// 4-misol
// function short(str) {
//     console.log(str.slice(0, 10));
// }
// short("Assalomu Alaykum")


// 5-misol
// function replace(str) {
//     console.log(str.replace(/a/g, "e"));
// }
// replace("Hallo");




// Classda oid misollar
// 1-misol
// class User {
//     constructor(name, age, weight)  {
//         this.name = name;
//         this.age = age;
//         this.weight = weight
//     }
// }
// let john = new User("John", 45, 70)
// console.log(john);

// 2-misol
// class User {
//     constructor(name, isMarried, weight)  {
//         this.name = name;
//         this.isMarried = isMarried;
//         this.weight = weight
//     }
// }
// let Diana = new User("Diana", true, 50)
// console.log(Diana);

// 3-misol
// class User {
//     constructor(name, national, weight)  {
//         this.name = name;
//         this.national = national;
//         this.weight = weight
//     }
// }
// let john = new User("John", "uzbek", 70)
// console.log(john);

// 4-misol
// class User {
//     constructor(name, family, weight)  {
//         this.name = name;
//         this.family = family;
//         this.weight = weight
//     }
// }
// let john = new User("John", "Alex", 90)
// console.log(john);

