const games = [
 {id:"mario-nes",title:"Super Mario Bros.",system:"nes",systemName:"Nintendo Entertainment System",genre:"Plataformas",year:"1985",symbol:"🍄",c1:"#e44b57",c2:"#632f83",description:"Un clásico de plataformas que marcó una época. Seleccioná una ROM compatible desde tu dispositivo para probar el reproductor."},
 {id:"zelda-snes",title:"The Legend of Zelda",system:"snes",systemName:"Super Nintendo",genre:"Aventura",year:"1991",symbol:"🗡️",c1:"#d6a34c",c2:"#3b674f",description:"Exploración, secretos y aventura en un mundo de fantasía. Esta ficha es ilustrativa: cargá tu propio archivo legal para jugar."},
 {id:"sonic-md",title:"Sonic the Hedgehog",system:"snes",systemName:"Mega Drive / Genesis",genre:"Plataformas",year:"1991",symbol:"💎",c1:"#248fd4",c2:"#243c87",description:"Velocidad y plataformas. La selección del núcleo se puede ajustar en la próxima fase para admitir sistemas adicionales."},
 {id:"metroid-gba",title:"Metroid Fusion",system:"gba",systemName:"Game Boy Advance",genre:"Acción",year:"2002",symbol:"🪐",c1:"#c95b4c",c2:"#42274f",description:"Acción y exploración en una aventura de ciencia ficción. Usá una ROM propia o autorizada para realizar la prueba."},
 {id:"racing-psx",title:"Racing Classics",system:"psx",systemName:"PlayStation",genre:"Carreras",year:"1998",symbol:"🏎️",c1:"#d45b45",c2:"#51324d",description:"Ficha de ejemplo para la categoría PlayStation. Algunos juegos pueden requerir BIOS y archivos adicionales."},
 {id:"adventure-n64",title:"Adventure 64",system:"n64",systemName:"Nintendo 64",genre:"Aventura 3D",year:"1998",symbol:"🌀",c1:"#3eaa9c",c2:"#243d71",description:"Ficha de ejemplo para Nintendo 64. El rendimiento depende del dispositivo, del navegador y del juego concreto."},
 {id:"handheld-psp",title:"Portable Legends",system:"psp",systemName:"PlayStation Portable",genre:"Acción portátil",year:"2006",symbol:"🎮",c1:"#8d78d9",c2:"#273a63",description:"Categoría de prueba para PSP. Es un sistema exigente: su soporte web puede variar y deberá validarse juego por juego."},
 {id:"arcade",title:"Arcade Collection",system:"nes",systemName:"Arcade / clásico",genre:"Arcade",year:"Clásicos",symbol:"👾",c1:"#d45d9a",c2:"#422d78",description:"Ficha demostrativa para el catálogo. En fases posteriores añadiremos metadatos y carátulas propias de cada juego."}
];
const systems = [
 {id:"nes",name:"NES / Famicom",icon:"▣",level:"Ligero",cls:"",desc:"Muy buena opción para móviles"},
 {id:"snes",name:"SNES / Super Famicom",icon:"◈",level:"Ligero",cls:"",desc:"Rendimiento generalmente accesible"},
 {id:"gba",name:"Game Boy Advance",icon:"▤",level:"Ligero",cls:"",desc:"Ideal para la primera prueba"},
 {id:"psx",name:"PlayStation",icon:"△",level:"Intermedio",cls:"mid",desc:"Algunos juegos requieren BIOS"},
 {id:"n64",name:"Nintendo 64",icon:"✦",level:"Intermedio",cls:"mid",desc:"Compatibilidad variable por juego"},
 {id:"psp",name:"PlayStation Portable",icon:"▰",level:"Exigente",cls:"hard",desc:"Validar primero en PC y luego Android"}
];
let selectedGame = null, selectedFile = null, favorites = JSON.parse(localStorage.getItem("retroverse-favorites")||"[]");
const $ = id => document.getElementById(id);
const grid = $("gameGrid");
function renderCards(target, list){
 target.innerHTML = "";
 list.forEach(g=>{
  const card=document.createElement("article"); card.className="game-card";
  card.innerHTML=`<div class="cover" style="--c1:${g.c1};--c2:${g.c2}"><span class="cover-symbol">${g.symbol}</span><span class="cover-label">${g.system.toUpperCase()} / LIBRARY</span><button class="favorite-toggle ${favorites.includes(g.id)?"on":""}" data-fav="${g.id}" aria-label="Favorito">${favorites.includes(g.id)?"♥":"♡"}</button></div><div class="game-info"><h3>${g.title}</h3><p>${g.systemName}</p><div class="game-tags"><span class="tag">${g.genre}</span><span class="tag muted-tag">${g.year}</span></div></div>`;
  card.addEventListener("click",e=>{if(e.target.closest("[data-fav]"))return;openGame(g)});
  card.querySelector("[data-fav]").addEventListener("click",e=>{e.stopPropagation();toggleFavorite(g.id)});
  target.appendChild(card);
 });
}
function toggleFavorite(id){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("retroverse-favorites",JSON.stringify(favorites));refresh();}
function refresh(){
 const q=$("searchInput").value.toLowerCase(), f=$("systemFilter").value;
 const list=games.filter(g=>(g.title+" "+g.systemName+" "+g.genre).toLowerCase().includes(q)&&(f==="all"||g.system===f));
 renderCards(grid,list);$("emptyState").classList.toggle("hidden",list.length>0);
 renderCards($("favoriteGrid"),games.filter(g=>favorites.includes(g.id)));
}
function openGame(g){
 selectedGame=g;selectedFile=null;$("romFile").value="";$("launchButton").disabled=true;$("launchButton").textContent="Seleccioná un archivo para jugar ▶";
 $("modalTitle").textContent=g.title;$("modalSystem").textContent=g.systemName.toUpperCase();$("modalDescription").textContent=g.description;
 $("modalGenre").textContent=g.genre;$("modalYear").textContent=g.year;$("modalCover").textContent=g.symbol;$("modalCover").style.background=`linear-gradient(145deg,${g.c1},${g.c2})`;
 $("gameModal").classList.remove("hidden");
}
$("romFile").addEventListener("change",e=>{selectedFile=e.target.files[0]||null;if(selectedFile){$("launchButton").disabled=false;$("launchButton").innerHTML=`Iniciar ${selectedGame.title} <span>▶</span>`;}});
function coreFor(system){return ({nes:"fceumm",snes:"snes9x",gba:"mgba",psx:"pcsx_rearmed",n64:"mupen64plus_next",psp:"ppsspp"})[system]||"fceumm";}
$("launchButton").addEventListener("click",()=>{
 if(!selectedGame||!selectedFile)return;
 const url=URL.createObjectURL(selectedFile);
 $("gameModal").classList.add("hidden");$("playerOverlay").classList.remove("hidden");
 $("playerGameTitle").textContent=selectedGame.title;$("playerSystemName").textContent=selectedGame.systemName;
 $("playerMessage").textContent="Cargando emulador web. El primer inicio puede tardar unos instantes.";
 const host=$("game");host.innerHTML="";
 // EmulatorJS loads the selected ROM locally. No file is uploaded to a server.
 window.EJS_player="#game";window.EJS_core=coreFor(selectedGame.system);window.EJS_gameUrl=url;
 window.EJS_pathtodata="https://cdn.emulatorjs.org/stable/data/";window.EJS_startOnLoaded=true;window.EJS_language="es";
 const old=document.getElementById("emulatorLoader");if(old)old.remove();
 const script=document.createElement("script");script.id="emulatorLoader";script.src=window.EJS_pathtodata+"loader.js";
 script.onload=()=>{$("playerMessage").textContent="Emulador cargado. Si no inicia, revisá la compatibilidad del archivo o del núcleo."};
 script.onerror=()=>{$("playerMessage").textContent="No se pudo cargar EmulatorJS. Revisá tu conexión e intentá nuevamente."};
 document.body.appendChild(script);
});
$("exitPlayer").addEventListener("click",()=>{if(confirm("¿Salir de la partida? El progreso no se guarda en esta versión.")){location.reload();}});
$("closeModal").addEventListener("click",()=>$("gameModal").classList.add("hidden"));
$("gameModal").addEventListener("click",e=>{if(e.target===$("gameModal"))$("gameModal").classList.add("hidden")});
$("searchInput").addEventListener("input",refresh);$("systemFilter").addEventListener("change",refresh);
$("exploreBtn").addEventListener("click",()=>$("librarySection").scrollIntoView({behavior:"smooth"}));
document.querySelectorAll(".nav").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".nav").forEach(n=>n.classList.remove("active"));btn.classList.add("active");
 const view=btn.dataset.view;
 $("librarySection").classList.toggle("hidden",view!=="library");
 $("systemsSection").classList.toggle("hidden",view!=="systems");
 $("favoritesSection").classList.toggle("hidden",view!=="favorites");
 $("crumb").textContent=view.toUpperCase();$("viewTitle").innerHTML=view==="library"?'Tu biblioteca <span>retro</span>':view==="systems"?'Sistemas <span>retro</span>':'Favoritos <span>personales</span>';
 if(view==="favorites")renderCards($("favoriteGrid"),games.filter(g=>favorites.includes(g.id)));
 document.querySelector(".sidebar").classList.remove("open");
}));
$("menuToggle").addEventListener("click",()=>document.querySelector(".sidebar").classList.toggle("open"));
$("systemsGrid").innerHTML=systems.map(s=>`<div class="system-card"><div class="system-icon">${s.icon}</div><div><b>${s.name}</b><small>${s.desc}</small></div><span class="level ${s.cls}">${s.level}</span></div>`).join("");
refresh();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));
