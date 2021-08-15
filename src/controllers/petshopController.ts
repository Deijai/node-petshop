import { Request, Response } from 'express';
import { Cat } from '../models/Cat';
import { Dog } from '../models/Dog';
import { Fish } from '../models/Fish';
import { menuObject } from '../helpers/menuObject';

export const index = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: menuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}

export const dog = (req: Request, res: Response) => {
    let lista = Dog.getAll();
    console.log(lista);
    res.render('pages/page', {
        menu: menuObject('dog'),
        banner: {
            title: 'Todos os cães',
            background: 'banner_dog.jpg',
            
        },
        lista
    });

}

export const cat = (req: Request, res: Response) => {
    let lista = Cat.getAll();
    console.log(lista);
    res.render('pages/page', {
        menu: menuObject('cat'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg',
            
        },
        lista
    });

}

export const fish = (req: Request, res: Response) => {
    let lista = Fish.getAll();
    console.log(lista);
    res.render('pages/page', {
        menu: menuObject('fish'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg',
            
        },
        lista
    });
}