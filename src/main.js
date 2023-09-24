import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from '@/components/UI/BaseCard';
import BaseButton from '@/components/UI/BaseButton';
import StoredResource from '@/components/learning-resources/StoredResource';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('stored-resource', StoredResource);

app.mount('#app');
