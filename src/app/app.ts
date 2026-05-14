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
    'Color',
    'Bajo mantenimiento',
    'Cambio notorio',
    'Con lineas',
  ];

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
      image: '/assets/instagram/juanse-finished-frontal.webp',
      alt: 'Corte terminado con fade limpio y barba perfilada',
      caption: 'Resultado final',
    },
    {
      image: '/assets/instagram/juanse-martin-design.webp',
      alt: 'Corte terminado con fade prolijo y textura natural',
      caption: 'Textura natural',
    },
    {
      image: '/assets/instagram/juanse-fade-lines.webp',
      alt: 'Fade con diseno de lineas en clienta',
      caption: 'Lineas con fade',
    },
    {
      image: '/assets/instagram/juanse-beard-trim.webp',
      alt: 'JuanSe perfilando barba con maquina',
      caption: 'Barba perfilada',
    },
    {
      image: '/assets/instagram/juanse-nape-work.webp',
      alt: 'Trabajo de maquina en nuca y degradado',
      caption: 'Nuca prolija',
    },
    {
      image: '/assets/instagram/juanse-back-process.webp',
      alt: 'JuanSe trabajando un degradado desde atras',
      caption: 'Degradado',
    },
    {
      image: '/assets/instagram/juanse-top-cutting.webp',
      alt: 'JuanSe cortando la parte superior del pelo',
      caption: 'Trabajo superior',
    },
    {
      image: '/assets/instagram/juanse-beard-comb.webp',
      alt: 'JuanSe acomodando barba con peine y tijera',
      caption: 'Detalle de barba',
    },
    {
      image: '/assets/instagram/juanse-detail-machine.webp',
      alt: 'Detalle de maquina trabajando un corte',
      caption: 'Precision',
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
      image: '/assets/references/cut-reference-taper-fade.webp',
      alt: 'Imagen de ejemplo de taper fade con nuca prolija',
    },
    {
      title: 'Crop texturizado',
      audience: 'Hombres',
      tags: ['Corto', 'Bajo mantenimiento'],
      bestFor: 'Para pelo con movimiento y bajo mantenimiento.',
      detail:
        'Se trabaja textura con tijera y maquina, frente mas liviano y laterales prolijos. Queda facil de peinar todos los dias.',
      image: '/assets/references/cut-reference-crop-texturizado.webp',
      alt: 'Imagen de ejemplo de crop texturizado con movimiento natural',
    },
    {
      title: 'Fade medio con barba',
      audience: 'Hombres',
      tags: ['Corto', 'Fade', 'Con barba', 'Cambio notorio'],
      bestFor: 'Para un cambio notorio, limpio y actual.',
      detail:
        'Degradado medio, contornos marcados y barba conectada al corte. Ideal si queres salir con una terminacion mas definida.',
      image: '/assets/references/cut-reference-fade-barba.webp',
      alt: 'Imagen de ejemplo de fade medio conectado con barba',
    },
    {
      title: 'Clasico a tijera',
      audience: 'Hombres',
      tags: ['Medio', 'Clasico'],
      bestFor: 'Para mantener largo con forma y caida natural.',
      detail:
        'Se ordenan laterales, peso y puntas sin dejarlo demasiado corto. Buen recurso cuando queres verte prolijo sin fade alto.',
      image: '/assets/references/cut-reference-clasico-tijera.webp',
      alt: 'Imagen de ejemplo de corte clasico a tijera',
    },
    {
      title: 'Low fade',
      audience: 'Hombres',
      tags: ['Corto', 'Fade', 'Bajo mantenimiento'],
      bestFor: 'Para una terminacion limpia sin subir demasiado el degrade.',
      detail:
        'El fade queda bajo y discreto, ideal para mantener una imagen prolija sin perder naturalidad en la forma del corte.',
      image: '/assets/references/cut-reference-low-fade.webp',
      alt: 'Imagen de ejemplo de low fade discreto',
    },
    {
      title: 'Burst fade',
      audience: 'Hombres',
      tags: ['Corto', 'Fade', 'Cambio notorio'],
      bestFor: 'Para marcar mas estilo alrededor de la oreja.',
      detail:
        'El degrade acompana la curva de la oreja y deja mas presencia atras. Funciona bien si queres algo moderno sin exagerar.',
      image: '/assets/references/cut-reference-burst-fade.webp',
      alt: 'Imagen de ejemplo de burst fade',
    },
    {
      title: 'Mullet suave',
      audience: 'Hombres',
      tags: ['Medio', 'Capas', 'Cambio notorio'],
      bestFor: 'Para sumar personalidad y movimiento.',
      detail:
        'Mantiene textura arriba y algo mas de largo en nuca. Juanse puede hacerlo suave para que sea usable todos los dias.',
      image: '/assets/references/cut-reference-mullet-shag.webp',
      alt: 'Imagen de ejemplo de mullet suave',
    },
    {
      title: 'Buzz cut',
      audience: 'Hombres',
      tags: ['Corto', 'Bajo mantenimiento', 'Cambio notorio'],
      bestFor: 'Para resolverlo simple, limpio y fuerte.',
      detail:
        'Corte corto parejo con terminaciones cuidadas. Es directo, comodo y deja la forma de la cabeza como protagonista.',
      image: '/assets/references/cut-reference-buzz-cut.webp',
      alt: 'Imagen de ejemplo de buzz cut',
    },
    {
      title: 'Bob clasico',
      audience: 'Mujeres',
      tags: ['Corto', 'Clasico', 'Cambio notorio'],
      bestFor: 'Para un cambio elegante y facil de reconocer.',
      detail:
        'Largo a la mandibula o un poco mas abajo, puntas limpias y forma definida. Ideal si queres estructura sin complicarte.',
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
        'Capas visibles, movimiento y una forma mas descontracturada. Se puede adaptar para que no demande tanto peinado.',
      image: '/assets/references/cut-reference-shag-wolf.webp',
      alt: 'Imagen de ejemplo de shag suave',
    },
    {
      title: 'Capas largas',
      audience: 'Mujeres',
      tags: ['Largo', 'Capas', 'Bajo mantenimiento'],
      bestFor: 'Para mantener largo pero sacar peso.',
      detail:
        'Se trabajan capas y contorno para que el pelo caiga con mas movimiento sin perder longitud general.',
      image: '/assets/references/cut-reference-capas-largas.webp',
      alt: 'Imagen de ejemplo de capas largas',
    },
    {
      title: 'Flequillo cortina',
      audience: 'Mujeres',
      tags: ['Medio', 'Largo', 'Capas', 'Cambio notorio'],
      bestFor: 'Para cambiar el marco de la cara sin cortar todo.',
      detail:
        'El flequillo abre hacia los lados y acompana capas frontales. Es una buena opcion si queres cambio visible pero adaptable.',
      image: '/assets/references/cut-reference-flequillo-cortina.webp',
      alt: 'Imagen de ejemplo de flequillo cortina',
    },
    {
      title: 'Pixie',
      audience: 'Mujeres',
      tags: ['Corto', 'Cambio notorio', 'Bajo mantenimiento'],
      bestFor: 'Para un cambio corto, practico y con caracter.',
      detail:
        'Se define volumen arriba, laterales limpios y textura suave. Puede quedar femenino, moderno o mas clasico segun la forma.',
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
      title: 'Iluminacion sutil',
      audience: 'Mujeres',
      tags: ['Largo', 'Color', 'Bajo mantenimiento'],
      bestFor: 'Para aclarar y dar luz sin un cambio extremo.',
      detail:
        'Reflejos suaves o balayage discreto para sumar dimension. Juanse puede ajustar intensidad segun base y mantenimiento.',
      image: '/assets/references/cut-reference-balayage-sutil.webp',
      alt: 'Imagen de ejemplo de iluminacion sutil en pelo largo',
    },
    {
      title: 'Acento de color',
      audience: 'Mujeres',
      tags: ['Medio', 'Color', 'Cambio notorio'],
      bestFor: 'Para probar color sin tenir todo el pelo.',
      detail:
        'Un panel o detalle de color suma personalidad y se puede ubicar donde mas favorezca al corte y al estilo.',
      image: '/assets/references/cut-reference-color-acento.webp',
      alt: 'Imagen de ejemplo de acento de color',
    },
    {
      title: 'Flow medio',
      audience: 'Unisex',
      tags: ['Medio', 'Capas', 'Bajo mantenimiento'],
      bestFor: 'Para dejar crecer con forma y movimiento.',
      detail:
        'Largo medio con capas suaves para que el pelo caiga natural. Ideal si queres algo relajado sin perder prolijidad.',
      image: '/assets/references/cut-reference-flow-medio.webp',
      alt: 'Imagen de ejemplo de flow medio unisex',
    },
    {
      title: 'Rulos con capas',
      audience: 'Unisex',
      tags: ['Medio', 'Capas', 'Bajo mantenimiento'],
      bestFor: 'Para ordenar volumen y definir mejor la forma.',
      detail:
        'Se corta respetando el rulo para que el volumen quede equilibrado. Ayuda a que el peinado diario sea mas simple.',
      image: '/assets/references/cut-reference-rulos-capas.webp',
      alt: 'Imagen de ejemplo de rulos con capas',
    },
    {
      title: 'Lineas sutiles',
      audience: 'Unisex',
      tags: ['Corto', 'Fade', 'Con lineas', 'Cambio notorio'],
      bestFor: 'Para sumar un detalle personal al corte.',
      detail:
        'Una o dos lineas limpias pueden cambiar el gesto del corte sin convertirlo en algo demasiado cargado.',
      image: '/assets/references/cut-reference-lineas.webp',
      alt: 'Imagen de ejemplo de corte con lineas sutiles',
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

