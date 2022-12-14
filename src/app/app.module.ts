import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './components/editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MonacoComponent } from './components/monaco/monaco.component'; 
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from "@angular/material/icon";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { DocumentInfoComponent } from './components/document-info/document-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OpenDocumentComponent } from './components/home/open-document/open-document.component';
import { CreateDocumentComponent } from './components/home/create-document/create-document.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';


const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'OT-editor/assets', // configure base path cotaining monaco-editor directory after build default: './assets'
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => {  } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.console.log((<any>window).monaco);
};

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    MonacoComponent,
    ToolbarComponent,
    HomeComponent,
    DocumentInfoComponent,
    OpenDocumentComponent,
    CreateDocumentComponent,
    FooterComponent,
    WelcomeComponent,
    HowItWorksComponent,
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
