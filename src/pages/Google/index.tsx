
import { Chart } from "react-google-charts";

export const data = [
  ["Atividade", "Segundos"],
  ["Atendimento", 1],
  ["Espera", 1],
   // CSS-style declaration
];


export const ola = {
  backgroundColor: {fill: '#ffffff'},
  booleanRole: "certainty",
  hAxis: {title: 'Age', maxValue: 15, useFormatFromData: true, viewWindowMode: 'explicit', viewWindow: {max: 15, min: null}, },
  height: 371,
  is3D: false,
  legacyScatterChartLabels: true,
  legend: "none",
  pieHole: 0.5,
  pieSliceText: "percentage",
  pieSliceTextStyle: {fontSize: '9', color: '#ffffff'},
  theme: "maximized",
  title: "Age vs. Weight comparison",
  titleTextStyle: {color: '#000', fontSize: 12, bold: true, italic: true},
  vAxes: [
    {
      maxValue: null,
      minValue: null,
      useFormatFromData: true,
      viewWindow: {max: null, min: null}
    }, 
    {
      maxValue: null,
      minValue: null,
      useFormatFromData: true,
      viewWindow: {max: null, min: null}
    }
  ],
  width: 600
}

export const options = {
  // title: "Tempo médio",
  // backgroundColor: '#ffffff',
  // booleanRole: "certainty",
  // legacyScatterChartLabels: false,
  height: 300,
  with: 300,
  pieSliceText: "percentage",
  pieSliceTextStyle: {
    fontSize: "16", 
    color: '#000000', 
    bold: true
  },
  theme: "maximized",
  legend: "none",
  pieHole: 0.5,
  is3D: false,
  colors: ["#1B588F", "red"],
};

const Google = () => {
  return (
   <Chart 
    chartType="PieChart"
    data={data}
    options={options}
    
   />
  )
}

export default Google;