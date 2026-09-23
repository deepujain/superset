# Dashboard initial label colors reproduction

These are browser screenshots of the production DashboardContainer and production ECharts Timeseries transform/render path in an isolated Storybook fixture. The DashboardGrid boundary supplies an already-cached two-row query, so the chart consumes its first color scale during initial mount. This is not an authenticated full dashboard or a reproduction of the reporter’s deployment.

Baseline: apache/superset main 61fffbe0c08f8a3400228cafefd46c641139089f. After: the same fixture with the initial-color mount gate patch. Metadata forces 20_Passed=#008000, 50_Error=#ff0000, 60_Crashed=#8b0000. Recorded browser series colors are included alongside screenshots.

To reproduce: copy storybook-fixture to superset-frontend/.storybook-skippy-40708 in the source checkout, install/build frontend packages, run `storybook dev --ci --no-open -p 6018 -c .storybook-skippy-40708`, then open `/iframe.html?id=repair40708-initial-colors--cached-chart&viewMode=story` in Chromium. Capture each version on a fresh page load. The fixture replaces DashboardGrid with a cached production ECharts renderer while retaining DashboardContainer and its real Redux color initialization action.
