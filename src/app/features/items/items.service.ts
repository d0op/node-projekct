import { Item } from './item.interface';
import { Items } from './items.interface';

const items: Items = {
    1: {
        id: 1,
        name: 'fdsf',
        price: 5.43,
        description: 'Tasty',
        image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
    },
    2: {
        id: 2,
        name: 'Pizza23',
        price: 2.99,
        description: 'Cheesabray',
        image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
    },
    3: {
        id: 3,
        name: 'AAA',
        price: 1.99,
        description: 'jihjmmy',
        image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
    4: {
        id: 4,
        name: 'mamama',
        price: 1.99,
        description: 'Informative',
        image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
    5: {
        id: 4,
        name: 'kukballemanen',
        price: 1.99,
        description: 'Informative',
        image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
    6: {
        id: 5,
        name: 'ds',
        price: 1.99,
        description: 'Informative',
        image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
};

export const findAll = async (): Promise<Items> => {
    return items;
};

export const find = async (id: number): Promise<Item> => {
    const record: Item = items[id];

    if (record) {
        return record;
    }

    throw new Error('No record found');
};

export const create = async (newItem: Item): Promise<void> => {
    const id = new Date().valueOf();

    items[id] = {
        ...newItem,
        id,
    };
};

export const update = async (updatedItem: Item): Promise<void> => {
    if (items[updatedItem.id]) {
        items[updatedItem.id] = updatedItem;
        return;
    }

    throw new Error('No record found to update');
};

export const remove = async (id: number): Promise<void> => {
    const record: Item = items[id];

    if (record) {
        delete items[id];
        return;
    }

    throw new Error('No record found to delete');
};
