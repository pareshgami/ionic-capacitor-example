import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NativeKeyboardExamplePage } from './pages/native-keyboard-example/native-keyboard-example.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'native-keyboard-example',
    pathMatch: 'full'
  },
  {
    path: 'native-keyboard-example',
    component: NativeKeyboardExamplePage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
