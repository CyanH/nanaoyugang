import * as echarts from 'echarts';

export function newChart(myChart: echarts.ECharts) {
    let series = []
    var echartsData = {
        title: 'title',
        city: ['4月','5月','6月','7月','8月','9月', '10月', '11月', '12月'],
        legend: ['行为违规', '证书违规'],
        data: [
            [9,5,5,6,7,2,9,12,7],
            [6,11,4,6,8,8,11,16,9]
        ],
    };
    var colors = [{
        co1: '#28e1cd',
        co2: '#0075a6'
    }, {
        co1: '#28d8ff',
        co2: '#003dec'
    }];
    for (var i = 0; i < echartsData.legend.length; i++) {
        let co = [
            {
                offset: 0.3,
                color: colors[i].co1,
            },
            {
                offset: 1,
                color: colors[i].co2,
            },
        ]
        series.push({
            name: echartsData.legend[i],
            type: 'bar',
            stack: '总数',
            barWidth: '45%',
            label: {
                show: false,
                position: 'insideRight',
            },
            data: echartsData.data[i],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, co),
                    // label: {
                    //     show: false, //开启显示
                    //     position: 'top', //在上方显示
                    //     textStyle: {
                    //         //数值样式
                    //         color: '#fff',
                    //         fontSize: 14,
                    //         fontWeight: 600,
                    //     },
                    // },
                },
            },
        });
    }
    myChart.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
        },
        // color: colors,
        legend: {
            left: 'center',
            itemWidth: 10,
            itemHeight: 10,
            padding: [5, 10],
            textStyle: {
                fontSize: 16,
                color: '#96A4F4',
                padding: [3, 0, 0, 0],
            },
            data: echartsData.legend,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                color: '#96A4F4',
                rotate: 0,//倾斜度
            },
            axisLine: {
                lineStyle: {
                    color: '#96A4F4',
                },
                width: 5,
            },
            axisTick: {
                show: false,
            },
            data: echartsData.city,
        },
        yAxis: {
            name: '次数',
            type: 'value',
            axisLabel: {
                color: '#96A4F4',
            },
            axisLine: {
                lineStyle: {
                    color: '#96A4F4',
                },
                width: 5,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(150, 164, 244, 0.3)',
                },
            },
        },
        series:series,
    });
}
