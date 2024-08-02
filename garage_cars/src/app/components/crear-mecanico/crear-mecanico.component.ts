import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crear-mecanico',
  templateUrl: './crear-mecanico.component.html',
  styleUrls: ['./crear-mecanico.component.css']
})

export class CrearMecanicoComponent implements OnInit {
  form: FormGroup = this.fb.group({/*se inicializa el form*/
  nombre_completo: ['', Validators.required],
  docuemento: ['', Validators.required],
  telefono: ['', Validators.required],
  direccion: ['', Validators.required],
  ciudad: ['', Validators.required],
  rol: ['', Validators.required]

  });

  constructor(
    private client: ClientService,
    private fb: FormBuilder, /*inyeccion de independencias*/
    private route: Router /*inyeccion de independencias*/
  ) { }

  ngOnInit(): void{
  }
  /**/
  onSubmit(){
    if(this.form.valid){

      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: false,
      timer: 2500
      });
      let data={
        nombre_completo:this.form.value.nombre_completo,
        documento:this.form.value.documento,
        telefono:this.form.value.telefono,
        direccion:this.form.value.direccion,
        ciudad:this.form.value.ciudad,
        rol:this.form.value.rol

      }

    this.client.postRequest(environment.url+"/register",data
    ).subscribe(

    async (response:any)=>{
      //Acuerdo de confidencialidad

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 2000
      })

      this.route.navigate(['/login']);

    }),
    (error:any)=>{
      console.log(error);
    };
    console.log("Form error");
    }else{
      Swal.fire({

        position: 'top-left',
        icon: 'error',
        title: 'Algo salió mal, inténtanto de nuevo',
        showConfirmButton: false,
        timer: 2000
      })

      this.route.navigate(['/login']);
      console.log("Form error");

    }
  }
}
