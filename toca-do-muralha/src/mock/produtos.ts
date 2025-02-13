export const produtos = [
    // Produtos diretamente no grupo Cafeteria (ID: 14)
    {
        id: "1",
        name: "Salgado",
        description: "Assado ou frito - Consultar sabores disponíveis",
        price: 4.00,
        grupoId: "14",
    },
    {
        id: "2",
        name: "Pão de Queijo",
        price: 4.00,
        grupoId: "14",
    },
    {
        id: "3",
        name: "Misto Quente",
        description: "Pão de forma, mussarela, presunto, requeijão e orégano",
        price: 11.00,
        grupoId: "14",
    },
    {
        id: "4",
        name: "Pão na Chapa",
        description: "Pão francês c/ margarina",
        price: 3.50,
        grupoId: "14",
    },
    {
        id: "5",
        name: "Bolo do Dia",
        description: "Fatia - Consultar sabores disponíveis",
        price: 7.50,
        grupoId: "14",
    },
    {
        id: "6",
        name: "Torta do Dia",
        description: "Fatia - Consultar sabores disponíveis",
        price: 7.00,
        grupoId: "14",
    },

    // Produtos do subgrupo Bebidas Quentes (ID: 141)
    {
        id: "7",
        name: "Café Coado",
        price: 3.50,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "8",
        name: "Café Coado c/ Canela",
        price: 4.00,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "9",
        name: "Café Expresso",
        price: 4.00,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "10",
        name: "Café Expresso Duplo",
        price: 7.00,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "11",
        name: "Pingado",
        price: 6.50,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "12",
        name: "Café c/ Leite",
        price: 6.50,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "13",
        name: "Cappuccino",
        price: 12.00,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "14",
        name: "Bomba de Cappuccino",
        price: 7.00,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "7",
        name: "Achocolatado",
        price: 9.00,
        grupoId: "14",
        subgrupoId: "141",
    },
    {
        id: "16",
        name: "Batata",
        description: "Porção de 600g",
        price: 35.0,
        grupoId: "7",
    },
    {
        id: "17",
        name: "Batata Rústica",
        description: "Porção de 600g",
        price: 35.0,
        grupoId: "7",
    },
    {
        id: "18",
        name: "Batata c/ Bacon",
        description: "Porção de 600g",
        price: 45.0,
        grupoId: "7",
    },
    {
        id: "19",
        name: "Batata c/ Bacon e Cheddar",
        description: "Porção de 600g",
        price: 50.0,
        grupoId: "7",
    },
    {
        id: "20",
        name: "Batata c/ Bacon e Catupiry",
        description: "Porção de 600g",
        price: 50.0,
        grupoId: "7",
    },
    {
        id: "21",
        name: "Polenta",
        description: "Porção de 600g",
        price: 25.0,
        grupoId: "7",
    },
    {
        id: "22",
        name: "Polenta c/ Bacon",
        description: "Porção de 600g",
        price: 35.0,
        grupoId: "7",
    },
    {
        id: "23",
        name: "Polenta c/ Bacon e Cheddar",
        description: "Porção de 600g",
        price: 40.0,
        grupoId: "7",
    },
    {
        id: "24",
        name: "Polenta c/ Bacon e Catupiry",
        description: "Porção de 600g",
        price: 40.0,
        grupoId: "7",
    },
    {
        id: "25",
        name: "Lombo",
        description: "Porção de 250g",
        price: 25.0,
        grupoId: "7",
    },
    {
        id: "26",
        name: "Salame",
        description: "Porção de 250g",
        price: 35.0,
        grupoId: "7",
    },
    {
        id: "27",
        name: "Mandioca",
        description: "Palito ou em Pedaços - Porção de 600g",
        price: 45.0,
        grupoId: "7",
    },
    {
        id: "28",
        name: "Mandioca c/ Bacon",
        description: "Palito ou em Pedaços - Porção de 600g",
        price: 55.0,
        grupoId: "7",
    },
    {
        id: "29",
        name: "Mandioca c/ Bacon e Cheddar",
        description: "Palito ou em Pedaços - Porção de 600g",
        price: 60.0,
        grupoId: "7",
    },
    {
        id: "30",
        name: "Mandioca c/ Bacon e Catupiry",
        description: "Palito ou em Pedaços - Porção de 600g",
        price: 60.0,
        grupoId: "7",
    },
    {
        id: "31",
        name: "Anel de Cebola",
        description: "Porção de 600g",
        price: 40.0,
        grupoId: "7",
    },
    {
        id: "32",
        name: "Frios",
        description: "Porção de 500g",
        price: 25.0,
        grupoId: "7",
    },
    {
        id: "33",
        name: "Almôndegas",
        description: "Porção de 600g",
        price: 50.0,
        grupoId: "7",
    },
    {
        id: "34",
        name: "Almôndegas c/ Cheddar",
        description: "Porção de 600g",
        price: 57.5,
        grupoId: "7",
    },
    {
        id: "35",
        name: "Almôndegas c/ Catupiry",
        description: "Porção de 600g",
        price: 57.5,
        grupoId: "7",
    },
];
