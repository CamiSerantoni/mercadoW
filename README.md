Desafío - Mercado web
En este desafío validaremos nuestros conocimientos de las sesiones anteriores. Para
lograrlo, necesitarás aplicar todo lo aprendido en las clases de Handlebars y los motores de
plantillas, parciales, helpers y de la integración de jQuery y Bootstrap,, utilizando de apoyo el
archivo Apoyo Desafío - Mercado web.
Lee todo el documento antes de comenzar el desarrollo grupal, para asegurarte de tener el
máximo de puntaje y enfocar bien los esfuerzos.
Descripción
El Mini Market “Come Sano, Come Fresco Spa” está interesado en contratar un freelancer para
que desarrolle una aplicación en donde puedan ofrecer y vender sus alimentos de forma
online en la web. No obstante, por su modelo de negocio han advertido que constantemente
necesitarán hacer actualizaciones en su presentación, contenido y funcionalidades, por lo que
se plantea desarrollar un sistema compuesto por parciales para poder abordar los cambios
de una manera más rápida y cómoda.
En este desafío deberás construir un servidor con Express que utilice el motor de plantillas
Handlebars para desarrollar componentes y renderizar variables e iteradores en el template
del sitio web.
En el Apoyo Desafío - Mercado web encontrarás las imágenes correspondientes. Siéntete libre
de crear tu propia interfaz para este desafío si así lo crees conveniente, siempre y cuando
cumpla con los requisitos funcionales y la temática planteada.
Las siguientes imágenes representan las interacciones que debe tener el sitio web una vez
terminado el desafío.
_ 2
www.desafiolatam.com
Imagen 1. Dashboard.
Fuente: Desafío Latam
Imagen 2. Ventana modal con productos seleccionados.
Fuente: Desafío Latam
Para el control de datos en la aplicación, siéntete libre de ocupar la herramienta que más te
acomode, por ejemplo: LocalStorage, un arreglo dentro del servidor, un archivo JSON
gestionado con FileSystem, PostgreSQL con el paquete pg o la que creas conveniente.
En caso de utilizar PostgreSQL, deberás dejar el archivo correspondiente a la base de datos
que utilizaste o las sentencias SQL necesarias para crear la base de datos, y la tabla como
comentarios al final del archivo en donde estés desarrollando el servidor.
_ 3
www.desafiolatam.com
Requerimientos
1. Crear una ruta raíz que al ser consultada renderice una vista con un parcial
“Dashboard” enviándole en el render un arreglo con los nombres de los productos. Se
recomienda que estos coincidan con las imágenes de cada producto. (3 Puntos)
2. Incluir en la vista un parcial que contenga el menú del sitio web y sea renderizado
antes del Dashboard. (2 Puntos)
3. Crear un parcial “producto” que contenga el template correspondiente a la
presentación de cada producto en el Dashboard y reciba como parámetro el nombre
del producto. (2 Puntos)
4. Crear un parcial para la sección principal en donde se renderice un helper con el
mensaje de bienvenida y se realice una iteración para renderizar un parcial “producto”
pasándole como argumento el nombre de cada producto. (2 Puntos)
5. Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares
creados e
