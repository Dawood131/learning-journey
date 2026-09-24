// Reverse a String
const reverse = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverse("NoorDawood"));

// Palindrome Check
const Palindrome = (str) => {
  return str === str.split("").reverse().join("");
};
console.log(Palindrome("level"));

// Duplicate in Array

const findDuplicate = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
};
console.log(findDuplicate([1, 2, 3, 4, 5, 4, 3]));

// Flattening a nested array
// Built in Method
const flatten = (arr) => {
  return arr.flat(Infinity);
};

console.log(flatten([1, 2, 3, [4, 5], 6, 7, 8]));

// Custom Method

const flatt = (arr) => {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatt(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flatt([1, 2, 3, [4, 5], 6, 7, 8]));

// Deboune

const Deboune = (fn, delay) => {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(value);
    }, delay);
  };
};

const search = (value) => {
  console.log("API Call", value);
};

const searchDebounce = Deboune(search, 1000);

searchDebounce("N");
searchDebounce("No");
searchDebounce("Noo");
searchDebounce("Noor");

// Throttle

const Throttle = (fn, delay) => {
  let lastCall = 0;
  return (value) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(value);
    }
  };
};

const scroll = (value) => {
  console.log("API Call", value);
};

const searchThrottle = Throttle(scroll, 1000);

searchThrottle("D");
searchThrottle("Da");
searchThrottle("Daw");
searchThrottle("Dawo");
searchThrottle("Dawoo");
searchThrottle("Dawood");

// Deep Clone Object
// Built in Method

const obj = {
  name: "Noor Dawood",
  address: {
    city: "Lahore",
  },
};

const copy = structuredClone(obj);

obj.address.city = "Islamabad";

console.log(obj.address.city);

// Custom Method

const object = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const deepClone = Array.isArray(obj ? [] : {});
  for (const key in object) {
    deepClone[key] = object(obj[key]);
  }
  return deepClone;
};

const user = {
  name: "Noor Dawood",
  address: {
    city: "Lahore",
  },
};
const copy2 = object(user);
user.address.city = "London";

console.log(user.address.city);
