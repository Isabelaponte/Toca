interface IGrupos {
    id: string;
    name: string;
    subgrupos?: any[];
    complementos: any[];
}

export const grupos: IGrupos[] = [
    {
        id: "14",
        name: "Cafeteria",
        subgrupos: [
            {
                id: "141",
                name: "Bebidas Quentes",
            }
        ],
        complementos: []
    },
    {
        id: "1",
        name: "Refrigerantes",
        complementos: []
    },
    {
        id: "6",
        name: "Águas",
        complementos: []
    },
    {
        id: "3",
        name: "Sucos",
        subgrupos: [
            {
                id: "32",
                name: "Natural (Fruta)",
            },
            {
                id: "31",
                name: "Garrafa",
            },
        ],
        complementos: []
    },
    {
        id: "7",
        name: "Porções",
        subgrupos: [
            {
                id: "71",
                name: "Batata",
            },
            {
                id: "72",
                name: "Polenta",
            },
            {
                id: "73",
                name: "Mandioca",
            },
            {
                id: "74",
                name: "Almôndegas",
            },
            {
                id: "75",
                name: "Outros",
            },
        ],
        complementos: []
    },
    {
        id: "9",
        name: "Torresmo",
        complementos: []
    },
    {
        id: "8",
        name: "Peixes",
        subgrupos: [
            {
                id: "81",
                name: "Tilápia",
            },
            {
                id: "82",
                name: "Bacalhau"
            }
        ],
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
        id: "2",
        name: "Cervejas",
        subgrupos: [
            {
                id: "21",
                name: "Litrão",
            },
            {
                id: "22",
                name: "600ml",
            },
            {
                id: "23",
                name: "Long Neck",
            },
            {
                id: "24",
                name: "lata",
            },
        ],
        complementos: []
    },

    {
        id: "4",
        name: "Drinks",
        subgrupos: [
            {
                id: "157",
                name: "Coice de Mula",
            },
            {
                id: "151",
                name: "Caipirinha",
            },
            {
                id: "152",
                name: "Caipisaquê",
            },
            {
                id: "153",
                name: "Caipivodka",
            },
            {
                id: "154",
                name: "Caipigin",
            },
            {
                id: "155",
                name: "Caipicoquetel",
            },
            {
                id: "156",
                name: "Zero Álcool",
            },
        ],
        complementos: []
    },
    {
        id: "5",
        name: "Energéticos",
        complementos: []
    },
    {
        id: "15",
        name: "Doses",
        complementos: [],
        subgrupos: [
            {
                id: "41",
                name: "Cachaça",
            },
            {
                id: "42",
                name: "Whisky",
            },
            {
                id: "43",
                name: "Outras Bebidas",
            }
        ]
    }
];
