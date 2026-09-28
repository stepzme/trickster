[English](https://github.com/stepzme/trickster/blob/main/README.md) · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · Español · [简体中文](https://github.com/stepzme/trickster/blob/main/README.zh-CN.md)

# Trickster

### Una fábrica de aplicaciones con IA para iOS nativo.

Convierte una idea en una aplicación nativa para iOS basada en una biblioteca de diseño seleccionada: define el alcance, añade un conjunto fijo de capacidades de iOS, diseña, implementa, verifica y completa el resultado con un icono original y capturas ASO.

Trickster coordina roles de IA especializados dentro del repositorio. Lee un catálogo pequeño de GitHub, descarga documentos para un máximo de tres estilos relevantes, exige elegir exactamente uno, guarda ese paquete en el proyecto y comprueba el resultado implementado de forma independiente.

## Qué obtienes

- un proyecto Xcode funcional y una aplicación iOS nativa;
- un alcance de producto basado en el brief y el proyecto existente;
- una función relevante para el producto por cada una de las once capacidades de iOS obligatorias;
- un lenguaje visual confirmado y guardado localmente tras seleccionarlo en el catálogo de GitHub;
- controles personalizados que conservan el comportamiento y la accesibilidad nativos de iOS;
- evidencias de compilación, ejecución, interacción e inspección visual en Simulator;
- un icono original basado en referencias revisadas de Logoinspo;
- un conjunto de capturas ASO creado a partir de la compilación aceptada.

## El pipeline

```text
Idea de la aplicación
→ alcance del producto
→ capacidades de iOS obligatorias
→ selección desde el catálogo de GitHub
→ elección de un estilo
→ implementación nativa
→ aceptación en Simulator
→ icono y capturas ASO
```

1. **Definir el producto.** Se establecen el alcance, los límites y las decisiones que realmente requieren la intervención del usuario.
2. **Adaptar las capacidades de iOS obligatorias.** Sin importar el alcance del prompt, el agente inventa una función coherente para cada elemento de la lista fija de once capacidades.
3. **Comparar estilos relevantes.** Se lee el catálogo de GitHub, se eligen hasta tres candidatos por sus metadatos y se descargan documentos solo para ellos.
4. **Elegir una dirección.** Antes de implementar la UI se debe elegir exactamente un paquete. Los paquetes no se pueden combinar ni repartir entre pantallas.
5. **Crear el contrato.** Se definen pantallas, estados, escenarios de capacidades, recursos y comprobaciones de aceptación.
6. **Construir la aplicación.** Primero se implementa y revisa visualmente un flujo vertical; después se completan el alcance acordado y las once funciones obligatorias.
7. **Verificar de forma independiente.** La aplicación final se compila, instala, ejecuta e inspecciona en Simulator y, cuando sea necesario, en un iPhone físico. La evidencia no disponible permanece `UNVERIFIED`.
8. **Completar el paquete para la tienda.** Se crea un icono original y, tras la aceptación, capturas ASO obtenidas de la compilación real.

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

Puedes mantenerlo breve. No necesitas enumerar las capacidades de la plataforma: Trickster adapta automáticamente el conjunto fijo de once elementos, aclara una única cuestión que afecte a los límites del producto si hace falta y solicita un solo paquete de estilo antes de trabajar en la UI.

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

- `design/` contiene el único paquete de estilo confirmado para el producto actual.
- `artifacts/<run-id>/` contiene contratos, evidencias, capturas y resultados de revisión.
- `roles/` y `workflow/` definen las etapas de la fábrica independientemente de un agent harness concreto.
- `adapters/` conectan esas etapas con Codex u otro entorno.

Volver a ejecutar `init` actualiza los archivos administrados del proceso, conservando el diseño seleccionado y los run artifacts.

## Fuentes de diseño

- **El catálogo de estilos de GitHub** enumera las aplicaciones de referencia disponibles. Trickster descarga documentos solo para los candidatos y guarda el `source.json`, `ui.md`, `ux.md` y `illustrations.md` opcional elegidos en `trickster/design/`.
- **Logoinspo App Icons** proporciona referencias para la dirección original del icono.

El paquete de estilo no es una simple skin. Los controles nativos pueden aportar comportamiento, accesibilidad, focus e integración con el teclado, pero su apariencia debe heredar explícitamente `ui.md` cuando la referencia define un lenguaje visual propio.

## Etapas detalladas

| Etapa | Responsable | Resultado obligatorio |
|---|---|---|
| 1. Alcance | product-researcher | Estado explícito del alcance y decisiones pendientes |
| 2. Capacidades de iOS obligatorias | product-researcher + control del master | Once funciones de producto en la matriz canónica fija |
| 3. Selección de estilo | design-planner + aprobación del usuario | Hasta tres candidatos de GitHub y un paquete guardado localmente |
| 4. Contrato del producto | design-planner | Pantallas, estados, escenarios, recursos y plan de verificación |
| 5. Recursos del producto | visual-producer cuando sea necesario | Imágenes verificadas o un `N/A` justificado |
| 6. Implementación | implementation-owner | Flujo vertical, alcance completo y capacidades obligatorias |
| 7. Icono | visual-producer | Un concepto original instalado en la aplicación |
| 8. Aceptación | acceptance-reviewer + master | Compilación y matriz de capacidades verificadas de forma independiente |
| 9. Capturas ASO | visual-producer | Un conjunto basado en pantallas reales de la compilación aceptada |
| 10. Finalización | master + aprobación del usuario | Confirmación explícita y limpieza de archivos temporales |
| 11. Entrega | master | Evidencia reproducible y estado final |

Consulta [el proceso maestro](workflow/master-prompt.md) y [el contrato de orquestación](workflow/orchestration.md) para conocer las reglas exactas de ejecución.

## Garantías principales

- La selección contiene como máximo tres paquetes elegidos por los metadatos del catálogo; solo se descargan sus documentos.
- Las once capacidades canónicas se contratan e implementan sin importar el alcance del prompt; ninguna puede ser `N/A`.
- La implementación de la UI se detiene hasta que el usuario elige exactamente un paquete.
- Los paquetes no se pueden combinar; el elegido es el único contexto de diseño.
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
- [Selección de estilo](workflow/style-reference.md)
- [Implementación](workflow/implementation.md)
- [Aceptación](workflow/acceptance.md)
- [Verificación end-to-end](workflow/verification.md)

Documentación externa:

- [Apple: ejecutar una aplicación en Simulator](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple: iconos de aplicaciones](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple: especificaciones de capturas](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
