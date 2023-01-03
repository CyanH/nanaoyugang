import * as echarts from 'echarts';

export function loadChart(myChart: echarts.ECharts, data: any) {
  console.log(data);
  
  myChart.setOption({
    color: ['#00DCFD', '#2892FF', '#28FFAB', '#fae150', '#FF6172'],
    series: [
      {
        name: '产品',
        type: 'pie',
        radius: ['50%', '95%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: data[0].value, name: '头足类' },
          { value: data[1].value, name: '贝壳类' },
          { value: data[2].value, name: '虾蟹类' },
          { value: data[3].value, name: '鱼类' },
        ],
      },
    ],
  });
}
