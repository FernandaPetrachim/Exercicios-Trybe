/* Parte 1 Nova pessoa contratada */
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (nomeCompleto) => {
    const nome = {
      id1: nomeCompleto('Paulo Ferreira'),
      id2: nomeCompleto('Marina Luiza'),
      id3: nomeCompleto('Jõao Paulo'),
    };
    return nome;
  };
  
  console.log(newEmployees(employeeGenerator));

