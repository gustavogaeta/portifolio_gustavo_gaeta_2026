/* ============================================================
   DEV ELITE - Dashboard Stat Component
   Componente de estatística do dashboard
   ============================================================ */

const dashboardStatComponent = `
  <div class="dashboard-stat" data-animate="fadeInUp">
    <div class="stat-icon">{{icon}}</div>
    <div class="stat-content">
      <div class="stat-value">{{value}}</div>
      <div class="stat-label">{{label}}</div>
    </div>
    <div class="stat-trend {{trendClass}}">{{trend}}</div>
  </div>
`;

renderer.register('dashboard-stat', dashboardStatComponent);

// Helper function to render dashboard stat
function renderDashboardStat(icon, value, label, trend = '+0%', trendClass = 'positive') {
  return renderer.render('dashboard-stat', {
    icon,
    value,
    label,
    trend,
    trendClass
  });
}
