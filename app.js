// 6-mashq

let ism = prompt("Ismingizni kiriting:");
let parol = prompt("Parolni kiriting:");


if (ism === "admin" && parol === "12345") {
    console.log("Xush kelibsiz, admin!");
} else {
    console.log("Foydalanuvchi yoki parol xato!!!");
}

// 7-mashq

let yil = prompt("Yilni kiriting:");


yil = Number(yil);


if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
    console.log(yil + " kabisa yilidir.");
} else {
    console.log(yil + " kabisa yili emas.");
}

// 8-mashq

let son1 = prompt("Birinchi sonni kiriting:");
let son2 = prompt("Ikkinchi sonni kiriting:");


son1 = Number(son1);
son2 = Number(son2);


if (son1 > 0 && son2 > 0) {
    console.log("Ikkalasi ham musbat");
} else if (son1 < 0 || son2 < 0) {
    console.log("Manfiy sonlar");
} else {
    console.log("Kiritilgan sonlar orasida nol mavjud yoki noto'g'ri kiritilgan.");
}

// 9-mashq

let son12 = prompt("Sonni kiriting:");


son12 = Number(son12);


function raqamlarYigindisi(son12) {
    let yigindi = 0;
    while (son12 != 0) {
        yigindi += son12 % 10;
        son12 = Math.floor(son12/ 10);
    }
    return yigindi;
}


let yigindi = raqamlarYigindisi(son1);


if (son % 2 === 0 || yigindi % 2 === 0) {
    console.log("Juft son");
} else {
    console.log("Juft emas");
}

// 10-mashq

let son = prompt("Musbat son kiriting:");


son = Number(son);


if (son > 0) {
    if (son % 3 === 0 && son % 7 === 0) {
        console.log("3 va 7 ga karrali");
    } else if (son % 3 === 0) {
        console.log("3 ga karrali");
    } else if (son % 7 === 0) {
        console.log("7 ga karrali");
    } else {
        console.log("Na 3 ga, na 7 ga karrali emas");
    }
} else {
    console.log("Iltimos, musbat son kiriting.");
}
// 11-mashq
 
let jamshidBall = 63;
let shuxratBall = 71;
let anvarBall = 92;


function bahoHisobla(ball) {
    if (ball >= 55 && ball < 70) {
        return 3;
    } else if (ball >= 70 && ball < 88) {
        return 4;
    } else if (ball >= 88 && ball <= 100) {
        return 5;
    } else {
        return "Noto'g'ri ball kiritilgan";
    }
}


console.log("Jamshidning bahosi: " + bahoHisobla(jamshidBall));
console.log("Shuxratning bahosi: " + bahoHisobla(shuxratBall));
console.log("Anvarning bahosi: " + bahoHisobla(anvarBall));

