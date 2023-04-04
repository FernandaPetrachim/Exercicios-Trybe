let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  let novaKey = 'turno';
  let novoTurno = 'noite';

  function addTurno(object, Key, value) {
    object[Key]= value;
  }:

  addTurno(lesson2, novaKey, novoTurno);
  console.log(lesson2);

  let listaKeys = {}:
  function mostarKeys
