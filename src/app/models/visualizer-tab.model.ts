export class VisualizerTabModel {
    name?: string;
    algName?: string;
    id?: number;
    active?: boolean;
    type?: string;
    algId?: number;
}

export const DefaultTabConfig: VisualizerTabModel[] = [
    {
        name: 'Welcome Page',
        id: 0,
        active: true,
        type: 'www-page',
        algId: 0
    }
];