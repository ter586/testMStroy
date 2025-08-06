import { createApp } from 'vue';
import App from './App.vue';
import { AllEnterpriseModule, ModuleRegistry } from 'ag-grid-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule]);

createApp(App).mount('#app');
