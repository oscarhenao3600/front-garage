import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";


// nombres usados para seguridad
// envio de token = into
// nombre de usuario = Nuat
// rol =n3yB6PZnGE8n7F
// admin=J8p4SBfJgRfZCo
// tecnico=H7qm7gQr6DBGfM
// usuario=hbh2jFVsQM7RUy

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  isLogin = new BehaviorSubject<boolean>(this.checkToken());
  admin = new BehaviorSubject<boolean>(this.checkRol("J8p4SBfJgRfZCo"));
  tecnico = new BehaviorSubject<boolean>(this.checkRol("H7qm7gQr6DBGfM"));
  usuario = new BehaviorSubject<boolean>(this.checkRol("hbh2jFVsQM7RUy"));

  private checkToken() : boolean {
    return !!localStorage.getItem('into');
  }

  private checkRol(rol: string) : boolean {
    if(localStorage.getItem('courrentRol')){
      let rolLocalStorage = localStorage.getItem('courrentRol');
      return rol === rolLocalStorage
    }
    return false
  }


  login(into:string) : void {

    localStorage.setItem('into', into);
    this.admin.next(true);
    this.tecnico.next(true);
    this.isLogin.next(true);
    this.usuario.next(true);

  }

    //método que nos permite establecer el nombre del usuario

  setCourrentUser(user:string) : void {
    localStorage.setItem('courrentUser', user);
  }

  setCourrentRol(n3yB6PZnGE8n7F:string) : void {
    localStorage.setItem('courrentRol', n3yB6PZnGE8n7F);
    console.log("rol",n3yB6PZnGE8n7F)

      if (n3yB6PZnGE8n7F=="J8p4SBfJgRfZCo") {/*admin*/
      console.log("Rol es admin")
        this.admin.next(true);
        this.tecnico.next(false);
        this.usuario.next(false);
        
      }if (n3yB6PZnGE8n7F=="H7qm7gQr6DBGfM") {/*tecnico*/
      console.log("Rol es tecnico")
        this.tecnico.next(true);
        this.admin.next(false);
        this.usuario.next(false);

      }if (n3yB6PZnGE8n7F=="hbh2jFVsQM7RUy") {/*usuario*/
      console.log("Rol es usuario")
        this.usuario.next(true);
        this.admin.next(false);
        this.tecnico.next(false);
      }
  }

  setCourrentDoc(doc:string) : void {
    localStorage.setItem('courrentDoc', doc);
  }

  setCourrentCodigoR(CodigoR:string) : void {
    localStorage.setItem('courrentCodigoR', CodigoR);
  }



    //método que nos permite recuperar el nombre del usuario
  getCourrentUser() {
    return localStorage.getItem('courrentUser');
  }

  getCourrentRol() {
    return localStorage.getItem('courrentRol');
  }

  getCourrentDoc() {
    return localStorage.getItem('courrentDoc');
  }

  getCourrentCodigoR() {
    return localStorage.getItem('courrentCodigoR');
  }

  
    //método que nos permite eliminar el nombre de usuario
  private deleteCourrentUser() : void {
    localStorage.removeItem('courrentUser');
  }

  private deleteCourrentRol() : void {
    localStorage.removeItem('courrentRol');
  }

  private deleteCourrentDoc() : void {
    localStorage.removeItem('courrentDoc');
  }

  private deleteCourrentCodigoR() : void {
    localStorage.removeItem('courrentCodigoR');
  }

  public deletecarrito() : void {
    localStorage.removeItem('carrito');
  }


  getToken(): string | null{
    if (this.checkToken()){
      return localStorage.getItem('into')
    }
    return "No hay token";
  }
  
  
    //método que nos permite romover el token almacenado y el nombre del
    //usuario actual y enviar una señal al BehaviorSubject para establecer
    //su nuevo valor, en este caso false para indicar que no estamos logueados
  logout() : void {
    localStorage.removeItem('into');
    this.deleteCourrentUser();
    this.deleteCourrentRol();
    this.deleteCourrentDoc();
    this.deleteCourrentCodigoR();
    this.isLogin.next(false);
  }

  eliminarProducto() : void {
    this.deletecarrito();
    
  }
    //método que nos retorna el BehaviorSubject cómo un observable
    isLoggedIn() : Observable<boolean> {
      return this.isLogin.asObservable();
      }
    
  
    // método que nos retorna el BehaviorSubject admin cómo un observable
    isAdmin() : Observable<boolean> {
     return this.admin.asObservable();
     }
    isTecni() : Observable<boolean> {
    return this.tecnico.asObservable();
    }
    isUser() : Observable<boolean> {
    return this.usuario.asObservable();
    }
 
     

    // constructor() { }
}