type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const menuObject = (menuActive: menuOptions) => {
    let object = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(menuActive !== ''){
        object[menuActive] = true;
    }

    return object;
}