import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableUsedComponent } from './pages/table-used/table-used.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: TableUsedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
