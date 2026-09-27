[English](https://github.com/stepzme/trickster/blob/main/README.md) · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · Español · [简体中文](https://github.com/stepzme/trickster/blob/main/README.zh-CN.md)

# Trickster

### Una fábrica de aplicaciones con IA para iOS nativo.

Convierte una idea en una aplicación nativa para iOS basada en una biblioteca de diseño seleccionada: define el alcance, diseña, implementa, verifica en Simulator y completa el resultado con un icono original y capturas ASO.

Trickster coordina roles de IA especializados dentro del repositorio. Lee un catálogo pequeño de GitHub, descarga documentos para un máximo de tres estilos relevantes, exige elegir exactamente uno, guarda ese paquete en el proyecto y comprueba el resultado implementado de forma independiente.

## Qué obtienes

- un proyecto Xcode funcional y una aplicación iOS nativa;
- un alcance de producto basado en el brief y el proyecto existente;
- un lenguaje visual confirmado y guardado localmente tras seleccionarlo en el catálogo de GitHub;
- controles personalizados que conservan el comportamiento y la accesibilidad nativos de iOS;
- evidencias de compilación, ejecución, interacción e inspección visual en Simulator;
- un icono original basado en referencias revisadas de Logoinspo;
- un conjunto de capturas ASO creado a partir de la compilación aceptada.

## El pipeline

```text
Idea de la aplicación
→ alcance del producto
→ selección desde el catálogo de GitHub
→ elección de un estilo
→ implementación nativa
→ aceptación en Simulator
→ icono y capturas ASO
```

1. **Definir el producto.** Se establecen el alcance, los límites y las decisiones que realmente requieren la intervención del usuario.
2. **Comparar estilos relevantes.** Se lee el catálogo de GitHub, se eligen hasta tres candidatos por sus metadatos y se descargan documentos solo para ellos.
3. **Elegir una dirección.** Antes de implementar la UI se debe elegir exactamente un paquete. Los paquetes no se pueden combinar ni repartir entre pantallas.
4. **Crear el contrato.** Se definen pantallas, estados, escenarios, recursos y comprobaciones de aceptación.
5. **Construir la aplicación.** Primero se implementa y revisa visualmente un flujo vertical; después se completa todo el alcance acordado.
6. **Verificar de forma independiente.** La aplicación final se compila, instala, ejecuta e inspecciona en Simulator. La evidencia no disponible permanece `UNVERIFIED`.
7. **Completar el paquete para la tienda.** Se crea un icono original y, tras la aceptación, capturas ASO obtenidas de la compilación real.

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

Después, pide al agente que cree o modifique de forma sustancial una aplicación iOS mediante Trickster. Las instrucciones instaladas en el proyecto activan el pipeline y sus controles obligatorios de diseño y aceptación.

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
| 2. Selección de estilo | design-planner + aprobación del usuario | Hasta tres candidatos de GitHub y un paquete guardado localmente |
| 3. Contrato del producto | design-planner | Pantallas, estados, escenarios, recursos y plan de verificación |
| 4. Recursos del producto | visual-producer cuando sea necesario | Imágenes verificadas o un `N/A` justificado |
| 5. Implementación | implementation-owner | Flujo vertical seguido del alcance completo acordado |
| 6. Icono | visual-producer | Un concepto original instalado en la aplicación |
| 7. Aceptación | acceptance-reviewer + master | Compilación final verificada de forma independiente |
| 8. Capturas ASO | visual-producer | Un conjunto basado en pantallas reales de la compilación aceptada |
| 9. Finalización | master + aprobación del usuario | Confirmación explícita y limpieza de archivos temporales |
| 10. Entrega | master | Evidencia reproducible y estado final |

Consulta [el proceso maestro](workflow/master-prompt.md) y [el contrato de orquestación](workflow/orchestration.md) para conocer las reglas exactas de ejecución.

## Garantías principales

- La selección contiene como máximo tres paquetes elegidos por los metadatos del catálogo; solo se descargan sus documentos.
- La implementación de la UI se detiene hasta que el usuario elige exactamente un paquete.
- Los paquetes no se pueden combinar; el elegido es el único contexto de diseño.
- Se conserva el comportamiento nativo de los controles, mientras que su apariencia sigue el lenguaje visual seleccionado.
- El agente de implementación no puede aceptar su propio trabajo.
- Una compilación correcta no equivale por sí sola a aceptación.
- Las herramientas o evidencias no disponibles se declaran `UNVERIFIED`, nunca se inventan.

## Requisitos y límites

Trickster requiere macOS, Xcode, un runtime adecuado de iOS Simulator, Node.js 20 o posterior y un entorno de agentes capaz de leer las instrucciones instaladas y utilizar las herramientas del proyecto. Una nueva selección de estilo requiere acceso a los archivos raw del repositorio de Trickster en GitHub; un proyecto existente continúa usando su paquete local.

La firma, los release archives, la validación en dispositivos físicos, el envío a App Store y la infraestructura externa de producción son tareas de release separadas, salvo que se incluyan explícitamente en el alcance.

La instalación global se rechaza intencionadamente. Utiliza `npx` como launcher temporal dentro del proyecto de destino.

## Documentación del proyecto

- [Proceso maestro](workflow/master-prompt.md)
- [Orquestación de roles](workflow/orchestration.md)
- [Selección de estilo](workflow/style-reference.md)
- [Implementación](workflow/implementation.md)
- [Aceptación](workflow/acceptance.md)
- [Verificación end-to-end](workflow/verification.md)

Documentación externa:

- [Apple: ejecutar una aplicación en Simulator](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple: iconos de aplicaciones](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple: especificaciones de capturas](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
