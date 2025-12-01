const obj = {
  name: "xxx",
  test() {
    return this.name;
  },
};

console.log((obj && obj.test)());
