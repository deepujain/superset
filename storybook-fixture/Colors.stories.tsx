import { Provider } from 'react-redux';
import { useState } from 'react';
import { CategoricalColorNamespace } from '@superset-ui/core';
import DashboardContainer from '../src/dashboard/components/DashboardBuilder/DashboardContainer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../spec/helpers/reducerIndex';
import dashboardInfo from '../spec/fixtures/mockDashboardInfo';
import dashboardState from '../spec/fixtures/mockDashboardState';
import { dashboardLayout } from '../spec/fixtures/mockDashboardLayout';
const mockState = {dashboardInfo,dashboardState,dashboardLayout,nativeFilters:{filters:{}},dataMask:{},sliceEntities:{slices:{}},datasources:{}};
const storeWithState = state => createStore(combineReducers(reducers), state, applyMiddleware(thunk));
export default {title:'Repair40708/Initial colors',parameters:{layout:'fullscreen'}};
export const CachedChart = () => {
 const [store] = useState(() => {
 CategoricalColorNamespace.getNamespace('GLOBAL').resetColors();
 return storeWithState({...mockState,dashboardInfo:{...mockState.dashboardInfo,metadata:{...mockState.dashboardInfo.metadata,color_namespace:'GLOBAL',color_scheme:'',label_colors:{'20_Passed':'#008000','50_Error':'#ff0000','60_Crashed':'#8b0000'},native_filter_configuration:[],chart_customization_config:[]}},dashboardState:{...mockState.dashboardState,sliceIds:[]},charts:{}});
 });
 return <div style={{padding:30,width:960}}><h2>Cached chart: first dashboard render</h2><p>Dashboard metadata: 20_Passed green • 50_Error red • 60_Crashed dark red</p><Provider store={store}><DashboardContainer /></Provider><p>Isolated production DashboardContainer and ECharts bar renderer, with cached query fixture.</p></div>;
};
