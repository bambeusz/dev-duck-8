interface IResourceBaz {
    id: string;
    zar: string[];
}

export interface IResource {
    id: string;
    foo: string;
    bar: number[];
    baz: IResourceBaz;
}

class ApiResource {
    public static getAll(): Promise<IResource[]> {
        const resource = {
            id: '321',
            foo: 'foo',
            bar: [1, 2, 10, 23, 50],
            baz: {
                id: '123',
                zar: ['Hello', 'Whatever'],
            },
        };
        return Promise.resolve([resource]);
    }
}

export default ApiResource;
