# Dokploy

Proyecto Angular 21 con SSR servido por Express.

## App

- Tipo: Dockerfile
- Dockerfile: `Dockerfile`
- Puerto interno: `4000`
- Variable recomendada: `PORT=4000`
- Health check: `/`

## Build local

```bash
npm ci
npm run build
node dist/juanse-favoretti/server/server.mjs
```

## DNS

Cuando el dominio este definido, apuntar el registro `A` o `CNAME` al servidor de Dokploy y agregar el dominio en la app. Despues activar SSL desde Dokploy.
