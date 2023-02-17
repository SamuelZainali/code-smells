/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

/* function getLength(jumpings: number[]): number {
  let totalNumber = 0;
  totalNumber = jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );
  return totalNumber;
} */

function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  student.passed =
    student.name == "Sebastian"
      ? student.handedInOnTime
        ? true
        : false
      : false;

  if (student.passed) {
    return "VG";
  } else {
    return "IG";
  }
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Temperature {
  constructor(public city: string, public date: Date, public value: number) {}
}

function calculateAverageWeeklyTemperature(
  temperatures: Temperature[]
): number {
  const daysInWeek = 7;
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 dagar - 24 timmar - 60 minuter - 60 sekunder - 1000 millisekunder
  const currentTimestamp = Date.now();
  let totalTemperature = 0;
  let temperaturesCount = 0;

  for (const temperature of temperatures) {
    const isFromStockholm = temperature.city === "Stockholm";
    const temperatureDate = temperature.date.getTime();
    const isWithinOneWeek =
      temperatureDate > currentTimestamp - oneWeekInMilliseconds;

    if (isFromStockholm && isWithinOneWeek) {
      totalTemperature += temperature.value;
      temperaturesCount++;
    }
  }

  if (temperaturesCount === 0) {
    return 0;
  }

  const averageTemperature = totalTemperature / temperaturesCount;
  return averageTemperature;
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

class Product {
  constructor(
    public name: string,
    public price: number,
    public amount: number,
    public description: string,
    public image: string,
    public parent: HTMLElement
  ) {}
}

function showProduct(product: Product) {
  let container = document.createElement("div");
  let title = document.createElement("h4");
  let price = document.createElement("strong");
  let imageTag = document.createElement("img");

  title.innerHTML = product.name;
  price.innerHTML = product.price.toString();
  imageTag.src = product.image;

  container.appendChild(title);
  container.appendChild(imageTag);
  container.appendChild(price);
  product.parent.appendChild(container);
}

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */

function presentStudents(students: Student[]) {
  const passedStudentsList = document.querySelector("ul#passedstudents");
  const failedStudentsList = document.querySelector("ul#failedstudents");

  students.forEach((student) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");

    label.textContent = student.name;

    if (student.handedInOnTime) {
      listItem.classList.add("passed");
      label.classList.add("passed-label");
    } else {
      listItem.classList.add("failed");
      label.classList.add("failed-label");
    }

    listItem.appendChild(label);
    passedStudentsList?.appendChild(listItem);
  });
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */

function concatenateStrings() {
  let stringLists: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet"];
  return stringLists.join(" ");
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

class User {
  constructor(
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string
  ) {}

  get age(): number {
    const ageDiff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

function createUser(newUser: User) {
  if (newUser.age < 20) {
    throw new Error("Du är under 20 år");
  }

  // Logik för att skapa en användare
}
