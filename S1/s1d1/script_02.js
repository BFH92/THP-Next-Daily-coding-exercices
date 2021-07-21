const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


titles = books.map( book => 
    book.title
);

console.log(titles);

anyRented = books.every(book => 
  book.rented > 0);
console.log(anyRented);

rentedMax = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log(rentedMax);

rentedMin = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log(rentedMin);

function deleteId(){
  let deleteBook = books.splice(books.findIndex(book => book.id === 133712),1);
  console.log(books);
};
deleteId()


