const clients = [
    {
        name: 'João da Silva',
        age: 28,
        email: 'joao.silva@gmail.com',
        phone: '(11) 5555-5555',
        address: {
            street: 'Rua dos Lírios',
            number: 123,
            neighborhood: 'Jardim Primavera',
            city: 'São Paulo',
            state: 'SP',
            cep: '01234-567',
        },
    },
    {
        name: 'Maria Souza',
        age: 35,
        email: 'maria.souza@hotmail.com',
        address: {
            street: 'Rua dos Cravos',
            number: 456,
            neighborhood: 'Copacabana',
            city: 'Rio de Janeiro',
            state: 'RJ',
            cep: '12345-678',
        },
    },
    {
        name: 'Pedro Oliveira',
        age: 42,
        email: 'pedro.oliveira@gmail.com',
        address: {
            street: 'Rua das Margaridas',
            number: 789,
            neighborhood: 'Boa Viagem',
            city: 'Recife',
            state: 'PE',
            cep: '23456-789',
        },
    },
    {
        name: 'Ana Santos',
        age: 25,
        email: 'ana.santos@gmail.com',
        phone: '(71) 5555-5555',
        address: {
            street: 'Rua dos Girassóis',
            number: 1011,
            neighborhood: 'Barra',
            city: 'Salvador',
            state: 'BA',
            cep: '34567-890',
        },
    },
    {
        name: 'Luiz Costa',
        age: 32,
        email: 'luiz.costa@hotmail.com',
        address: {
            street: 'Rua das Acácias',
            number: 1213,
            neighborhood: 'Centro',
            city: 'Belo Horizonte',
            state: 'MG',
            cep: '45678-901',
        },
    },
    {
        name: 'Isabela Almeida',
        age: 37,
        email: 'isabela.almeida@gmail.com',
        phone: '(21) 5555-5555',
        address: {
            street: 'Rua das Hortênsias',
            number: 1415,
            neighborhood: 'Botafogo',
            city: 'Rio de Janeiro',
            state: 'RJ',
            cep: '56789-012',
        },
    },
    {
        name: 'Rafael Ferreira',
        age: 29,
        email: 'rafael.ferreira@hotmail.com',
        address: {
            street: 'Rua das Orquídeas',
            number: 1617,
            neighborhood: 'Pinheiros',
            city: 'São Paulo',
            state: 'SP',
            cep: '67890-123',
        },
    },
];

const findPersonByName = (name) => {
    let client = '';
    try {
        for (index = 0; index < clients.length; index += 1) {
            if (name === clients[index].name) {
                client = clients[index];
            }
        } if (!client) {
            throw new Error('Erro1213123')
        }
        return client;
    } catch (e) {
        return e;
    }

};
console.log(findPersonByName('Rafael Ferreira'));

/*  console.log(clients[1].name);
 console.log(clients[2].address.street);
 console.log(clients[3].address.state); */




const findPersonByPosition = (position) => {
    // seu código aqui
};

const findPeopleByState = (state) => {
    // seu código aqui
};


/* 
  A função findPersonByName() recebe um nome por parâmetro e retorna a string: 'Destinatário: Ana Santos.
   Endereço: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890 '.
Caso a função findPersonByName() não encontre pessoas na lista de clientes, lance uma exceção com a mensagem 
'Pessoa não encontrada, tente novamente'. */