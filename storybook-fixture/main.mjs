import path from 'node:path';
import base from '../.storybook/main.mjs';
export default {...base, stories:['./Colors.stories.tsx'], addons:[], staticDirs:[], typescript:{reactDocgen:false}, webpackFinal: async config => {
 const result = await base.webpackFinal(config);
 result.resolve.alias['src/dashboard/containers/DashboardGrid'] = path.resolve('.storybook-skippy-40708/CachedGrid.tsx');
 return result;
}};
