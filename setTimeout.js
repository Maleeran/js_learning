function printNumbers2(from, to) {
  let current = from;

  const go = () => {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }; // 用 go 去储存后面的箭头函数

  setTimeout(go, 1000);
}

printNumbers2(5, 9);
