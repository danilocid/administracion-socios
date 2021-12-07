import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SociosService {

  constructor(private firestore: AngularFirestore) { }
  agregarSocio(socio: any): Promise<any> {
    return this.firestore.collection('socios').add(socio);
  }
  getSocios(): Observable<any>{
    return this.firestore.collection('socios', ref => ref.orderBy('fechaIngreso', 'desc')
    ).snapshotChanges();
  }
  eliminarSocio(id: string): Promise<any>{
    return this.firestore.collection('socios').doc(id).delete();
  }

  getSocio(id: string): Observable<any>{
    return this.firestore.collection('socios').doc(id).snapshotChanges();
  }

  actualizarSocio(id: string, data:any): Promise<any>{
    return this.firestore.collection('socio').doc(id).update(data);
  }
}
