
import home from '@/components/home' 
import page01 from '@/components/page01'
import page01A from '@/components/page01/page01-A'
import page01B from '@/components/page01/page01-B'
import pageEnd from '@/components/page01/B/end'
import homeend from '@/components/home/end'
let router = [
   {
      path: '/',
      name: '服务器',
      component: home,
      iconCls: 'fa fa-id-card-o',
    },
   {
      path: '/home',
      name: 'home',
      component: home,
     iconCls: 'fa fa-id-card-o',
      children: [
        {
          path: 'end',
          name: 'homeend',
          component: homeend
        } ]
    },

    {
      path: '/page01',
      name: 'page01',
      component: page01,
      children: [
        {
          path: 'page01-a',
          name: 'page01A',
          component: page01A
        },
        {
          path: 'page01-b',
          name: 'page01B',
          component: page01B,
          children: [
            {
              path: 'end',
              name: 'pageEnd',
              component: pageEnd
            }
          ]
        }]
     }] 
export default router;
