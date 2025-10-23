# Coolify Test Repository

Dette er en test-repository for å lære Coolify deployment.

## Hva er dette?
En enkel web-applikasjon med:
- Statisk HTML/CSS/JS frontend
- Nginx web server
- Docker containerisering
- Klar for Coolify deployment

## Lokal utvikling
```bash
# Med Docker
docker-compose up -d

# Uten Docker
cd app && python -m http.server 8080
```

## Deploy til Coolify
1. Opprett nytt prosjekt i Coolify
2. Koble til dette GitHub repositoryet
3. Coolify vil automatisk detektere `docker-compose.yml`
4. Deploy!

## Miljøvariabler
Se `.env.example` for nødvendige variabler.
```

### .gitignore
```
# Environment
.env
*.env

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Docker
docker-compose.override.yml
