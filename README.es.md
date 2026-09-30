[English](https://github.com/stepzme/trickster/blob/main/README.md) · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · Español · [简体中文](https://github.com/stepzme/trickster/blob/main/README.zh-CN.md)

# Trickster

### Una fábrica de aplicaciones con IA para iOS nativo.

Convierte una idea en una aplicación nativa para iOS basada en una biblioteca de diseño seleccionada: concilia el alcance con un conjunto fijo de capacidades de iOS, implementa mediante fases con feedback, verifica y completa el resultado con un icono original y capturas para la tienda.

Trickster coordina roles de IA especializados dentro del repositorio. Lee un catálogo enriquecido de GitHub con categorías normalizadas y resúmenes de UI, UX, navegación, flujos e ilustraciones, descarga documentos para un máximo de tres aplicaciones relevantes y permite elegir referencias separadas por aspecto. Después las sintetiza en una única dirección coherente y comprueba la implementación de forma independiente.

## Qué obtienes

- un proyecto Xcode funcional y una aplicación iOS nativa;
- un alcance de producto basado en el brief y el proyecto existente;
- una función relevante para el producto por cada una de las once capacidades de iOS obligatorias;
- una dirección de diseño coherente con procedencia explícita para UI, UX e ilustraciones opcionales;
- controles personalizados que conservan el comportamiento y la accesibilidad nativos de iOS;
- evidencias de compilación, ejecución, interacción e inspección visual en Simulator;
- un icono original basado en referencias revisadas de Logoinspo;
- un conjunto de capturas para la tienda, aprobado cuadro por cuadro a partir de la compilación aceptada.

## El pipeline

```text
Idea de la aplicación
→ definición del producto: alcance + capacidades obligatorias
→ selección desde el catálogo de GitHub
→ composición de UI / UX / ilustraciones
→ Core con feedback
→ Full
→ recursos e integración del icono
→ Hardening de la UI final
→ aceptación en Simulator
→ capturas para la tienda
```

1. **Definir el producto.** El alcance principal y las once capacidades obligatorias se diseñan juntos y se concilian en un alcance final.
2. **Componer referencias.** Se comparan hasta tres aplicaciones y se elige una fuente de UI, una de UX y, opcionalmente, una de ilustraciones; el resultado se sintetiza y aprueba como una única dirección.
3. **Crear el contrato.** Se definen pantallas, estados, límites de fase, recursos, escenarios y comprobaciones de aceptación.
4. **Validar Core.** Se implementan las secciones principales, se muestra un `PREVIEW` en Simulator cuando el usuario lo pide y se itera hasta `CORE UI APPROVED`.
5. **Completar Full.** Se implementan el resto del alcance y todos los flujos obligatorios.
6. **Producir e integrar recursos visuales.** El icono se crea en paralelo; después de Full se producen los recursos y solo se integran los elementos aprobados.
7. **Robustecer la UI final.** Se verifican errores, rechazo, indisponibilidad, accesibilidad, persistencia, tamaños compactos, locales y regresiones de los recursos finales.
8. **Verificar de forma independiente.** La aplicación final se compila, instala, ejecuta e inspecciona en Simulator y, cuando sea necesario, en un iPhone físico. La evidencia no disponible permanece `UNVERIFIED`.
9. **Completar las capturas.** Se aprueba un storyboard y luego cada captura de la compilación aceptada se genera y revisa por separado.

Trickster utiliza varios roles especializados cuando el agent harness activo permite delegación y ejecuta los mismos contratos de forma secuencial cuando no la permite.

## Inicio rápido

Ejecuta el comando desde la raíz de un proyecto Git, Xcode, Swift Package o XcodeGen existente:

```sh
npx @sgx22/trickster init
```

Codex es el adapter predeterminado. Comprueba la instalación local:

```sh
npx @sgx22/trickster doctor
```

Después, abre una tarea nueva en el agente y pega un brief como este:

```text
Usa Trickster para crear o modificar de forma sustancial una aplicación iOS nativa.

Idea:
Usuario:
Tarea principal:
Funciones obligatorias:
Fuera de alcance:
Restricciones:
```

Puedes mantenerlo breve. No necesitas enumerar las capacidades de la plataforma: Trickster concilia el conjunto fijo de once elementos con el alcance principal, aclara una cuestión que cambie los límites del producto si hace falta y guía la composición de referencias antes de trabajar en la UI.

## Capacidades de iOS obligatorias

Cada aplicación nueva o modificada sustancialmente debe incluir una función de producto coherente para cada capacidad, en este orden exacto:

1. Bluetooth
2. Downloading Photos
3. Adding Photos
4. Using the Camera
5. Face ID
6. Microphone Access
7. Speech Recognition Access
8. Contacts Access
9. Calendar Access
10. Location Access
11. CallKit

El agente no puede omitir, combinar, renombrar, reordenar, sustituir ni marcar ningún elemento como `N/A`. Un botón que solo muestra un permiso, un dispositivo falso o una llamada falsa no cuentan como implementación.

Para otro agent harness:

```sh
npx @sgx22/trickster init --harness generic
```

Sigue `trickster/adapters/generic.md` para adaptar las operaciones de orquestación al entorno.

## Cómo se instala

Trickster se instala dentro del proyecto actual, no de forma global:

```text
trickster/
├── AGENTS.md
├── HARNESS
├── roles/
├── adapters/
├── workflow/
├── templates/
├── design/
└── artifacts/
```

- `design/` contiene la composición de diseño coherente aprobada y la procedencia de sus fuentes.
- `artifacts/<run-id>/` contiene contratos, evidencias, capturas y resultados de revisión.
- `roles/` y `workflow/` definen las etapas de la fábrica independientemente de un agent harness concreto.
- `adapters/` conectan esas etapas con Codex u otro entorno.

Volver a ejecutar `init` actualiza los archivos administrados del proceso, conservando el diseño seleccionado y los run artifacts.

## Fuentes de diseño

- **El catálogo de estilos de GitHub** enumera las aplicaciones de referencia disponibles. Trickster descarga documentos solo para los candidatos y guarda `provenance.json`, `composition.md`, `ui.md`, `ux.md` y `illustrations.md` opcional en `trickster/design/`.
- **Logoinspo App Icons** proporciona referencias para la dirección original del icono.

La composición no es un conjunto de skins intercambiables: cada aspecto tiene una fuente y el resultado debe sentirse como un único producto. Los controles nativos aportan comportamiento, accesibilidad, focus e integración con el teclado, mientras que su apariencia sigue el `ui.md` aprobado.

## Etapas detalladas

| Etapa | Responsable | Resultado obligatorio |
|---|---|---|
| 1. Definición del producto | product-researcher + control del master | Alcance conciliado y once capacidades de producto |
| 2. Composición de referencias | design-planner + aprobación del usuario | UI, UX e ilustraciones opcionales sintetizadas localmente |
| 3. Contrato del producto | design-planner | Pantallas, estados, fases, recursos y plan de verificación |
| 4. Core | implementation-owner + aprobación del usuario | Secciones principales hasta `CORE UI APPROVED` |
| 5. Full | implementation-owner | Resto del alcance y flujos de capacidades |
| 6. Recursos del producto | visual-producer + implementation-owner | Recursos aprobados después de Full e integrados con el icono aprobado |
| 7. Hardening | implementation-owner | Estados finales, accesibilidad y regresiones de recursos integrados |
| En paralelo. Icono | visual-producer + aprobación del usuario | Concepto aprobado antes de integrarlo |
| 8. Aceptación | acceptance-reviewer + master | Compilación y matriz de capacidades verificadas de forma independiente |
| 9. Capturas para la tienda | visual-producer + aprobaciones | Storyboard y cuadros reales aprobados individualmente |
| 10. Finalización | master + aprobación del usuario | Confirmación explícita y limpieza de archivos temporales |
| 11. Entrega | master | Evidencia reproducible y estado final |

Consulta [el proceso maestro](workflow/master-prompt.md) y [el contrato de orquestación](workflow/orchestration.md) para conocer las reglas exactas de ejecución.

## Garantías principales

- La selección contiene como máximo tres paquetes elegidos por los metadatos del catálogo; solo se descargan sus documentos.
- Las once capacidades canónicas se contratan e implementan sin importar el alcance del prompt; ninguna puede ser `N/A`.
- La implementación de la UI se detiene hasta que el usuario aprueba una composición coherente.
- UI, UX e ilustraciones pueden proceder de aplicaciones diferentes, pero cada aspecto tiene una sola fuente y no se permite mezclar componentes arbitrariamente.
- Full no comienza hasta que el usuario aprueba Core; cada fase de implementación admite un preview de Simulator solicitado por el usuario.
- El icono y cada captura para la tienda tienen un feedback loop antes de integrarse o continuar.
- Se conserva el comportamiento nativo de los controles, mientras que su apariencia sigue el lenguaje visual seleccionado.
- El agente de implementación no puede aceptar su propio trabajo.
- Una compilación correcta no equivale por sí sola a aceptación.
- Las herramientas o evidencias no disponibles se declaran `UNVERIFIED`, nunca se inventan.

## Requisitos y límites

Trickster requiere macOS, Xcode, un runtime adecuado de iOS Simulator, un iPhone físico y periféricos para verificar las capacidades obligatorias que dependen de hardware, Node.js 20 o posterior y un entorno de agentes capaz de leer las instrucciones instaladas y utilizar las herramientas del proyecto.

La firma necesaria para verificar capacidades en un dispositivo físico forma parte de la aceptación. Los release archives, el envío a App Store y el despliegue de producción siguen siendo tareas separadas. Un servicio externo requerido debe conectarse o quedar `UNVERIFIED`.

La instalación global se rechaza intencionadamente. Utiliza `npx` como launcher temporal dentro del proyecto de destino.

## Documentación del proyecto

- [Proceso maestro](workflow/master-prompt.md)
- [Orquestación de roles](workflow/orchestration.md)
- [Capacidades de iOS obligatorias](workflow/ios-capabilities.md)
- [Composición de referencias](workflow/style-reference.md)
- [Implementación](workflow/implementation.md)
- [Core](workflow/implementation-core.md)
- [Full](workflow/implementation-full.md)
- [Hardening](workflow/implementation-hardening.md)
- [Aceptación](workflow/acceptance.md)
- [Verificación end-to-end](workflow/verification.md)

Documentación externa:

- [Apple: ejecutar una aplicación en Simulator](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple: iconos de aplicaciones](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple: especificaciones de capturas](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
