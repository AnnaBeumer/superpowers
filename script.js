const opdracht34 = () => {
  const superheroes = [
    {
      name: "Batman",
      publisher: "DC Comics",
      alter_ego: "Bruce Wayne",
      first_appearance: "Detective Comics #27",
      weight: "210",
    },
    {
      name: "Superman",
      publisher: "DC Comics",
      alter_ego: "Kal-El",
      first_appearance: "Action Comics #1",
      weight: "220",
    },
    {
      name: "Flash",
      publisher: "DC Comics",
      alter_ego: "Jay Garrick",
      first_appearance: "Flash Comics #1",
      weight: "195",
    },
    {
      name: "Green Lantern",
      publisher: "DC Comics",
      alter_ego: "Alan Scott",
      first_appearance: "All-American Comics #16",
      weight: "186",
    },
    {
      name: "Green Arrow",
      publisher: "DC Comics",
      alter_ego: "Oliver Queen",
      first_appearance: "All-American Comics #16",
      weight: "195",
    },
    {
      name: "Wonder Woman",
      publisher: "DC Comics",
      alter_ego: "Princess Diana",
      first_appearance: "The Incredible Hulk #180",
      weight: "165",
    },
    {
      name: "Blue Beetle",
      publisher: "DC Comics",
      alter_ego: "Dan Garret",
      first_appearance: "Mystery Men Comics #1",
      weight: "145",
    },
    {
      name: "Spider Man",
      publisher: "Marvel Comics",
      alter_ego: "Peter Parker",
      first_appearance: "Amazing Fantasy #15",
      weight: "167",
    },
    {
      name: "Captain America",
      publisher: "Marvel Comics",
      alter_ego: "Steve Rogers",
      first_appearance: "Captain America Comics #1",
      weight: "220",
    },
    {
      name: "Iron Man",
      publisher: "Marvel Comics",
      alter_ego: "Tony Stark",
      first_appearance: "Tales of Suspense #39",
      weight: "250",
    },
    {
      name: "Thor",
      publisher: "Marvel Comics",
      alter_ego: "Thor Odinson",
      first_appearance: "Journey into Myster #83",
      weight: "200",
    },
    {
      name: "Hulk",
      publisher: "Marvel Comics",
      alter_ego: "Bruce Banner",
      first_appearance: "The Incredible Hulk #1",
      weight: "1400",
    },
    {
      name: "Wolverine",
      publisher: "Marvel Comics",
      alter_ego: "James Howlett",
      first_appearance: "The Incredible Hulk #180",
      weight: "200",
    },
    {
      name: "Daredevil",
      publisher: "Marvel Comics",
      alter_ego: "Matthew Michael Murdock",
      first_appearance: "Daredevil #1",
      weight: "200",
    },
    {
      name: "Silver Surfer",
      publisher: "Marvel Comics",
      alter_ego: "Norrin Radd",
      first_appearance: "The Fantastic Four #48",
      weight: "unknown",
    },
  ];

  // 1
  const heroNames = superheroes.map((hero) => {
    return hero.name;
  });
  console.log("Opdracht 1", heroNames);

  // 2
  const lightHero = superheroes.filter((hero) => {
    return hero.weight < 190;
  });
  console.log("Opdracht 2", lightHero);

  //   3
  const hero200Pound = superheroes
    .filter((hero) => {
      return hero.weight >= 200;
    })
    .map((hero) => {
      return hero.name;
    });
  console.log("Opdracht 3", hero200Pound);

  //   4
  const firstAppearance = superheroes.map((hero) => {
    return hero.first_appearance;
  });
  console.log("Opdracht 4", firstAppearance);

  //   5
  const comicDC = superheroes.filter((hero) => {
    return hero.publisher === "DC Comics";
  });
  const dcCommicaArr = comicDC;
  console.log("Opdracht 5 deel 1", dcCommicaArr);

  const comicMarvel = superheroes.filter((hero) => {
    return hero.publisher === "Marvel Comics";
  });
  const comicMarvelArr = comicMarvel;
  console.log("Opdracht 5 deel 2", comicMarvelArr);

  //   6
  const validNumber = (numberOrNot) => {
    if (isNaN(numberOrNot * 1)) {
      numberOrNot = 0;
    }
    return numberOrNot * 1;
  };

  const reducer = (accumulator, currentValue) => {
    let validWeight = validNumber(currentValue.weight);
    return accumulator + validWeight;
  };

  const totalWeightDC = dcCommicaArr.reduce(reducer, 0);
  console.log("Opdracht 6", totalWeightDC);

  //   7
  const totalWeightMarvel = comicMarvelArr.reduce(reducer, 0);
  console.log("Opdracht 7", totalWeightMarvel);

  //   8
  const maxWeight = (accumulator, currentValue) => {
    let validWeight = validNumber(currentValue.weight);
    return Math.max(accumulator, validWeight);
  };
  const maxWeightSuperHero = superheroes.reduce(maxWeight, 0);

  const maxWeightHero = superheroes
    .filter((hero) => {
      return hero.weight * 1 === maxWeightSuperHero;
    })
    .map((hero) => {
      return hero;
    });

  console.log("Opdracht 8", maxWeightHero[0]);
};
opdracht34();
