import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDocumentMetaResponse } from 'src/app/objects/GetDocumentMetaResponse';
import { DocumentService } from '../home/document-service/document.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() widgetType: string = "";
  @Input() documentText: string = "!!!!DOCUMENT TEXT SHOULD BE HERE!!!!";
  @Input () widgetTypeDownload: boolean = true;
  @Input () buttonToggle: boolean = false
  @Input () widgetTypeCollaborator: boolean = true;

  
  documentId: number = -1;
  documentPassword: string = '';
  documentMetadata?: GetDocumentMetaResponse;
  isDocumentFound: boolean = false;
  constructor(private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router) {
      this.getMetadata();
     }

  ngOnInit(): void {
  }

  downloadDocument(): void{
  
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      let file = new Blob([this.documentText],{type: 'txt'});
      let url = window.URL.createObjectURL(file)
      link.setAttribute('href', url);
      link.setAttribute('download', 'test');
      document.body.appendChild(link);
      link.click();
      link.remove();
  
  }
  getMetadata(): void {
    let idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.documentId = Number(idParam);
        this.documentService.getDocumentMetaData(this.documentId).subscribe(
        response => {
          this.isDocumentFound = true;
          this.documentMetadata = response;
        }, 
        (err: HttpErrorResponse) => {
          this.isDocumentFound = false;
        }
      );
    }
    else {
        // Document id is not valid in url.
        this.isDocumentFound = false;
        // this.router.navigate(['/home']);
    }
  }

}
