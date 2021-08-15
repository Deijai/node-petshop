type Fish = {
    name: string;
    color: string;
    genre: string;
    image: string;
}

const fishes: Fish[] = [
    {name: 'Acara', color: 'Cor: Amarelo e Preto', genre: 'Gênero: Masculino', image: 'acara.jpg'},
    {name: 'Mato Grosso', color: 'Cor: Branco', genre: 'Gênero: Feminino', image: 'matogrosso.jpg'},
    {name: 'Nean', color: 'Cor: Amarelo', genre: 'Gênero: Masculino', image: 'neon.jpg'},
    {name: 'Tanictis', color: 'Cor: Amarelo', genre: 'Gênero: Masculino', image: 'tanictis.jpg'},
];

export const Fish = {
    getAll: (): Fish[] => {
        return fishes;
    }
};