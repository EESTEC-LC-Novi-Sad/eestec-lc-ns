import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProjectCardComponent } from './components/pages/landing-page/project-card/project-card.component';
import { BlogPostCardComponent } from './components/pages/landing-page/blog-post-card/blog-post-card.component';
import { BlogPostComponent } from './components/pages/blog-post/blog-post.component';
import { FormsModule } from '@angular/forms';
import { TechSkillsHubComponent } from './components/pages/projects/tech-skills-hub/tech-skills-hub.component';
import { WelcomeToFTNComponent } from './components/pages/projects/welcome-to-ftn/welcome-to-ftn.component';
import { TrainingForTrainersHeldInNoviSad2024Component } from './components/pages/projects/16th Training for Trainers held in Novi Sad 2024/16th-training-for-trainers-held-in-novi-sad-2024.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { KontehComponent } from './components/pages/projects/konteh/konteh.component';
import { SoftSkillsAcademyComponent } from './components/pages/projects/soft-skills-academy/soft-skills-academy.component';
import { Code9Component } from './components/pages/projects/code9/code9.component';
import { PetDanaUOblacima } from './components/pages/projects/pet-dana-u-oblacima/pet-dana-u-oblacima.component';
import { EestechChallengeComponent } from './components/pages/projects/eestech-challenge/eestech-challenge.component';
import { VeConfComponent } from './components/pages/projects/ve-conf/ve-conf.component';
import { MotivacioniVikendComponent } from './components/pages/projects/motivacioni-vikend/motivacioni-vikend.component';
import { CongressNsComponent } from './components/pages/projects/congress-ns/congress-ns.component';
import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';
import { SquareImageComponent } from './components/square-image/square-image.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { BlogCardComponent } from './components/pages/blog/blog-card/blog-card.component';
import { SidebarBlogCardComponent } from './components/sidebar/sidebar-blog-card/sidebar-blog-card.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BoardieCardComponent } from './components/pages/contact/boardie-card/boardie-card.component';
import { PartnerCardComponent } from './components/pages/partners/partner-card/partner-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LandingPageComponent,
    AboutUsComponent,
    BlogComponent,
    PartnersComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectCardComponent,
    BlogPostCardComponent,
    BlogPostComponent,
    NotFoundComponent,
    KontehComponent,
    SoftSkillsAcademyComponent,
    Code9Component,
    PetDanaUOblacima,
    EestechChallengeComponent,
    VeConfComponent,
    MotivacioniVikendComponent,
    CongressNsComponent,
    PartnerPageComponent,
    SquareImageComponent,
    BlogCardComponent,
    SidebarBlogCardComponent,
    BoardieCardComponent,
    PartnerCardComponent,
    TechSkillsHubComponent,
    WelcomeToFTNComponent,
    TrainingForTrainersHeldInNoviSad2024Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LightgalleryModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
