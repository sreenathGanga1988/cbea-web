import { Routes } from '@angular/router';

export const routes: Routes = [

   // Public routes
   { path: '',    loadChildren: () =>  import('./public-portal/public-portal.module').then((m) => m.PublicPortalModule),  },
// User routes
{  path: 'user',  loadChildren: () =>    import('./selfcare-portal/selfcare-portal.module').then((m) => m.SelfcarePortalModule),  },

 // Admin routes
 {  path: 'admin',  loadChildren: () =>    import('./admin-portal/admin-portal.module').then((m) => m.AdminPortalModule), },


// Fallback route for undefined paths
{ path: '**', redirectTo: 'public', pathMatch: 'full' },






  ];
