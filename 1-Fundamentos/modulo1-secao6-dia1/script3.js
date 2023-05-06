/* A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'
 */

const validacaoRegistro = (name, age) => {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias');
    }
};

const verifyMajorAge = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas') 
    }
};

const validacaoType = (name, age) => {
    if (typeof name !== 'string' || typeof age !== 'number') {
        throw new Error('Informações inválidas.')
    }
}

const studentRegister = (name, age) => {
    try {
        validacaoType(name, age);
        validacaoRegistro(name, age);
        verifyMajorAge(age);
        return `${name}, seja bem-vindo(a) à AuTrybe!`
    } catch (error) {
        return error.message;
    }
}
console.log(studentRegister('Fernanda', 30));