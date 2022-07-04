var vtna = document.getElementById("ventana");

var btn = document.getElementById("boton");
btn.addEventListener("click", instruccion);
var msj = document.getElementById("mensaje");


function instruccion()
{
    var cont = parseInt(vtna.value);
    if(cont == 1)
    {
        msj.innerHTML="<strong>pwd</strong> Muestra la ubicacion actual"; 
    }
    if(cont == 2)
    {
        msj.innerHTML="<strong>ls</strong> Muestra el contenido del directorio"; 
    }
    if(cont == 3)
    {
        msj.innerHTML='<strong>mkdir</strong> Se usa para crear folder o directorio'; 
    }
    if(cont == 4)
    {
        msj.innerHTML="<strong>touch</strong> Se usa para crear archivos"; 
    }
    if(cont == 5)
    {
        msj.innerHTML="<strong>cd</strong> Se usa para accesar a un directorio"; 
    }
    if(cont == 6)
    {
        msj.innerHTML="<strong>mv</strong> Se usa para mover archivos"; 
    }
    if(cont == 7)
    {
        msj.innerHTML="<strong>rm</strong> Sirve para remover o renombrar"; 
    }
    if(cont == 8)
    {
        msj.innerHTML='<strong>man</strong> Muestra opciones'; 
    }
    if(cont == 9)
    {
        msj.innerHTML="<strong>cat</strong> Muestra el contenido del archivo en consola"; 
    }
    if(cont == 10)
    {
        msj.innerHTML="<strong>cp</strong> Sirve para copiar"; 
    }

    if(cont == 11)
    {
        msj.innerHTML="<strong>init</strong> Inicia un repositorio"; 
    }
    if(cont == 12)
    {
        msj.innerHTML="<strong>add</strong> Se usa para agregar archivos al staged area"; 
    }
    if(cont == 13)
    {
        msj.innerHTML='<strong>commit</strong> Se usa para agregar archivos del staged area al repositorio local'; 
    }
    if(cont == 14)
    {
        msj.innerHTML="<strong>pull</strong> Se usa para traer actualizaciones del repositorio remoto"; 
    }
    if(cont == 15)
    {
        msj.innerHTML="<strong>push</strong> Se usa para mandar archivos del repositorio local al remoto"; 
    }
    if(cont == 16)
    {
        msj.innerHTML="<strong>reset</strong> Se usa para varias opciones"; 
    }
    if(cont == 17)
    {
        msj.innerHTML="<strong>log</strong> Muestra la historia de commits"; 
    }
    if(cont == 18)
    {
        msj.innerHTML='<strong>stat</strong> Se usa con <strong> log </strong> y muestra la historia de commits con sus modificaciones'; 
    }
    if(cont == 19)
    {
        msj.innerHTML="<strong>show</strong> Muestra el ultimo commit y sus cambios"; 
    }
    if(cont == 20)
    {
        msj.innerHTML="<strong>rm</strong> Sirve para borrar del staged area un archivo o borrarlo del repositorio"; 
    }

    if(cont >20)
    {
        msj.innerHTML="<strong>Opcion incorrecta seleccione una opcion del 1 al 20</strong>"; 
    }
}