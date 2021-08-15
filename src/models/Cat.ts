type Cat = {
    name: string;
    color: string;
    genre: string;
    image: string;
}

const cats: Cat[] = [
    {name: 'Persa', color: 'Cor: Amarelo e Preto', genre: 'Gênero: Masculino', image: 'persa.jpg'},
    {name: 'Siames', color: 'Cor: Branco', genre: 'Gênero: Feminino', image: 'siames.jpg'},
    {name: 'Sphynx', color: 'Cor: Amarelo', genre: 'Gênero: Masculino', image: 'sphynx.jpg'},
    {name: 'Mainecoon', color: 'Cor: Amarelo', genre: 'Gênero: Masculino', image: 'mainecoon.jpg'},
    {name: 'Bengal', color: 'Cor: Amarelo', genre: 'Gênero: Masculino', image: 'bengal.jpg'},
];

export const Cat = {
    getAll: (): Cat[] => {
        return cats;
    }
};