// script.js
document.addEventListener('DOMContentLoaded', function() {
var embedContainer = document.getElementById('powerbi-report');
var embedUrl = 'YOUR_POWER_BI_EMBED_URL';
var embedOptions = {
type: 'report',
tokenType: window['powerbi-client'].models.TokenType.Embed,
accessToken: 'YOUR_ACCESS_TOKEN',
embedUrl: embedUrl,
id: 'YOUR_REPORT_ID',
permissions: window['powerbi-client'].models.Permissions.All,
settings: {
filterPaneEnabled: false,
navContentPaneEnabled: false
}
};
window['powerbi'].embed(embedContainer, embedOptions);
});
