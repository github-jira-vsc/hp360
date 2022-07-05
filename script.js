// variable de ventana de informacion en archivo htlm
var msj = document.getElementById("mensaje");

//variable 
var v_mstr = document.getElementById("mostrar");



// variables, eventos y funciones de comandos de informacion
//pwd
var v_pwd = document.getElementById("pwd");

v_pwd.addEventListener("click", fnc_pwd);

function fnc_pwd()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>pwd<strong />&nbsp:&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>pwd -</strong> Muestra la ubicacion en la que se encuentra actualmente, Ejemplo:<br/><br/>"; 
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>/home/linux/hp/hp360</strong>";
}

//ls
var v_ls = document.getElementById("ls");

v_ls.addEventListener("click", fnc_ls);

function fnc_ls()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>ls<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>ls -</strong> Muestra el contenido del directorio en el que se encuentra se puede complementar de esta forma, Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls   </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; muestra archivos en horizontal<br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls -l</strong>&nbsp;&nbsp;&nbsp;&nbsp; muestra archivos en lista<br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls -a</strong>&nbsp;&nbsp;&nbsp; muestra archivos ocultos<br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ ls -h</strong>&nbsp;&nbsp;&nbsp; muestra archivos en bytes";
}

//mkdir
var v_mkdir = document.getElementById("mkdir");

v_mkdir.addEventListener("click", fnc_mkdir);

function fnc_mkdir()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>mkdir<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>mkdir -</strong> Se usa para crear un folder o un directorio Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ mkdir</strong> nombre_directorio";
}

//touch
var v_touch= document.getElementById("touch");

v_touch.addEventListener("click", fnc_touch);

function fnc_touch()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>touch<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>touch -</strong> Se usa para crear un archivo, Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ touch</strong> nombre_archivo.ext";
}

//cd
var v_cd = document.getElementById("cd");

v_cd.addEventListener("click", fnc_cd);

function fnc_cd()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>cd<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>cd -</strong> Se usa para acceder a directorios o folders se usa con <strong>..</strong> para salir al anterior, Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ cd</strong> nombre_directorio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; para entrar al directorio<br/>"; 
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>nombre_directorio $ cd ..</strong>&nbsp;&nbsp;&nbsp;para salir del directorio"; 
}

//mv
var v_mv = document.getElementById("mv");

v_mv.addEventListener("click", fnc_mv);

function fnc_mv()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>mv<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>mv -</strong> Se usa para mover un archivo, Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ mv</strong> nombre_archivo.ext &nbsp;&nbsp; ruta_destino ";
}

//rm
var v_rm = document.getElementById("rm");

v_rm.addEventListener("click", fnc_rm);

function fnc_rm()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>rm<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>rm -</strong> Se usa para remover o renombrar un archivo, Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ rm</strong> nombre_archivo.ext &nbsp;&nbsp;&nbsp;&nbsp; para borrar o remover el archivo<br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ rm</strong> nombre_archivo.ext &nbsp;&nbsp;&nbsp;&nbsp; nuevo_nombre.ext &nbsp;&nbsp;&nbsp;&nbsp; para renombrar el archivo";
}

//man
var v_man = document.getElementById("man");

v_man.addEventListener("click", fnc_man);

function fnc_man()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>man<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML='<strong>man -</strong> Es una herramienta de sistema que se utiliza para documentar y aprender sobre comandos, archivos etc Ejemplo:<br/><br/>';
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ man</strong> mkdir&nbsp;&nbsp;&nbsp;&nbsp; mostrara el documento del comando";
}

//cat
var v_cat = document.getElementById("cat");

v_cat.addEventListener("click", fnc_cat);

function fnc_cat()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>cat<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>cat -</strong> Este comando se usa sobre todo para emitir el contenido de un archivo en la línea de comandos"; 
}

//cp
var v_cp = document.getElementById("cp");

v_cp.addEventListener("click", fnc_cp);

function fnc_cp()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>cp<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>cp -</strong> Sirve para copiar Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ rp</strong> nombre_archivo.ext &nbsp;&nbsp;&nbsp;&nbsp; copia_nombre.ext &nbsp;&nbsp;&nbsp;&nbsp;";
}

//init
var v_init = document.getElementById("init");

v_init.addEventListener("click", fnc_init);

function fnc_init()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git init<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git innit -</strong> El comando git init crea un nuevo repositorio de Git. <br /><br />";
    msj.innerHTML= msj.innerHTML + "Puede convertir un proyecto existente y sin versión en un repositorio de Git, puede inicializar un nuevo repositorio vacío. La mayoría de los demás comandos de Git no se encuentran disponibles fuera de un repositorio inicializado, suele ser el primer comando que se ejecuta en un proyecto nuevo.<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git init</strong>";
}

//add
var v_add = document.getElementById("add");

v_add.addEventListener("click", fnc_add);

function fnc_add()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git add<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git add -</strong> Añade un cambio del directorio de trabajo en el entorno de ensayo.<br /><br />";
    msj.innerHTML= msj.innerHTML + "De este modo, indica a Git que quieres incluir actualizaciones en un archivo concreto en la próxima confirmación. Ejemplo:<br /><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git add</strong> nom_archivo.ext<br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git add .</strong>";
}

//commit
var v_commit = document.getElementById("commit");

v_commit.addEventListener("click", fnc_commit);

