import * as React from 'react';
import * as Chart from 'chart.js';

const myPlugin = {
    id: 'myPlugin',
    beforeInit: (chartInstance: Chart) => {
        console.log(chartInstance);
    }
};
Chart.pluginService.register(myPlugin);
Chart.pluginService.unregister(myPlugin);

class MyComponent extends React.Component<undefined, undefined> {
    canvas: HTMLCanvasElement;

    componentDidMount() {
        // plugin support added in May 2017
        // plugin registering per instance added in Nov 2017 (any)
        // plugin unregistering added in Jan 2018
        const chart = new Chart(this.canvas.getContext('2d'), {
            type: 'Bar',
            plugins: 'foo',
        })
    }

    public render() {
        return <div>
            <canvas ref={c => this.canvas = c} />
        </div>;
    }
}

export default MyComponent;
