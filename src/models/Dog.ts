type Dog = {
    name: string;
    color: string;
    genre: string;
    image: string;
}

const dogs: Dog[] = [
    {name: 'Bulldog', color: 'Cor: Amarelo e Preto', genre: 'Gênero: Masculino', image: 'bulldog.jpg'},
    {name: 'Husky Siberiano', color: 'Cor: Branco', genre: 'Gênero: Feminino', image: 'husky.jpg'},
    {name: 'Labrador', color: 'Cor: Amarelo', genre: 'Gênero: Masculino', image: 'labrador.jpg'},
    {name: 'Golden', color: 'Cor: Vermelho e Branco', genre: 'Gênero: Masculino', image: 'golden.jpg'},
    {name: 'Pastor Alemão', color: 'Cor: Amarelo e Preto', genre: 'Gênero: Masculino', image: 'pastor-alemao.jpg'},
    {name: 'Poodle', color: 'Cor: Preto', genre: 'Gênero: Feminino', image: 'poodle.jpg'},
];

export const Dog = {
    getAll: (): Dog[] => {
        return dogs;
    }
};