function fnc_commit()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git commit<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git commit -</strong> Sirve para confirmar una instacia del directorio del entorno de ensayo en el historial de confirmaciones de los repositorios. Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git commit</strong> -m 'mensaje commit'<br /><br />";
    msj.innerHTML= msj.innerHTML + "<strong>-m</strong> se usa para mensaje tambien se usa <strong> -a </strong> para añadir, solo cuando se ha añadido previamente y se pueden usar juntos Ejemplo:<br /><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git commit</strong> -ma 'mensaje commit'"; 
}

//pull
var v_pull = document.getElementById("pull");

v_pull.addEventListener("click", fnc_pull);

function fnc_pull()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git pull<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git pull -</strong> Se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local. Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git pull</strong> origin main";
}

//push
var v_push = document.getElementById("push");

v_push.addEventListener("click", fnc_push);

function fnc_push()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git push<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git push -</strong> Se usa para cargar contenido del repositorio local a un repositorio remoto. Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git push</strong> origin main";
}

//reset
var v_reset = document.getElementById("reset");

v_reset.addEventListener("click", fnc_reset);

function fnc_reset()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git reset<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git reset -</strong> Es un comando potente que sirve para deshacer los cambios locales en el estado de un repositorio de Git.<br/><br/>";
    msj.innerHTML= msj.innerHTML + "<strong>$ git reset --soft </strong> Se actualizan los punteros de referencia y el restablecimiento se detiene ahí. El índice del entorno de ensayo y el directorio de trabajo permanecen intactos.<br /><br />";
    msj.innerHTML= msj.innerHTML + "<strong>$ git reset --hard </strong> Los punteros de referencia del historial de confirmaciones se actualizan a la confirmación especificada.<br />";

}

//log
var v_log = document.getElementById("log");

v_log.addEventListener("click", fnc_log);

function fnc_log()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git log<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git log -</strong> Es usado para explorar el historial del repositorio. Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git log</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git log --all --graph</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git log --all --graph --decorate --oneline</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git log --stat</strong><br />";
}

//tag
var v_tag = document.getElementById("tag");

v_tag.addEventListener("click", fnc_tag);

function fnc_tag()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git tag<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git tag -</strong> Sirve para copiar Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git tag -a</strong> version -m 'descripcion'<br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git tag -d</strong> version<br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git push origin: refs/tags/nombre_tag</strong> Para borrar tag de github";
}

//branch
var v_branch = document.getElementById("branch");

v_branch.addEventListener("click", fnc_branch);

function fnc_branch()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git branch<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git branch -</strong> Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git branch</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para ver ramas<br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git branch -d</strong>&nbsp;&nbsp;&nbsp;&nbsp;Para borrar ramas<br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git branch -m</strong>&nbsp;&nbsp;&nbsp;Para renombrar ramas<br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git branch -r</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para ver ramas remotas";
}

//rm_g
var v_rm_g = document.getElementById("rm_g");

v_rm_g.addEventListener("click", fnc_rm_g);

function fnc_rm_g()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git rm<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git rm -</strong> Sirve para copiar Ejemplo:<br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ rp</strong> nombre_archivo.ext &nbsp;&nbsp;&nbsp;&nbsp; copia_nombre.ext &nbsp;&nbsp;&nbsp;&nbsp;";
}

//stash
var v_stash = document.getElementById("stash");

v_stash.addEventListener("click", fnc_stash);

function fnc_stash()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git stash<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git stash -</strong><br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git stash list</strong><br /> ";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git stash pop</strong><br /> ";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git stash drop</strong><br /> ";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git stash branch nombre_rama</strong><br /> ";

}

//shortlog
var v_shortlog = document.getElementById("shortlog");

v_shortlog.addEventListener("click", fnc_shortlog);

function fnc_shortlog()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git shortlog<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git shortlog -</strong><br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ shortlog -sn</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ shortlog -sn --all</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ shortlog -sn --all --no-merges</strong>";

}

//blame
var v_blame = document.getElementById("blame");

v_blame.addEventListener("click", fnc_blame);

function fnc_blame()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git blame<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git blame -</strong><br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git blame nom_archivo</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git blame nom_archivo -l35, 53 -C</strong>";

}

//show
var v_show = document.getElementById("show");

v_show.addEventListener("click", fnc_show);

function fnc_show()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git show<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git show -</strong><br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git show</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git show -branch</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git show -branch --all</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git show -ref --tags</strong>";
}

//config
var v_config = document.getElementById("config");

v_config.addEventListener("click", fnc_config);

function fnc_config()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git config<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git config -l</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git config --list</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git config --list --show --origin</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git config --global</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git config --global user.name'nombre'</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git config --global user.email'email'</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git config --global alias.nombre 'comando'</strong> Alias global<br />";
}

//checkout
var v_checkout = document.getElementById("checkout");

v_checkout.addEventListener("click", fnc_checkout);

function fnc_checkout()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git checkout<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git checkout -</strong><br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git checkout nom_rama</strong> Cambia de rama <br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git checkout -b</strong> Crea una nueva rama y se cambia a ella<br />";
}

//remote
var v_remote = document.getElementById("remote");

v_remote.addEventListener("click", fnc_remote);

function fnc_remote()
{
    v_mstr.innerHTML = "&nbsp;&nbsp;<strong>git remote<strong />&nbsp;&nbsp; Es el comando selecionado y mostrado en este momento";
    msj.innerHTML="<strong>git remote -</strong><br/><br/>";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git remote add origin https</strong><br />";
    msj.innerHTML= msj.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$ git remote -v</strong><br />";
}