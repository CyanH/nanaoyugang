import * as echarts from 'echarts';

export function kao_q(myChart: echarts.ECharts) {
    var data = [
        {
            name: "1月",
            value: 80,
        },
        {
            name: "2月",
            value: 87,
        },
        {
            name: "3月",
            value: 71,
        },
        {
            name: "4月",
            value: 80,
        },
        {
            name: "5月",
            value: 66,
        },
        {
            name: "6月",
            value: 80,
        },
        {
            name: "7月",
            value: 80,
        },
        {
            name: "8月",
            value: 55,
        },
        {
            name: "9月",
            value: 60,
        },
        {
            name: "10月",
            value: 66,
        },
        {
            name: "11月",
            value: 65,
        },
        {
            name: "12月",
            value: 95,
        }
    ];
    var xData = [] as any,
    yData = [] as any;
    var min = 0;
    data.map(function (a, b) {
        xData.push(a.name);
        if (a.value === 0) {
            yData.push(a.value + min);
        } else {
            yData.push(a.value);
        }
    });
    myChart.setOption(
        {
            color: ["#3398DB"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "line",
                lineStyle: {
                  opacity: 0,
                },
              },
              formatter: function (prams:any) {
                if (prams[0].data === min) {
                  return "出勤率：0%";
                } else {
                  return "出勤率：" + prams[0].data + "%";
                }
              },
            },
            grid: {
              left: "0%",
              right: "0%",
              bottom: "5%",
              top: "7%",
              containLabel: true,
              z: 22,
            },
            xAxis: [
              {
                type: "category",
                gridIndex: 0,
                data: xData,
                axisTick: {
                  alignWithLabel: true,
                },
                axisLine: {
                  lineStyle: {
                    color: "#0c3b71",
                  },
                },
                axisLabel: {
                  show: true,
                  color: "rgb(170,170,170)",
                  fontSize: 11,
                },
              },
            ],
            yAxis: [
              {
                type: "value",
                gridIndex: 0,
                splitLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                min: min,
                max: 100,
                axisLine: {
                  lineStyle: {
                    color: "#0c3b71",
                  },
                },
                axisLabel: {
                  color: "rgb(170,170,170)",
                  formatter: "{value} %",
                },
              },
              {
                type: "value",
                gridIndex: 0,
                min: min,
                max: 100,
                splitNumber: 12,
                splitLine: {
                  show: false,
                },
                axisLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  show: false,
                },
                splitArea: {
                  show: true,
                  areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
                  },
                },
              },
            ],
            series: [
              {
                name: "出勤率",
                type: "bar",
                barWidth: "30%",
                xAxisIndex: 0,
                yAxisIndex: 0,
                label: {
                    normal: {
                      show: true,
                      position: "top",
                      textStyle: {
                        color: "#00f6ff",
                        fontSize: 12,
                      },
                    },
                },
                itemStyle: {
                  normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#00feff",
                      },
                      {
                        offset: 0.5,
                        color: "#027eff",
                      },
                      {
                        offset: 1,
                        color: "#0286ff",
                      },
                    ]),
                  },
                },
                data: yData,
                zlevel: 11,
              },
              {
                name: "背景",
                type: "bar",
                barWidth: "50%",
                xAxisIndex: 0,
                yAxisIndex: 1,
                barGap: "-135%",
                data: [100, 100, 100, 100, 100, 100, 100,100, 100,100, 100,100],
                itemStyle: {
                  normal: {
                    color: "rgba(255,255,255,0.1)",
                  },
                },
                zlevel: 9,
              },
            ],
          }
    );
}
