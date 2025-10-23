// Oppdater tid hvert sekund
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('no-NO');
    document.getElementById('time').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);

// Simuler en enkel status-sjekk
console.log('✅ Coolify Test App kjører!');
console.log('🚀 Deployed med Coolify');
```

### .env.example
```
APP_NAME=Coolify Test App
PORT=8080
