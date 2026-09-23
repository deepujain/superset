Issue #25829 control validation

Chromium screenshots of production Superset SelectControl and CheckboxControl rendered with the ECharts Bar control configuration in isolated Storybook. Before omits the new guards; after uses the proposed guards. These are control interaction proofs, not a full Explore application or database-backed chart rendering.

Browser assertions passed: logarithmic mode disables stacking; clearing it enables stacking; stacked mode hides the logarithmic toggle; clearing stacking restores it; saved charts with both values true retain an enabled route to clear either value.
