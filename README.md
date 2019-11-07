# TASK LIST DOC

## **ARRANQUE**
Esta es una aplicación construída con **React**. Para inciarla: 
1) **Clona** el repositorio en tu terminal
2) **Instala** las depedencias necesarias ejecutando en el terminal 'npm install'
3) **Abre** el proyecto en local ejecutando en el terminal 'yarn start'

## **DOCUMENTACIÓN**
Esta app nos muestra en una tabla todas las tareas existentes o solamente las tareas finalizadas, dependiendo del botón clicado. También nos permite añadir tareas nuevas rellenando un formulario.
Explico a continuación los diferentes ficheros que he creado y qué hace cada uno:

### CARPETA DATAREQUEST
1) **fecthParams.js**
Dos funciones que nos devuelven la url con los parámetros y headers adecuados para el fetch. 

2) **sendData.js**
Función utilizada para actualizar en el servidor una nueva tarea creada. Obtiene el objeto de actualización del formulario pintado en la app. La propiedad 'kind' debe ser parasada a numérico porque así lo pide la API.

3) **transformData.js**
Transforma los datos recibidos desde el servidor en los datos que se pintarán en el navegador. Aquí he tenido que inventar algunos datos: 
    - La fecha 'end' no la devolvía a pesar de que en la tabla de ejemplo sí se visualizaba, de modo que he puesto la misma que start. Además he arreglado el formato.
    - Kind devolvía un numeral que he imaginado que se corresponde con un string para mostrar el tipo de task que es. Este mapeo lo he inventado.
    - Me ha extrañado que no existiera ningún identificador único de tarea para usar como 'key', de modo que he inventado uno sumando el owner con la hora.

### CARPETA TEMPLATES
Para el estilo he usado la librería de React **'Material-UI'**. Ambos templates son importados de esta librería.

1) **AddDataForm.js**
Componente funcional que muestra el formulario al cargar la página

2) **TableData.js**
Componente de clase que se devuelve al hacer click en los botones 'All tasks' o 'Done tasks'. Tiene como propiedad 'rows', que son las filas que se añadirán dinámicamente a la tabla al renderizar el componente.

### FICHERO APP.JS
En el primer renderizado muestra los botones y el formulario. Al hacer click en los botones "allTask" o "doneTask" renderiza de nuevo creando la tabla que muestra los datos seleccionados. Para ello se sirve de los métodos:
- getData: hace la llamada a la API que nos devuelve los datos.
- createData: transforma los datos recibidos en filas de tabla y actualiza el estado para que se muestren.

## **TODO**
He trabajado en esta app alrededor de unas 3 horas, pero aún habría que seguir haciendo algunos ajustes. Los próximos pasos serían:

- La llamada que se realiza para añadir una nueva tarea está devolviendo un error 500. Habría que averiguar por qué y a qué se debe.
- El formulario no se está validando. Hay que validar el formulario debidamente antes de realizar el request y crear el objeto de actualización de una forma más óptima que como está ahora mismo.
- Añadir la nueva tarea a la tabla.
- Estilos y composición: A parte de la evidente falta de maquetación, habría que encajar de otra forma el formulario que añade contenido. Podría mostrarse en una ventana modal, o agregar una fila editable en la propia tabla.
