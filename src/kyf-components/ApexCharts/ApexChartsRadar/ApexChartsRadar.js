import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
    const options = {
        labels: ['Tactics', 'Situational', 'Crisis', 'Scene', 'Weapons', 'Reporting']
    };
    const series = [44, 51, 41, 22, 15, 35];

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <Chart options={options} series={series} type="donut" width="380" />
            </div>
        </Fragment>
    );
}
