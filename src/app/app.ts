import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

type Service = {
  index: string;
  title: string;
  description: string;
};

type GalleryItem = {
  image: string;
  alt: string;
  caption: string;
};

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly calendlyUrl = 'https://calendly.com/juansefavoretti';

  protected readonly services: Service[] = [
    {
      index: '01',
      title: 'Corte de pelo',
      description: 'Cortes clasicos o actuales, con asesoramiento para encontrar forma, largo y mantenimiento.',
    },
    {
      index: '02',
      title: 'Barba y cejas',
      description: 'Perfilado de barba, terminaciones limpias y cejas prolijas sin perder naturalidad.',
    },
    {
      index: '03',
      title: 'Color',
      description: 'Trabajos de color pensados para acompanar el corte y el estilo personal.',
    },
    {
      index: '04',
      title: 'Lavado y peinado',
      description: 'Lavado, secado, planchado y peinados para salir listo del salon.',
    },
    {
      index: '05',
      title: 'Disenos en lineas',
      description: 'Detalles con maquina y navaja para sumar identidad al corte.',
    },
    {
      index: '06',
      title: 'Acomodo de rastas',
      description: 'Orden y mantenimiento de rastas con criterio estetico y cuidado.',
    },
  ];

  protected readonly gallery: GalleryItem[] = [
    {
      image: '/assets/instagram/fade-work.jpg',
      alt: 'JuanSe trabajando un fade con maquina',
      caption: 'Fade en proceso',
    },
    {
      image: '/assets/instagram/beard-detail.jpg',
      alt: 'Detalle de barba y terminacion con tijera',
      caption: 'Barba y detalle',
    },
    {
      image: '/assets/instagram/neck-fade.jpg',
      alt: 'Detalle de nuca y degradado prolijo',
      caption: 'Terminacion limpia',
    },
    {
      image: '/assets/instagram/tools-flatlay.jpg',
      alt: 'Herramientas de peluqueria sobre la mesa de trabajo',
      caption: 'Mesa de trabajo',
    },
    {
      image: '/assets/instagram/line-cleanup.jpg',
      alt: 'Perfilado de corte con maquina',
      caption: 'Perfilado',
    },
  ];
}
