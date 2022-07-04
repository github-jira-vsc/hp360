var vtna = document.getElementById("ventana");

var btn = document.getElementById("boton");
btn.addEventListener("click", instruccion);
var msj = document.getElementById("mensaje");
var hl = "hola";

function instruccion()
{
    var cont = parseInt(vtna.value);
    if(cont == 1)
    {
        msj.innerHTML="<strong>pwd -</strong> Muestra la ubicacion en la que se encuentra actualmente, Ejemplo:<br/><br/>"; 
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>/home/linux/hp/hp360</strong>";

    }
    if(cont == 2)
    {
        msj.innerHTML="<strong>ls -</strong> Muestra el contenido del directorio en el que se encuentra se puede complementar de esta forma, Ejemplo:<br/><br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls   </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; muestra archivos en horizontal<br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls -l</strong>&nbsp;&nbsp;&nbsp;&nbsp; muestra archivos en lista<br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls -a</strong>&nbsp;&nbsp;&nbsp; muestra archivos ocultos<br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls -h</strong>&nbsp;&nbsp;&nbsp; muestra archivos en bytes";
    }
    if(cont == 3)
    {
        msj.innerHTML="<strong>mkdir -</strong> Se usa para crear un folder o un directorio Ejemplo:<br/><br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ mkdir</strong> nombre_directorio";
    }
    if(cont == 4)
    {
        msj.innerHTML="<strong>touch -</strong> Se usa para crear un archivo, Ejemplo:<br/><br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ touch</strong> nombre_archivo.ext";
    }
    if(cont == 5)
    {
        msj.innerHTML="<strong>cd -</strong> Se usa para acceder a directorios o folders se usa con <strong>..</strong> para salir al anterior, Ejemplo:<br/><br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ cd</strong> nombre_directorio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; para entrar al directorio<br/>"; 
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>nombre_directorio $ cd ..</strong>&nbsp;&nbsp;&nbsp;para salir del directorio"; 
    }
    if(cont == 6)
    {
        msj.innerHTML="<strong>mv -</strong> Se usa para mover un archivo, Ejemplo:<br/><br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ mv</strong> nombre_archivo.ext &nbsp;&nbsp; ruta_destino ";
    }
    if(cont == 7)
    {
        msj.innerHTML="<strong>rm -</strong> Se usa para remover o renombrar un archivo, Ejemplo:<br/><br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ rm</strong> nombre_archivo.ext &nbsp;&nbsp;&nbsp;&nbsp; para borrar o remover el archivo<br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ rm</strong> nombre_archivo.ext &nbsp;&nbsp;&nbsp;&nbsp; nuevo_nombre.ext &nbsp;&nbsp;&nbsp;&nbsp; para renombrar el archivo";
    }
    if(cont == 8)
    {
        msj.innerHTML='<strong>man -</strong> Es una herramienta de sistema que se utiliza para documentar y aprender sobre comandos, archivos etc Ejemplo:<br/><br/>';
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ man</strong> mkdir&nbsp;&nbsp;&nbsp;&nbsp; mostrara el documento del comando";
    }
    if(cont == 9)
    {
        msj.innerHTML="<strong>cat -</strong> Este comando se usa sobre todo para emitir el contenido de un archivo en la línea de comandos"; 
    }
    if(cont == 10)
    {
        msj.innerHTML="<strong>cp -</strong> Sirve para copiar Ejemplo:<br/><br/>";
        msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ rp</strong> nombre_archivo.ext &nbsp;&nbsp;&nbsp;&nbsp; copia_nombre.ext &nbsp;&nbsp;&nbsp;&nbsp;";
    }

    if(cont == 11)
    {
        msj.innerHTML="<strong>init -</strong> Inicia un repositorio"; 
    }
    if(cont == 12)
    {
        msj.innerHTML="<strong>add -</strong> Se usa para agregar archivos al staged area"; 
    }
    if(cont == 13)
    {
        msj.innerHTML='<strong>commit -</strong> Se usa para agregar archivos del staged area al repositorio local'; 
    }
    if(cont == 14)
    {
        msj.innerHTML="<strong>pull -</strong> Se usa para traer actualizaciones del repositorio remoto"; 
    }
    if(cont == 15)
    {
        msj.innerHTML="<strong>push -</strong> Se usa para mandar archivos del repositorio local al remoto"; 
    }
    if(cont == 16)
    {
        msj.innerHTML="<strong>reset -</strong> Se usa para varias opciones"; 
    }
    if(cont == 17)
    {
        msj.innerHTML="<strong>log -</strong> Muestra la historia de commits"; 
    }
    if(cont == 18)
    {
        msj.innerHTML='<strong>stat -</strong> Se usa con <strong> log </strong> y muestra la historia de commits con sus modificaciones'; 
    }
    if(cont == 19)
    {
        msj.innerHTML="<strong>show -</strong> Muestra el ultimo commit y sus cambios"; 
    }
    if(cont == 20)
    {
        msj.innerHTML="<strong>rm -</strong> Sirve para borrar del staged area un archivo o borrarlo del repositorio"; 
    }

    if(cont >20)
    {
        msj.innerHTML="<strong>Opcion incorrecta seleccione una opcion del 1 al 20</strong>"; 
    }
}