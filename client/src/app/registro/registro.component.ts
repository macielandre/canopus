import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { Carrossel } from '../clientes/shared/carrossel';
import { CarrosselService } from '../services/carrossel.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formCliente!: FormGroup
  selectedFile = null
  url=''

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Carrossel())
  }

  createForm(carrossel: Carrossel) {
    this.formCliente = new FormGroup({
      nome: new FormControl(carrossel.nome),
      localizacao: new FormControl(carrossel.localizacao),
      aberto: new FormControl(carrossel.aberto),
      imagem: new FormControl(carrossel.imagem)
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    this.createForm(new Carrossel());
  }

  onChange(e: any) {
    if(e.target.files){
      var reader =new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.url=event.target.result
      }
    }
    console.log(this.url)
  }

}
