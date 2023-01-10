import * as echarts from 'echarts';

export function zhong_l(myChart: echarts.ECharts) {
  myChart.setOption({
    title: [
        {
          text: "1080",
          x: "14%",
          y: "40%",
          textStyle: {
            fontSize: 24,
            fontWeight: "normal",
            fontStyle: "normal",
            color: "#00f6ff",
          },
        },
        {
          text: "种类总量",
          x: "15%",
          y: "55%",
          textStyle: {
            fontSize: 12,
            fontWeight: "normal",
            fontStyle: "normal",
            color: "#fff",
          },
        },
      ],
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        top: "10%",
        right: "10%",
        itemGap: 40,
        textStyle: {
          fontSize: 15,
          padding: [0, 0, 0, 4],
          color: "#fff",
        },
        data: ["鱼类", "甲壳类", "贝类", "头足类", "藻类","肉类","其他"],
      },
      color: ["#905bf3", "#3bc6f4", "#f3b74f", "#5c5cfc","#2cdaa7","#4280ff","#ff6172"],
      series: [
        {
          name: "种类总量",
          type: "pie",
          center: ["22%", "50%"],
          radius: ["40%", "55%"],
          label: {
            normal: {
              show: false,
              position: "center",
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            lineStyle: {
                color: "#fff",
            },
          },
          data: [
            {
              value: 20,
              name: "鱼类",
            },
            {
              value: 62,
              name: "甲壳类",
            },
            {
              value: 50,
              name: "贝类",
            },
            {
              value: 90,
              name: "头足类",
            },
            {
                value: 100,
                name: "藻类",
            },
            {
                value: 20,
                name: "肉类",
            },
            {
                value: 65,
                name: "其他",
            },
          ],
        },
      ],
  });
}
