// Given a deeply nested object,create a function on the object that returns the flat version of the original object.
/*
Input:

let obj = {
	Company: "google",
	Address: "san francisco",
	contact: +91-999999999,
	office: {
		office1: "gurugram",
		office2: "bengaluru",
		office3: ["hyderabad,mumbai"]
	}
};

Output:
{
  Address: "san francisco",
  Company: "google",
  contact: -999999908,    
  office.office1: "gurugram",
  office.office2: "bengaluru",
  office.office3: ["hyderabad,mumbai"]
}

*/

let obj = {
  Company: "google",
  Address: "san francisco",
  contact: +91 - 999999999,
  office: {
    office1: "gurugram",
    office2: "bengaluru",
    office3: ["hyderabad,mumbai"],
  },
};

const flattenObj = (ob) => {
  let result = {};

  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};

console.log(flattenObj(obj));



