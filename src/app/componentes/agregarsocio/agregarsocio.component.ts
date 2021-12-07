import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SociosService } from 'src/app/servicios/socios.service';

@Component({
  selector: 'app-agregarsocio',
  templateUrl: './agregarsocio.component.html',
  styleUrls: ['./agregarsocio.component.css']
})
export class AgregarsocioComponent implements OnInit {
  createSocio: FormGroup;
  titulo = 'Agregar socio';
  loading = false;
  submitted = false;
  id: string | null;
  constructor(private fb: FormBuilder, private _socioService: SociosService, private router: Router,
    private toastr: ToastrService, private aRoute: ActivatedRoute) {
      this.createSocio = this.fb.group({
        rut: ['', Validators.required],
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        mail: ['', Validators.email],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required],
        fechaingreso: ['', Validators.required],
        estado: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id);
     }

  ngOnInit(): void {
    this.esEditar();
  }
  
  agregarEditarSocio(){
    this.submitted = true;

    if (this.createSocio.invalid) {
      return;
    }

    if (this.id == null) {
      this.agregarSocio();
    }else{
      this.editarSocio(this.id);
    }
  };

  editarSocio(id: string){
    this.loading = true;

    const socio: any = {
      rut: this.createSocio.value.rut,
      nombre: this.createSocio.value.nombre,
      apellidos: this.createSocio.value.apellidos,
      mail: this.createSocio.value.mail,
      telefono: this.createSocio.value.telefono,
      direccion: this.createSocio.value.direccion,
      fechaingreso: this.createSocio.value.fechaingreso,
      fechamodificacion: new Date(),
      estado: this.createSocio.value.estado
    }

    this._socioService.actualizarSocio(id, socio).then(() => {
      this.loading = false;
      this.toastr.info('el socio fue modificado con exito', 'Socio modificado',{
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/'])
    });

  };

  agregarSocio(){
    const socio: any = {
      rut: this.createSocio.value.rut,
      nombre: this.createSocio.value.nombre,
      apellidos: this.createSocio.value.apellidos,
      mail: this.createSocio.value.mail,
      telefono: this.createSocio.value.telefono,
      direccion: this.createSocio.value.direccion,
      fechaingreso: this.createSocio.value.fechaingreso,
      fechacreacion: new Date(),
      fechamodificacion: new Date(),
      estado: this.createSocio.value.estado
    }
    this.loading = true;
    this._socioService.agregarSocio(socio).then(() => {
      console.log('Socio agregado');
      this.toastr.success('El socio fue registrado con exito', 'Socio registrado',{
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/']);
    }).catch(error => {
      console.log(error);
    });
    
  }

  esEditar(){
    this.loading = true;
    this.titulo = 'Editar socio';
    if (this.id !== null) {
      this.loading
      this._socioService.getSocio(this.id).subscribe(data => {
        console.log(data.payload.data()['nombre']);

      });
    }
  }

}
