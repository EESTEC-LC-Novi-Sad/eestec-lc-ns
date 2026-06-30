import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { BlogPostComponent } from './components/pages/blog-post/blog-post.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { KontehComponent } from './components/pages/projects/konteh/konteh.component';
import { SSAComponent } from './components/pages/projects/ssa/ssa.component';
import { TechSkillsHubComponent } from './components/pages/projects/tech-skills-hub/tech-skills-hub.component';
import { SoftSkillsAcademyComponent } from './components/pages/projects/soft-skills-academy/soft-skills-academy.component';
import { Code9Component } from './components/pages/projects/code9/code9.component';
import { PetDanaUOblacima } from './components/pages/projects/pet-dana-u-oblacima/pet-dana-u-oblacima.component';
import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';
import { VeConfComponent } from './components/pages/projects/ve-conf/ve-conf.component';
import { MotivacioniVikendComponent } from './components/pages/projects/motivacioni-vikend/motivacioni-vikend.component';
import { CongressNsComponent } from './components/pages/projects/congress-ns/congress-ns.component';
import { EestechChallengeComponent } from './components/pages/projects/eestech-challenge/eestech-challenge.component';
import { WelcomeToFTNComponent } from './components/pages/projects/welcome-to-ftn/welcome-to-ftn.component';
import { TrainingForTrainersHeldInNoviSad2024Component } from './components/pages/projects/16th Training for Trainers held in Novi Sad 2024/16th-training-for-trainers-held-in-novi-sad-2024.component';

const baseTitle = 'EESTEC LC Novi Sad';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'O nama - ' + baseTitle,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projekti - ' + baseTitle,
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog - ' + baseTitle,
  },
  {
    path: 'post/:id',
    component: BlogPostComponent,
    title: 'Blog - ' + baseTitle,
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Kontakt - ' + baseTitle,
  },
  {
    path: 'partners',
    component: PartnersComponent,
    title: 'Partneri - ' + baseTitle,
  },
  {
    path: 'partner/:id',
    component: PartnerPageComponent,
    title: 'Partneri - ' + baseTitle,
  },
  {
    path: 'konteh',
    component: KontehComponent,
    title: 'KONTEH - ' + baseTitle,
  },
  
  
  {
    path: 'soft-skills-academy',
    component: SoftSkillsAcademyComponent,
    title: 'Soft Skills Academy - ' + baseTitle,
  },

  {
    path: 'code9',
    component: Code9Component,
    title: 'Code9 - ' + baseTitle,
  },
  {
    path: '5-dana-u-oblacima',
    component: PetDanaUOblacima,
    title: '5 dana u oblacima - ' + baseTitle,
  },
  {
    path: 've-conf',
    component: VeConfComponent,
    title: 'Ve:Conf - ' + baseTitle,
  },
  {
    path: 'motivacioni-vikend',
    component: MotivacioniVikendComponent,
    title: 'Ve:Conf - ' + baseTitle,
  },
  {
    path: 'congress-ns',
    component: CongressNsComponent,
    title: 'Ve:Conf - ' + baseTitle,
  },
  {
    path: 'eestech-challenge',
    component: EestechChallengeComponent,
    title: 'Ve:Conf - ' + baseTitle,
  },
  {
    path: 'tech-skills-hub',
    component: TechSkillsHubComponent,
    title: 'Tech Skills Hub - ' + baseTitle,
  },
  {
    path: 'welcome-to-ftn',
    component: WelcomeToFTNComponent,
    title: 'Welcome to FTN - ' + baseTitle,
  },
  {
    path: '16th Training for Trainers held in Novi Sad 2024',
    component: WelcomeToFTNComponent,
    title: '16th Training for Trainers held in Novi Sad/2024 - ' + baseTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - ' + baseTitle,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
