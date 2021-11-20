import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartenaireIndexComponent } from './pages/partenaires/partenaire-index/partenaire-index.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartenaireCreateComponent } from './pages/partenaires/partenaire-create/partenaire-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfilComponent } from './pages/profil/profil.component';
import { UserService } from './services/user.service';
import { PartenaireShowComponent } from './pages/partenaires/partenaire-show/partenaire-show.component';
import { PartenaireEditComponent } from './pages/partenaires/partenaire-edit/partenaire-edit.component';
import { RecrutementIndexComponent } from './pages/recrutements/recrutement-index/recrutement-index.component';
import { RecrutementShowComponent } from './pages/recrutements/recrutement-show/recrutement-show.component';
import { RecrutementEditComponent } from './pages/recrutements/recrutement-edit/recrutement-edit.component';
import { RecrutementCreateComponent } from './pages/recrutements/recrutement-create/recrutement-create.component';
import { ActiviteIndexComponent } from './pages/activites/activite-index/activite-index.component';
import { ActiviteCreateComponent } from './pages/activites/activite-create/activite-create.component';
import { ActiviteEditComponent } from './pages/activites/activite-edit/activite-edit.component';
import { ActiviteShowComponent } from './pages/activites/activite-show/activite-show.component';
import { CategorieIndexComponent } from './pages/services/categories/categorie-index/categorie-index.component';
import { CategorieCreateComponent } from './pages/services/categories/categorie-create/categorie-create.component';
import { CategorieEditComponent } from './pages/services/categories/categorie-edit/categorie-edit.component';
import { CategorieShowComponent } from './pages/services/categories/categorie-show/categorie-show.component';
import { TechnologieIndexComponent } from './pages/services/technologies/technologie-index/technologie-index.component';
import { TechnologieShowComponent } from './pages/services/technologies/technologie-show/technologie-show.component';
import { TechnologieEditComponent } from './pages/services/technologies/technologie-edit/technologie-edit.component';
import { TechnologieCreateComponent } from './pages/services/technologies/technologie-create/technologie-create.component';
import { DevEditComponent } from './pages/services/devs/dev-edit/dev-edit.component';
import { DevShowComponent } from './pages/services/devs/dev-show/dev-show.component';
import { DevIndexComponent } from './pages/services/devs/dev-index/dev-index.component';
import { DevCreateComponent } from './pages/services/devs/dev-create/dev-create.component';
import { PersonnelCreateComponent } from './pages/personnels/personnel-create/personnel-create.component';
import { PersonnelEditComponent } from './pages/personnels/personnel-edit/personnel-edit.component';
import { PersonnelIndexComponent } from './pages/personnels/personnel-index/personnel-index.component';
import { PersonnelShowComponent } from './pages/personnels/personnel-show/personnel-show.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilUpdateComponent } from './pages/profil-update/profil-update.component';
import { AuthGuard } from './services/auth-guard.service';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PartenaireIndexComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PartenaireCreateComponent,
    ProfilComponent,
    PartenaireShowComponent,
    PartenaireEditComponent,
    RecrutementIndexComponent,
    RecrutementShowComponent,
    RecrutementEditComponent,
    RecrutementCreateComponent,
    ActiviteIndexComponent,
    ActiviteCreateComponent,
    ActiviteEditComponent,
    ActiviteShowComponent,
    CategorieIndexComponent,
    CategorieCreateComponent,
    CategorieEditComponent,
    CategorieShowComponent,
    TechnologieIndexComponent,
    TechnologieShowComponent,
    TechnologieEditComponent,
    TechnologieCreateComponent,
    DevEditComponent,
    DevShowComponent,
    DevIndexComponent,
    DevCreateComponent,
    PersonnelCreateComponent,
    PersonnelEditComponent,
    PersonnelIndexComponent,
    PersonnelShowComponent,
    AdminComponent,
    ProfilUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
