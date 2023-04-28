const verifyStringNumb = (name, age) => {
  if (!name || !age) {
    throw new Error ('Todas as informações são necessárias');
  }
}

const verifyAge = (age) => {
  if (age < 18) {
    throw new Error ('Ops, infelizmente você não pode fazer')
  }
}


const studentRegister = (name, age) => {
    try {
      verifyStringNumb(name, age);
      verifyAge(age);
  } catch (error) {
    return error.message;
  }
  }

console.log(studentRegister('kai'))


  
