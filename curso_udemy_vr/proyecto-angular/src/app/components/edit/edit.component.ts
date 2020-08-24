import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;
  public img_bool: boolean;
  public src_img: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = "Editar proyecto";
    this.url = Global.url;
    this.img_bool = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id);
    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          
          // Subir imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id, [], this.filesToUpload, 'image')
            .then((result:any)=>{
              this.status = 'success';
              this.save_project = result.project;
            });
          }else{
            this.status = 'success';
            this.save_project = response.project;
          }

          
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    let files = fileInput.srcElement.files;
    if(files && files[0]){
      let reader = new FileReader();
      reader.onload = (e) => {
        this.src_img = e.target.result;
      }
      reader.readAsDataURL(files[0]);
      this.img_bool = true;
    }
  }

}
