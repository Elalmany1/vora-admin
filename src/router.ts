import {createRouter,createWebHistory} from 'vue-router'
const router=createRouter({history:createWebHistory(),routes:[
 {path:'/',redirect:'/dashboard'},
 {path:'/',component:()=>import('./components/layouts/AdminLayout.vue'),children:[
  {path:'dashboard',component:()=>import('./pages/DashboardPage.vue'),meta:{title:'Dashboard'}},
  {path:'products',component:()=>import('./pages/ProductsPage.vue'),meta:{title:'Products'}},
  {path:'products/new',component:()=>import('./pages/ProductEditorPage.vue'),meta:{title:'New product'}},
  {path:'products/:id/edit',component:()=>import('./pages/ProductEditorPage.vue'),meta:{title:'Edit product'}},
  {path:'inventory',component:()=>import('./pages/InventoryPage.vue'),meta:{title:'Inventory'}},
  {path:'orders',component:()=>import('./pages/OrdersPage.vue'),meta:{title:'Orders'}},
  {path:'orders/:id',component:()=>import('./pages/OrderDetailsPage.vue'),meta:{title:'Order'}},
  {path:'customers',component:()=>import('./pages/CustomersPage.vue'),meta:{title:'Customers'}},
  {path:'reports',component:()=>import('./pages/GenericPage.vue'),meta:{title:'Reports'}},
  {path:'settings',component:()=>import('./pages/GenericPage.vue'),meta:{title:'Settings'}},
 ]}
]});export default router
