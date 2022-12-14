import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { NgxEditorModel } from 'ngx-monaco-editor';
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Toolbar component.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
		this.matIconRegistry
			.addSvgIcon(
				`github`,
				this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/github.svg")
			).addSvgIcon(
				`monaco`,
				this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/projet-monaco.svg")
			);
	}
  
	ngOnInit(): void {
	}

	goToPersonalGithub(): void {
		window.open("https://github.com/stephengeorge568");	
	}

}
