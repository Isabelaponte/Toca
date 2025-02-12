interface IGrupos {
    id: string;
    name: string;
    subgrupos?: any[];
    complementos: any[];
}

export const grupos: IGrupos[] = [
    {
        id: "1",
        name: "Refrigerantes",
        complementos: []
    },
    {
        id: "2",
        name: "Cervejas",
        subgrupos: [
            {
                id: "21",
                name: "Litrão",
                complementos: []
            },
            {
                id: "22",
                name: "600ml",
                complementos: []
            },
            {
                id: "23",
                name: "Long Neck",
                complementos: []
            },
            {
                id: "24",
                name: "lata",
                complementos: []
            },
        ],
        complementos: []
    },
    {
        id: "3",
        name: "Sucos",
        subgrupos: [
            {
                id: "31",
                name: "Garrafa",
                complementos: []
            },
            {
                id: "32",
                name: "Natural (Fruta)",
                complementos: []
            }
        ],
        complementos: []
    },
    {
        id: "4",
        name: "Drinks",
        subgrupos: [
            {
                id: "41",
                name: "Caipirinha",
                complementos: []
            },
            {
                id: "42",
                name: "Caipisaquê",
                complementos: []
            },
            {
                id: "43",
                name: "Caipivodka",
                complementos: []
            },
            {
                id: "44",
                name: "Caipigin",
                complementos: []
            },
            {
                id: "45",
                name: "Caipicoquetel",
                complementos: []
            },
            {
                id: "46",
                name: "Zero Álcool",
                complementos: []
            },
            {
                id: "47",
                name: "Coice de Mula",
                complementos: []
            }
        ],
        complementos: []
    },
    {
        id: "5",
        name: "Energéticos",
        complementos: []
    },
    {
        id: "6",
        name: "Águas",
        complementos: []
    },
    {
        id: "7",
        name: "Porções",
        complementos: []
    },
    {
        id: "8",
        name: "Peixes",
        complementos: []
    },
    {
        id: "9",
        name: "Porco",
        complementos: []
    },
    {
        id: "10",
        name: "Frango",
        complementos: []
    },
    {
        id: "11",
        name: "Carnes",
        complementos: []
    },
    {
        id: "12",
        name: "Linguiça",
        complementos: []
    },
    {
        id: "13",
        name: "Mini Salgado",
        complementos: []
    },
    {
        id: "14",
        name: "Cafeteria",
        subgrupos: [
            {
                id: "141",
                name: "Bebidas Quentes",
                complementos: []
            }
        ],
        complementos: []
    },
    {
        id: "15",
        name: "Doses",
        complementos: []
    }
];
