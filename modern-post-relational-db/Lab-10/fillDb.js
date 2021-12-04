function generateWord(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function lorem(numberOfWords) {
  var text = "";
  for (let i = 0; i < numberOfWords; i++) {
    var lenght = Math.floor(Math.random() * 10) + 2;
    text += generateWord(lenght).toLocaleLowerCase();
    text += " ";
  }
  return text;
}

function generateEmail() {
  const maxWordSize = 10;
  var email = "";

  email += generateWord(Math.floor(Math.random() * maxWordSize) + 3);
  email += "@";
  email += generateWord(Math.floor(Math.random() * 4) + 2).toLocaleLowerCase();
  email += ".";
  email += generateWord(Math.floor(Math.random() * 3) + 1).toLocaleLowerCase();
  return email;
}

function generateName() {
  var name = "";
  name += generateWord(Math.floor(Math.random() * 4) + 4).toLocaleLowerCase();
  name += " ";
  name += generateWord(Math.floor(Math.random() * 4) + 4).toLocaleLowerCase();
  return name;
}

function generateDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generatePhone() {
  var phone = "+375(29)";
  for (let i = 0; i < 7; i++) {
    phone += Math.floor(Math.random() * 10);
    if (i == 2 || i == 4) {
      phone += "-";
    }
  }
  return phone;
}

function generateTable() {
  return {
    _id: new ObjectId(),
    width: Math.floor(Math.random() * 20) + 1,
    height: Math.floor(Math.random() * 20) + 1,
    x: Math.floor(Math.random() * 50) + 1,
    y: Math.floor(Math.random() * 50) + 1,
  };
}

function generateReviews() {
  return {
    rate: Math.floor(Math.random() * 5) + 1,
    review: lorem(Math.floor(Math.random() * 5) + 1),
    date: generateDate(new Date(2010, 1, 1), new Date()),
    user_id: new ObjectId(),
  };
}

function generateUser(objectId) {
  return {
    _id: objectId,
    login: generateWord(Math.floor(Math.random() * 4) + 4),
    password: generateWord(8),
    role: Math.floor(Math.random() * 3),
    status: Math.floor(Math.random() * 2),
    user_info: {
      name: generateName(),
      birthday: generateDate(new Date(1990, 1, 1), new Date(2010, 1, 1)),
      phone: generatePhone(),
      avatar: "C:\\imgs\\" + generateWord(Math.floor(Math.random() * 4) + 4) + ".png",
      email: generateEmail(),
    },
    restaurants: Array(Math.floor(Math.random() * 3) + 1)
      .fill()
      .map(() => new ObjectId()),
  };
}

function generateRestaurant() {
  return {
    _id: new ObjectId(),
    name: generateWord(Math.floor(Math.random() * 4) + 4),
    avatar: "C:\\imgs\\" + generateWord(Math.floor(Math.random() * 4) + 4) + ".png",
    adres: generateWord(Math.floor(Math.random() * 4) + 4).toLocaleLowerCase() + "street",
    scheme: {
      width: Math.floor(Math.random() * 200) + 20,
      height: Math.floor(Math.random() * 200) + 20,
      tables: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => generateTable()),
      reviews: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => generateReviews()),
    },
  };
}

function generateBook_table(userId) {
  return {
      date_begin: generateDate(new Date(2010,1,1), new Date()),
      date_end: generateDate(new Date(2010,1,1), new Date()),
      copacity: Math.floor(Math.random() * 4) + 4,
      status: Math.floor(Math.random() * 3),
      table_id: new ObjectId(),
      user_id: userId 
  };
}

db.users.drop();
db.restaurants.drop();
db.book_tables.drop();
function fillDb() {
  const size = 100000;
  var userDocs = Array(size);
  var restaurantsDocs = Array(size);
  var bookTablesDocs = Array(size);
  for (let i = 0; i < size; i++) {
    var userId = new ObjectId();
    userDocs[i] = generateUser(userId);
    restaurantsDocs[i] = generateRestaurant();
    bookTablesDocs[i] = generateBook_table(userId);
  }

  db.users.insertMany(userDocs);
  db.restaurants.insertMany(restaurantsDocs);
  db.book_tables.insertMany(bookTablesDocs);
}

fillDb();
