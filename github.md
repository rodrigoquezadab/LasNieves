# Instrucciones para subir cambios a GitHub

Para subir tus cambios al repositorio de la parroquia sin tener que ingresar cada comando manualmente de a uno, te dejo dos opciones. Dado que ya tienes el proyecto en tu computadora, Git utilizará automáticamente la cuenta con la que ya estás autenticado.

## Opción 1: Comandos Rápidos (Terminal)

Si tienes la terminal abierta (PowerShell, CMD o Git Bash) en la carpeta de tu proyecto (`C:\Users\Rodrigo\OneDrive\Escritorio\Code\LasNieves`), simplemente copia y pega esta línea, presiona Enter y hará todo de una vez:

```bash
git add . && git commit -m "Actualización de contenido" && git push origin main
```
*(Nota: Si tu rama principal en GitHub se llama `master` en vez de `main`, simplemente cambia la palabra `main` por `master`).*

---

## Opción 2: Script Automatizado (¡Recomendado!)

Si prefieres no abrir la terminal para nada y solo hacer doble clic, puedes crear un pequeño "programa" que haga el trabajo por ti.

1. En tu carpeta `LasNieves` (donde está tu `index.html`), crea un nuevo archivo llamado `subir_cambios.bat`.
2. Ábrelo con el Bloc de notas (o tu editor de código) y pega el siguiente texto:

```bat
@echo off
color 0b
echo ==================================================
echo Subiendo cambios de Parroquia Ntra. Sra. de las Nieves
echo ==================================================
echo.

:: Agregar todos los cambios
git add .

:: Pedir un mensaje de commit al usuario
set /p mensaje="Escribe un mensaje para este cambio (o presiona Enter para usar 'Actualizacion'): "

:: Si no se escribe nada, usar un mensaje por defecto
if "%mensaje%"=="" set mensaje=Actualizacion del sitio web

:: Hacer el commit
git commit -m "%mensaje%"

:: Subir a GitHub
echo.
echo Subiendo a GitHub...
git push origin main

echo.
echo ==================================================
echo ¡Cambios subidos exitosamente!
echo ==================================================
pause
```

3. Guarda y cierra el archivo.
4. **¡Listo!** A partir de ahora, cada vez que hagas cambios en tu página y quieras publicarlos, solo tienes que hacer **doble clic en `subir_cambios.bat`**. Se abrirá una ventanita negra, escribes de qué trata el cambio (ej: "Agregado botón de noticias") y se subirá automáticamente.
