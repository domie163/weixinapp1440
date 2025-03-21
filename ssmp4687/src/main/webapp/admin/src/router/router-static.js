import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import huiyuanka from '@/views/modules/huiyuanka/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import huiyuankashenqing from '@/views/modules/huiyuankashenqing/list'
    import discussbaoxiangxinxi from '@/views/modules/discussbaoxiangxinxi/list'
    import discussjishixinxi from '@/views/modules/discussjishixinxi/list'
    import shangjia from '@/views/modules/shangjia/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import discussshangpinxinxi from '@/views/modules/discussshangpinxinxi/list'
    import baoxiangxinxi from '@/views/modules/baoxiangxinxi/list'
    import jishixinxi from '@/views/modules/jishixinxi/list'
    import config from '@/views/modules/config/list'
    import goumaixinxi from '@/views/modules/goumaixinxi/list'
    import xiangmudingdan from '@/views/modules/xiangmudingdan/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/huiyuanka',
        name: '会员卡',
        component: huiyuanka
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/huiyuankashenqing',
        name: '会员卡申请',
        component: huiyuankashenqing
      }
      ,{
	path: '/discussbaoxiangxinxi',
        name: '包厢信息评论',
        component: discussbaoxiangxinxi
      }
      ,{
	path: '/discussjishixinxi',
        name: '技师信息评论',
        component: discussjishixinxi
      }
      ,{
	path: '/shangjia',
        name: '商家',
        component: shangjia
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
      ,{
	path: '/discussshangpinxinxi',
        name: '商品信息评论',
        component: discussshangpinxinxi
      }
      ,{
	path: '/baoxiangxinxi',
        name: '包厢信息',
        component: baoxiangxinxi
      }
      ,{
	path: '/jishixinxi',
        name: '技师信息',
        component: jishixinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/goumaixinxi',
        name: '购买信息',
        component: goumaixinxi
      }
      ,{
	path: '/xiangmudingdan',
        name: '项目订单',
        component: xiangmudingdan
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
