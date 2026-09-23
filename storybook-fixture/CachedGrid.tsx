import { useState } from 'react';
import transformProps from '../plugins/plugin-chart-echarts/src/Timeseries/transformProps';
import EchartsTimeseries from '../plugins/plugin-chart-echarts/src/Timeseries/EchartsTimeseries';
import { DEFAULT_FORM_DATA } from '../plugins/plugin-chart-echarts/src/Timeseries/constants';
import { createEchartsTimeseriesTestChartProps } from '../plugins/plugin-chart-echarts/test/helpers';
export default function CachedGrid() {
 const [props] = useState(() => transformProps(createEchartsTimeseriesTestChartProps({
  defaultFormData: DEFAULT_FORM_DATA, defaultVizType: 'echarts_timeseries_bar', width:900,height:420,
  formData:{seriesType:'bar',colorScheme:'supersetColors',colorNamespace:'proof-40708',showLegend:true,xAxis:'__timestamp',metrics:['20_Passed','50_Error','60_Crashed'],groupby:[],emitFilter:false},
  queriesData:[{data:[{__timestamp:Date.UTC(2026,8,20),'20_Passed':75,'50_Error':15,'60_Crashed':10},{__timestamp:Date.UTC(2026,8,21),'20_Passed':82,'50_Error':12,'60_Crashed':6}],label_map:{'20_Passed':['20_Passed'],'50_Error':['50_Error'],'60_Crashed':['60_Crashed']},colnames:['__timestamp','20_Passed','50_Error','60_Crashed'],coltypes:[2,0,0,0]}],
 })));
 (window as any).proofColors = (props.echartOptions.series as any[]).map(s => ({name:s.name,color:s.itemStyle?.color}));
 return <EchartsTimeseries {...props} />;
}
