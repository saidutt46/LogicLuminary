export class VisualizerTabModel {
    name?: string;
    algName?: string;
    id?: number;
    active?: boolean;
    type?: string;
    algId?: number;
}

const welcomeTabConfig = new VisualizerTabModel();
welcomeTabConfig.name = 'Welcome';
welcomeTabConfig.algName = 'Welcome';
welcomeTabConfig.id = 0;
welcomeTabConfig.active = true;
welcomeTabConfig.type = 'welcome';
welcomeTabConfig.algId = 0;

export const DefaultTabConfig: VisualizerTabModel[] = [welcomeTabConfig];
