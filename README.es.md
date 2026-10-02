# Trickster

Trickster es un flujo local de proyecto para crear aplicaciones iOS nativas con roles de IA. Primero se aprueba el producto, después el Diseñador demuestra la dirección visual en un MVP real de Simulator y solo entonces Desarrollo amplía esa misma aplicación en bloques aprobados.

```sh
npx @sgx22/trickster init
```

El proceso tiene seis etapas: Research, Planning, Design, Dev, Polish y Publish. Polish verifica la aplicación completa de forma independiente; Publish crea el icono final, las capturas de tienda y los archivos de publicación. El master coordina Product Researcher, Designer, Implementation Owner y Acceptance Reviewer.

Designer selecciona hasta tres aplicaciones reales y propone una fuente `ui.md` y una fuente opcional `illustrations.md`. La navegación y la interacción proceden de Research, Planning y los criterios compartidos del flujo, no de la aplicación de referencia. Los documentos aprobados se copian sin sintetizar otro sistema visual. La prueba del diseño es la aplicación ejecutándose, no un informe textual ni una compilación correcta.

Todas las aplicaciones conservan once capacidades en este orden: Bluetooth, Downloading Photos, Adding Photos, Using the Camera, Face ID, Microphone Access, Speech Recognition Access, Contacts Access, Calendar Access, Location Access y CallKit. Las solicitudes del sistema son reales. Solo se pueden simular periféricos/datos Bluetooth, procesamiento del micrófono y salida de reconocimiento de voz. CallKit es la única excepción porque no tiene un permiso del usuario.

Requiere macOS, Xcode, un Simulator adecuado, un iPhone físico para comprobaciones no disponibles en Simulator y Node.js 20 o posterior. Licencia MIT.
