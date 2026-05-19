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

type AudienceFilter = 'Todos' | 'Hombres' | 'Mujeres' | 'Unisex';

type CutIdea = {
  title: string;
  audience: Exclude<AudienceFilter, 'Todos'>;
  tags: string[];
  bestFor: string;
  detail: string;
  image: string;
  alt: string;
};

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly calendlyUrl = 'https://calendly.com/favorettijuansergio';
  protected selectedAudience: AudienceFilter = 'Todos';
  protected selectedCutTag = 'Todos';
  protected cutsExpanded = false;
  protected readonly mobileCutPreviewLimit = 6;

  protected readonly audienceFilters: AudienceFilter[] = ['Todos', 'Hombres', 'Mujeres', 'Unisex'];

  protected readonly cutTagFilters = [
    'Todos',
    'Corto',
    'Medio',
    'Largo',
    'Fade',
    'Clasico',
    'Con barba',
    'Capas',
    'Bajo mantenimiento',
    'Cambio notorio',
    'Con líneas',
  ];

  protected readonly services: Service[] = [
    {
      index: '01',
      title: 'Corte de pelo',
      description: 'Cortes clásicos o actuales, con asesoramiento para encontrar forma, largo y mantenimiento.',
    },
    {
      index: '02',
      title: 'Barba y cejas',
      description: 'Perfilado de barba, terminaciones limpias y cejas prolijas sin perder naturalidad.',
    },
    {
      index: '03',
      title: 'Lavado y peinado',
      description: 'Lavado, secado, planchado y peinados para salir listo del salón.',
    },
    {
      index: '04',
      title: 'Diseños en líneas',
      description: 'Detalles con máquina y navaja para sumar identidad al corte.',
    },
    {
      index: '05',
      title: 'Acomodo de rastas',
      description: 'Orden y mantenimiento de rastas con criterio estetico y cuidado.',
    },
  ];

  protected readonly gallery: GalleryItem[] = [
    {
      image: '/assets/instagram/graded/juanse-finished-frontal-graded.webp',
      alt: 'Corte terminado con fade limpio y barba perfilada',
      caption: 'Resultado final',
    },
    {
      image: '/assets/instagram/graded/juanse-martin-design-graded.webp',
      alt: 'Corte terminado con fade prolijo y textura natural',
      caption: 'Textura natural',
    },
    {
      image: '/assets/instagram/graded/juanse-fade-lines-graded.webp',
      alt: 'Fade con diseño de líneas en clienta',
      caption: 'Lineas con fade',
    },
    {
      image: '/assets/instagram/graded/juanse-beard-trim-graded.webp',
      alt: 'JuanSe perfilando barba con máquina',
      caption: 'Barba perfilada',
    },
    {
      image: '/assets/instagram/graded/juanse-nape-work-graded.webp',
      alt: 'Trabajo de máquina en nuca y degradado',
      caption: 'Nuca prolija',
    },
    {
      image: '/assets/instagram/graded/juanse-back-process-graded.webp',
      alt: 'JuanSe trabajando un degradado desde atras',
      caption: 'Degradado',
    },
    {
      image: '/assets/instagram/graded/juanse-top-cutting-graded.webp',
      alt: 'JuanSe cortando la parte superior del pelo',
      caption: 'Trabajo superior',
    },
    {
      image: '/assets/instagram/graded/juanse-beard-comb-graded.webp',
      alt: 'JuanSe acomodando barba con peine y tijera',
      caption: 'Detalle de barba',
    },
    {
      image: '/assets/instagram/graded/juanse-detail-machine-graded.webp',
      alt: 'Detalle de máquina trabajando un corte',
      caption: 'Precisión',
    },
  ];

  protected readonly cutIdeas: CutIdea[] = [
    {
      title: 'Taper fade',
      audience: 'Hombres',
      tags: ['Corto', 'Fade', 'Bajo mantenimiento'],
      bestFor: 'Para prolijar sin cambiarte toda la forma.',
      detail:
        'Se limpia patilla y nuca con degradado suave, manteniendo volumen arriba. Juanse ajusta el largo para que crezca ordenado.',
      image: '/assets/references/cut-reference-taper-fade-ai.webp',
      alt: 'Referencia de taper fade bajo con textura arriba y transición alrededor de la oreja',
    },
    {
      title: 'Crop texturizado',
      audience: 'Hombres',
      tags: ['Corto', 'Bajo mantenimiento'],
      bestFor: 'Para pelo con movimiento y bajo mantenimiento.',
      detail:
        'Se trabaja textura con tijera y máquina, frente más liviano y laterales prolijos. Queda fácil de peinar todos los días.',
      image: '/assets/references/cut-reference-crop-texturizado.webp',
      alt: 'Imagen de ejemplo de crop texturizado con movimiento natural',
    },
    {
      title: 'Fade medio con barba',
      audience: 'Hombres',
      tags: ['Corto', 'Fade', 'Con barba', 'Cambio notorio'],
      bestFor: 'Para un cambio notorio, limpio y actual.',
      detail:
        'Degradado medio, contornos marcados y barba conectada al corte. Ideal si querés salir con una terminación más definida.',
      image: '/assets/references/cut-reference-fade-barba.webp',
      alt: 'Imagen de ejemplo de fade medio conectado con barba',
    },
    {
      title: 'Clasico a tijera',
      audience: 'Hombres',
      tags: ['Medio', 'Clasico'],
      bestFor: 'Para mantener largo con forma y caida natural.',
      detail:
        'Se ordenan laterales, peso y puntas sin dejarlo demasiado corto. Buen recurso cuando querés verte prolijo sin fade alto.',
      image: '/assets/references/cut-reference-clasico-tijera.webp',
      alt: 'Imagen de ejemplo de corte clasico a tijera',
    },
    {
      title: 'Low fade',
      audience: 'Hombres',
      tags: ['Corto', 'Fade', 'Bajo mantenimiento'],
      bestFor: 'Para una terminación limpia sin subir demasiado el degradé.',
      detail:
        'El fade queda bajo y discreto, ideal para mantener una imagen prolija sin perder naturalidad en la forma del corte.',
      image: '/assets/references/cut-reference-low-fade.webp',
      alt: 'Imagen de ejemplo de low fade discreto',
    },
    {
      title: 'Burst fade',
      audience: 'Hombres',
      tags: ['Corto', 'Fade', 'Cambio notorio'],
      bestFor: 'Para marcar más estilo alrededor de la oreja.',
      detail:
        'El degradé acompaña la curva de la oreja y deja más presencia atrás. Funciona bien si querés algo moderno sin exagerar.',
      image: '/assets/references/cut-reference-burst-fade.webp',
      alt: 'Imagen de ejemplo de burst fade',
    },
    {
      title: 'Mullet suave',
      audience: 'Hombres',
      tags: ['Medio', 'Capas', 'Cambio notorio'],
      bestFor: 'Para sumar personalidad y movimiento.',
      detail:
        'Mantiene textura arriba y algo más de largo en nuca. Juanse puede hacerlo suave para que sea usable todos los días.',
      image: '/assets/references/cut-reference-mullet-shag.webp',
      alt: 'Imagen de ejemplo de mullet suave',
    },
    {
      title: 'Buzz cut',
      audience: 'Hombres',
      tags: ['Corto', 'Bajo mantenimiento', 'Cambio notorio'],
      bestFor: 'Para resolverlo simple, limpio y fuerte.',
      detail:
        'Corte corto parejo con terminaciones cuidadas. Es directo, cómodo y deja la forma de la cabeza como protagonista.',
      image: '/assets/references/cut-reference-buzz-cut.webp',
      alt: 'Imagen de ejemplo de buzz cut',
    },
    {
      title: 'Bob clasico',
      audience: 'Mujeres',
      tags: ['Corto', 'Clasico', 'Cambio notorio'],
      bestFor: 'Para un cambio elegante y fácil de reconocer.',
      detail:
        'Largo a la mandíbula o un poco más abajo, puntas limpias y forma definida. Ideal si querés estructura sin complicarte.',
      image: '/assets/references/cut-reference-bob-clasico.webp',
      alt: 'Imagen de ejemplo de bob clasico',
    },
    {
      title: 'Long bob',
      audience: 'Mujeres',
      tags: ['Medio', 'Clasico', 'Bajo mantenimiento'],
      bestFor: 'Para acortar sin irte a un corte demasiado corto.',
      detail:
        'Queda cerca de los hombros, con puntas prolijas y movimiento natural. Sirve para ordenar largo y renovar la caida.',
      image: '/assets/references/cut-reference-long-bob.webp',
      alt: 'Imagen de ejemplo de long bob',
    },
    {
      title: 'Shag suave',
      audience: 'Mujeres',
      tags: ['Medio', 'Capas', 'Cambio notorio'],
      bestFor: 'Para darle textura y onda al pelo.',
      detail:
        'Capas visibles, movimiento y una forma más descontracturada. Se puede adaptar para que no demande tanto peinado.',
      image: '/assets/references/cut-reference-shag-wolf.webp',
      alt: 'Imagen de ejemplo de shag suave',
    },
    {
      title: 'Capas largas',
      audience: 'Mujeres',
      tags: ['Largo', 'Capas', 'Bajo mantenimiento'],
      bestFor: 'Para mantener largo pero sacar peso.',
      detail:
        'Se trabajan capas y contorno para que el pelo caiga con más movimiento sin perder longitud general.',
      image: '/assets/references/cut-reference-capas-largas.webp',
      alt: 'Imagen de ejemplo de capas largas',
    },
    {
      title: 'Flequillo cortina',
      audience: 'Mujeres',
      tags: ['Medio', 'Largo', 'Capas', 'Cambio notorio'],
      bestFor: 'Para cambiar el marco de la cara sin cortar todo.',
      detail:
        'El flequillo abre hacia los lados y acompaña capas frontales. Es una buena opción si querés cambio visible pero adaptable.',
      image: '/assets/references/cut-reference-flequillo-cortina.webp',
      alt: 'Imagen de ejemplo de flequillo cortina',
    },
    {
      title: 'Pixie',
      audience: 'Mujeres',
      tags: ['Corto', 'Cambio notorio', 'Bajo mantenimiento'],
      bestFor: 'Para un cambio corto, practico y con caracter.',
      detail:
        'Se define volumen arriba, laterales limpios y textura suave. Puede quedar femenino, moderno o más clásico según la forma.',
      image: '/assets/references/cut-reference-pixie.webp',
      alt: 'Imagen de ejemplo de pixie',
    },
    {
      title: 'Corte mariposa',
      audience: 'Mujeres',
      tags: ['Largo', 'Capas', 'Cambio notorio'],
      bestFor: 'Para sumar volumen alrededor del rostro.',
      detail:
        'Capas frontales amplias y movimiento en largos. Sirve para renovar sin perder la sensacion de pelo largo.',
      image: '/assets/references/cut-reference-corte-mariposa.webp',
      alt: 'Imagen de ejemplo de corte mariposa',
    },
    {
      title: 'Flow medio',
      audience: 'Unisex',
      tags: ['Medio', 'Capas', 'Bajo mantenimiento'],
      bestFor: 'Para dejar crecer con forma y movimiento.',
      detail:
        'Largo medio con capas suaves para que el pelo caiga natural. Ideal si querés algo relajado sin perder prolijidad.',
      image: '/assets/references/cut-reference-flow-medio.webp',
      alt: 'Imagen de ejemplo de flow medio unisex',
    },
    {
      title: 'Rulos con capas',
      audience: 'Unisex',
      tags: ['Medio', 'Capas', 'Bajo mantenimiento'],
      bestFor: 'Para ordenar volumen y definir mejor la forma.',
      detail:
        'Se corta respetando el rulo para que el volumen quede equilibrado. Ayuda a que el peinado diario sea más simple.',
      image: '/assets/references/cut-reference-rulos-capas.webp',
      alt: 'Imagen de ejemplo de rulos con capas',
    },
    {
      title: 'Lineas sutiles',
      audience: 'Unisex',
      tags: ['Corto', 'Fade', 'Con líneas', 'Cambio notorio'],
      bestFor: 'Para sumar un detalle personal al corte.',
      detail:
        'Una o dos líneas limpias pueden cambiar el gesto del corte sin convertirlo en algo demasiado cargado.',
      image: '/assets/references/cut-reference-lineas.webp',
      alt: 'Imagen de ejemplo de corte con líneas sutiles',
    },
  ];

  protected setAudienceFilter(filter: AudienceFilter): void {
    this.selectedAudience = filter;
    this.cutsExpanded = false;
  }

  protected setCutTagFilter(filter: string): void {
    this.selectedCutTag = filter;
    this.cutsExpanded = false;
  }

  protected toggleCutsExpanded(): void {
    this.cutsExpanded = !this.cutsExpanded;
  }

  protected scrollGallery(rail: HTMLElement, direction: 'prev' | 'next'): void {
    const firstCard = rail.querySelector<HTMLElement>('figure');
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap || '18');
    const cardWidth = firstCard?.getBoundingClientRect().width ?? rail.clientWidth * 0.82;
    const scrollAmount = cardWidth + gap;

    rail.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }

  protected hasMoreCutIdeas(): boolean {
    return this.filteredCutIdeas().length > this.mobileCutPreviewLimit;
  }

  protected filteredCutIdeas(): CutIdea[] {
    return this.cutIdeas.filter((cut) => {
      const matchesAudience = this.selectedAudience === 'Todos' || cut.audience === this.selectedAudience;
      const matchesTag = this.selectedCutTag === 'Todos' || cut.tags.includes(this.selectedCutTag);

      return matchesAudience && matchesTag;
    });
  }
}

