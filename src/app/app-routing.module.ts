import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'
import { ProfilComponent } from './pages/profil/profil.component'
import { PartenaireIndexComponent } from './pages/partenaires/partenaire-index/partenaire-index.component'
import { PartenaireCreateComponent } from './pages/partenaires/partenaire-create/partenaire-create.component';
import { PartenaireShowComponent } from './pages/partenaires/partenaire-show/partenaire-show.component';
import { PartenaireEditComponent } from './pages/partenaires/partenaire-edit/partenaire-edit.component';
import { RecrutementIndexComponent } from './pages/recrutements/recrutement-index/recrutement-index.component';
import { RecrutementCreateComponent } from './pages/recrutements/recrutement-create/recrutement-create.component';
import { RecrutementShowComponent } from './pages/recrutements/recrutement-show/recrutement-show.component';
import { RecrutementEditComponent } from './pages/recrutements/recrutement-edit/recrutement-edit.component';
import { ActiviteIndexComponent } from './pages/activites/activite-index/activite-index.component';
import { ActiviteEditComponent } from './pages/activites/activite-edit/activite-edit.component';
import { ActiviteShowComponent } from './pages/activites/activite-show/activite-show.component';
import { ActiviteCreateComponent } from './pages/activites/activite-create/activite-create.component';
import { CategorieIndexComponent } from './pages/services/categories/categorie-index/categorie-index.component';
import { CategorieCreateComponent } from './pages/services/categories/categorie-create/categorie-create.component';
import { CategorieShowComponent } from './pages/services/categories/categorie-show/categorie-show.component';
import { CategorieEditComponent } from './pages/services/categories/categorie-edit/categorie-edit.component';
import { DevIndexComponent } from './pages/services/devs/dev-index/dev-index.component';
import { DevCreateComponent } from './pages/services/devs/dev-create/dev-create.component';
import { DevShowComponent } from './pages/services/devs/dev-show/dev-show.component';
import { DevEditComponent } from './pages/services/devs/dev-edit/dev-edit.component';
import { TechnologieIndexComponent } from './pages/services/technologies/technologie-index/technologie-index.component';
import { TechnologieEditComponent } from './pages/services/technologies/technologie-edit/technologie-edit.component';
import { TechnologieShowComponent } from './pages/services/technologies/technologie-show/technologie-show.component';
import { TechnologieCreateComponent } from './pages/services/technologies/technologie-create/technologie-create.component';
import { PersonnelIndexComponent } from './pages/personnels/personnel-index/personnel-index.component';
import { PersonnelCreateComponent } from './pages/personnels/personnel-create/personnel-create.component';
import { PersonnelShowComponent } from './pages/personnels/personnel-show/personnel-show.component';
import { PersonnelEditComponent } from './pages/personnels/personnel-edit/personnel-edit.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilUpdateComponent } from './pages/profil-update/profil-update.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
    {path: 'profil/update', component: ProfilUpdateComponent, canActivate: [AuthGuard]},
    {path: 'partenaires', children:
      [
        {path: '', component: PartenaireIndexComponent, canActivate: [AuthGuard]},
        {path: 'ajout', component: PartenaireCreateComponent, canActivate: [AuthGuard]},
        {path: ':id', component: PartenaireShowComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: PartenaireEditComponent, canActivate: [AuthGuard]},
      ]
    },
    {path: 'recrutements', children:
      [
        {path: '', component: RecrutementIndexComponent, canActivate: [AuthGuard]},
        {path: 'ajout', component: RecrutementCreateComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecrutementShowComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: RecrutementEditComponent, canActivate: [AuthGuard]},
      ]
    },
    {path: 'activites', children:
      [
        {path: '', component: ActiviteIndexComponent, canActivate: [AuthGuard]},
        {path: 'ajout', component: ActiviteCreateComponent, canActivate: [AuthGuard]},
        {path: ':id', component: ActiviteShowComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: ActiviteEditComponent, canActivate: [AuthGuard]},
      ]
    },
    {path: 'personnels', children:
      [
        {path: '', component: PersonnelIndexComponent, canActivate: [AuthGuard]},
        {path: 'ajout', component: PersonnelCreateComponent, canActivate: [AuthGuard]},
        {path: ':id', component: PersonnelShowComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: PersonnelEditComponent, canActivate: [AuthGuard]},
      ]
    },
    {path: 'services/categories', children:
      [
        {path: '', component: CategorieIndexComponent, canActivate: [AuthGuard]},
        {path: 'ajout', component: CategorieCreateComponent, canActivate: [AuthGuard]},
        {path: ':id', component: CategorieShowComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: CategorieEditComponent, canActivate: [AuthGuard]},
      ]
    },
    {path: 'services/devs', children:
      [
        {path: '', component: DevIndexComponent, canActivate: [AuthGuard]},
        {path: 'ajout', component: DevCreateComponent, canActivate: [AuthGuard]},
        {path: ':id', component: DevShowComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: DevEditComponent, canActivate: [AuthGuard]},
      ]
    },
    {path: 'services/technologies', children:
      [
        {path: '', component: TechnologieIndexComponent, canActivate: [AuthGuard]},
        {path: 'ajout', component: TechnologieCreateComponent, canActivate: [AuthGuard]},
        {path: ':id', component: TechnologieShowComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: TechnologieEditComponent, canActivate: [AuthGuard]},
      ]
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
