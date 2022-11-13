FrontEnd encargado de realizar las consultas al backend y el despliegue de la informacion obtenida en formato HTML.

El lenguaje utilizado es HTML para su despliegue en cualquier navegador en combinacion con JQuery y Bootstrap 5.

Como funciona:

Al momento de cargar la pagina en el navegador, se realiza una peticion al backend para obtener todas las categorias disponibles y ellas convertirlas en opciones
en el menu desplegable que se encuentra en la barra de navegacion.
Una vez se selecciona alguna de las opciones en el menu categorias, se realiza una consulta al backend para que este entrege un listado de todos los productos que
pertenecen a esa categoria, ese listado es renderizado por jquery sin cambiar de pagina.
A su vez, se puede utilizar el cuadro de busqueda que se encuentra en la parte superior, el cual envia el nombre de producto que desea encontrar al backend para luego
realizar el renderizado del producto en caso que sea encontrado.
