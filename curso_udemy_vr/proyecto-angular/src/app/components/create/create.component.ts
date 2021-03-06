import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project;
  public url: string;
  public img_bool: boolean;
  public src_img: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2019,'','');
    this.url = Global.url;
    this.img_bool = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          
          // Subir imagen
          this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id, [], this.filesToUpload, 'image')
          .then((result:any)=>{
            this.status = 'success';
            this.save_project = result.project;
            form.reset();
            this.img_bool = false;
          });

          
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
