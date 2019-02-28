
import Home from './Home' 
import ecs1 from './ecs/ecs1' 
import ecs2 from './ecs/ecs2' 
import ecs3 from './ecs/ecs3'
import ecs4 from './ecs/ecs4'
import ecs5 from './ecs/ecs5'
import ecs6 from './ecs/ecs6'

let router = [
   {
      path: '/',
      name: '服务器',
      component: Home,
      redirect: '/ecs1',
	  iconCls: 'fa fa-id-card-o',
    // 左侧边列表内容，可在此添加不同类的产品
	  children: [
    		{ path: '/ecs1', component: ecs1, name: '通用型' },
    		{ path: '/ecs2', component: ecs2, name: '密集计算型' },
        { path: '/ecs3', component: ecs3, name: '计算型' },
        { path: '/ecs4', component: ecs4, name: '内存型' },
        { path: '/ecs5', component: ecs5, name: '内存增强型' },
        { path: '/ecs6', component: ecs6, name: 'aliyun' }
      ] 
    }
]; 
export default router;
