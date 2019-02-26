import Vue from 'vue';
import Router from 'vue-router';
import q1 from './views/questions/q1.vue';
import q2 from './views/questions/q2.vue';
import q3 from './views/questions/q3.vue';
import q4 from './views/questions/q4.vue';
import q5 from './views/questions/q5.vue';
import q6 from './views/questions/q6.vue';
import q7 from './views/questions/q7.vue';
import q8 from './views/questions/q8.vue';
import q9 from './views/questions/q9.vue';
import q10 from './views/questions/q10.vue';
import entry from './views/questions/entry.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'entry',
      component: entry,
    },
    {
      path: '/q1',
      name: 'q1',
      component: q1,
    },
    {
      path: '/q2',
      name: 'q2',
      component: q2,
    },
    {
      path: '/q3',
      name: 'q3',
      component: q3,
    },
    {
      path: '/q4',
      name: 'q4',
      component: q4,
    },
    {
      path: '/q5',
      name: 'q5',
      component: q5,
    },
    {
      path: '/q6',
      name: 'q6',
      component: q6,
    },
    {
      path: '/q7',
      name: 'q7',
      component: q7,
    },
    {
      path: '/q8',
      name: 'q8',
      component: q8,
    },
    {
      path: '/q9',
      name: 'q9',
      component: q9,
    },
    {
      path: '/q10',
      name: 'q10',
      component: q10,
    },
  ],
});
