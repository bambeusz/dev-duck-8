export interface ISensorData {
    read_at: string;
    value: number;
    current_norm?: string;
    threshold_level: number;
}

export interface INormScope {
    gte?: number;
    gt?: number;
    lte?: number;
    lt?: number;
}

export interface INorm {
    [key: string]: INormScope;
}

export interface ISensor {
    data: ISensorData[];
    id: number;
    name: string;
    unit: string;
    norm?: INorm;
}

export interface IDevice {
    address: string;
    city: string;
    coordinates: number[];
    id: number;
    disabled?: boolean;
    sensors?: ISensor[];
}

export interface IWidget {
    device: IDevice;
    id: number;
    ordering: number;
    size: WidgetSize;
    type: WidgetType;
    start_date?: string;
    end_date?: string;
}

export enum WidgetSize {
    oneFourth = 1,
    twoFourths,
    threeFourths,
    fourFourths,
}

export type WidgetType = 'VALUE' | 'CHART' | 'MAP';

const sampleWidget: IWidget = {
    id: 1,
    ordering: 44,
    size: WidgetSize.twoFourths,
    type: 'VALUE',
    start_date: '2018-01-05T08:15:30',
    end_date: '2018-01-09T08:15:30',
    device: {
        id: 42,
        address: 'Gliwice, ul. Mewy',
        city: 'Gliwice',
        coordinates: [50.278926, 18.653938],
        disabled: false,
        sensors: [
            {
                id: 104,
                data: [
                    {
                        current_norm: "grade-c",
                        read_at: "2018-03-06T10:00:00+01:00",
                        threshold_level: 143,
                        value: 71.5166,
                    }
                    // ...
                ],
                name: 'PM10',
                unit: 'µg/m³',
            }
        ],
    },
};

export default class ApiWidget {
    // ...

    public static getWidgets(): Promise<IWidget[]> {
        return Promise.resolve([sampleWidget])
    }

    // ...
}
