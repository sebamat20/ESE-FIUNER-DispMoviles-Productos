import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  private producto;
  constructor(private activeteRoute: ActivatedRoute,
   private prodSrv: ProductoService) { }

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        this.producto =
          this.prodSrv.obtenerPorId(paramMap.get("id"));
    });
  }

}