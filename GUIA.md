# Guía de pasos (lo que tienes que hacer tú en GitHub)

Sustituye USUARIO por tu usuario. El repo debe llamarse `cicd-angular`
(si usas otro nombre, cambia `--base-href` en `.github/workflows/cicd.yml`
y el nombre de carpeta `dist/<nombre>/browser` si cambia el proyecto).

## 1. Subir el proyecto (apartado 2)
1. GitHub → New repository → `cicd-angular`, **público, vacío**.
2. En esta carpeta:
   git init && git add . && git commit -m "Proyecto inicial"
   git branch -M main
   git remote add origin https://github.com/USUARIO/cicd-angular.git
   git push -u origin main
   (El primer push ya incluye el workflow; el deploy fallará hasta el paso 3: es normal. Si prefieres, vuelve a lanzarlo luego en Actions → Re-run.)
3. Settings → Pages → Build and deployment → Source: **GitHub Actions**. Re-lanza el workflow.
   📷 Settings → Pages con "GitHub Actions"; 📷 Actions en verde.

## 2. Bloquear el merge si falla la CI (objetivo 2)
Settings → Rules → Rulesets → New branch ruleset (o Branches → Add branch protection rule):
- Target: `main`
- ✔ Require a pull request before merging
- ✔ Require status checks to pass → añade el check **build**
  (aparece tras haberse ejecutado al menos una vez)
- Guarda. 📷 la regla.

## 3. Demostración (apartado 5)
   git checkout -b feature/error-compilacion
   # en src/app/counter/counter.ts, dentro de increment(), añade:  variableInexistente++;
   git commit -am "Error a propósito" && git push -u origin feature/error-compilacion
→ abre la PR. 📷 CI ✘ y botón de merge bloqueado.
   # quita la línea
   git commit -am "Corrige error" && git push
→ 📷 CI ✔ y merge disponible. Fusiona. 📷 Actions: build → deploy.
→ 📷 https://USUARIO.github.io/cicd-angular/
→ Otra PR cambiando `title` en src/app/app.ts; comprueba que la web cambia sola.

## 4. Extensión (apartado 6)
- 📷 PR con test roto: p. ej. en task.service.spec.ts cambia `toBe(true)` por `toBe(false)`.
- 📷 PR que baja la cobertura: añade en TaskService varios métodos sin test, p. ej.
    extra1(): number { return 1; }   (…hasta unos 10-15 métodos)
  Un método suelto NO basta: hay margen sobre el 80 %. Fíjate en que el
  log muestra "ERROR: Coverage for … does not meet global threshold".
- 📷 Log de un run verde: paso "Tests con cobertura", tabla con Statements/Branches/Functions/Lines.

## 5. Memoria (PDF Practica1_Apellido_Nombre.pdf)
URL del repo, URL de la web, contenido de cicd.yml (ya está comentado) y las capturas con una frase explicando cada una.
