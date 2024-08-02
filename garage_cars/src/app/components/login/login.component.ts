
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';


// nombres usados para seguridad
// envio de token = into
// nombre de usuario = Nuat
// rol =n3yB6PZnGE8n7F
// admin=J8p4SBfJgRfZCo
// tecnico=H7qm7gQr6DBGfM
// usuario=hbh2jFVsQM7RUy


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  mostrarSpinner: boolean = false;
  mostrarFormulario: boolean = true;

  form!: FormGroup;

   constructor(/*inyeccion de independencias*/
    private fb: FormBuilder,
    private client: ClientService,
    public autorizacion: AutorizacionService,
    private route: Router
    ){}


      ngOnInit(): void {
        this.form = this.fb.group({/*se inicializa el form*/
          id: ['', Validators.required],
          password: ['', Validators.required]
        });
      }

      async onSubmit(){
        this.mostrarSpinner = true;
        this.mostrarFormulario = false;
        if(this.form.valid){
          this.client.postRequest('http://127.0.0.1:5000/login',{
            id:this.form.value.id,
            password:this.form.value.password
        }).subscribe(
            (response:any)=>{
              console.log('-------'+response),
              //token
              this.autorizacion.login(response.into)
              //nombres
              this.autorizacion.setCourrentUser(response.Nuat)
              //rol
              this.autorizacion.setCourrentRol(response.n3yB6PZnGE8n7F)
              //doc
              this.autorizacion.setCourrentDoc(response.doc)

              Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login exitoso',
              showConfirmButton: false,
              timer: 2500
              })

              this.route.navigate(['/app-lista-mecanicos']);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Ingreso Exitoso',
                showConfirmButton: false,
                timer: 2000
              })

          }),

          (error:any)=> {
            console.log(error);
         };

        }else{
          console.log("Form error");
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '¡¡Usuario o contraseña incorrecta!!',
            showConfirmButton: false,
            timer: 2000
          }),
          this.route.navigate(['/login']);
          this.mostrarFormulario = true;
          this.mostrarSpinner=false;

       }

        }

  inputIsValid(llave: string): boolean {
    console.log('entra validacion');
    return !this.form.controls[llave].valid
  }

  getInputError(llave: string): true | undefined {
    console.log('entra error');
    return this.form.controls['id'].getError(llave)
  }
}

