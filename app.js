const games = [
 {id:"mario-nes",title:"Super Mario Bros.",system:"nes",systemName:"Nintendo Entertainment System",genre:"Plataformas",year:"1985",symbol:"🍄",c1:"#e44b57",c2:"#632f83",description:"Un clásico de plataformas que marcó una época. Seleccioná una ROM compatible desde tu dispositivo para probar el reproductor."},
 {id:"zelda-snes",title:"The Legend of Zelda",system:"snes",systemName:"Super Nintendo",genre:"Aventura",year:"1991",symbol:"🗡️",c1:"#d6a34c",c2:"#3b674f",description:"Exploración, secretos y aventura en un mundo de fantasía. Esta ficha es ilustrativa: cargá tu propio archivo legal para jugar."},
 {id:"sonic-md",title:"Sonic the Hedgehog",system:"snes",systemName:"Mega Drive / Genesis",genre:"Plataformas",year:"1991",symbol:"💎",c1:"#248fd4",c2:"#243c87",description:"Velocidad y plataformas. La selección del núcleo se puede ajustar en la próxima fase para admitir sistemas adicionales."},
 {id:"metroid-gba",title:"Metroid Fusion",system:"gba",systemName:"Game Boy Advance",genre:"Acción",year:"2002",symbol:"🪐",c1:"#c95b4c",c2:"#42274f",description:"Acción y exploración en una aventura de ciencia ficción. Usá una ROM propia o autorizada para realizar la prueba."},
 {id:"racing-psx",title:"Racing Classics",system:"psx",systemName:"PlayStation",genre:"Carreras",year:"1998",symbol:"🏎️",c1:"#d45b45",c2:"#51324d",description:"Ficha de ejemplo para la categoría PlayStation. Algunos juegos pueden requerir BIOS y archivos adicionales."},
 {id:"adventure-n64",title:"Adventure 64",system:"n64",systemName:"Nintendo 64",genre:"Aventura 3D",year:"1998",symbol:"🌀",c1:"#3eaa9c",c2:"#243d71",description:"Ficha de ejemplo para Nintendo 64. El rendimiento depende del dispositivo, del navegador y del juego concreto."},
 {id:"handheld-psp",title:"Portable Legends",system:"psp",systemName:"PlayStation Portable",genre:"Acción portátil",year:"2006",symbol:"🎮",c1:"#8d78d9",c2:"#273a63",description:"Categoría de prueba para PSP. Es un sistema exigente: su soporte web puede variar y deberá validarse juego por juego."},
 {id:"arcade",title:"Arcade Collection",system:"mame",systemName:"Arcade / MAME",genre:"Arcade",year:"Clásicos",symbol:"👾",c1:"#d45d9a",c2:"#422d78",description:"Ficha demostrativa de arcade. MAME/FBNeo requieren ROM sets compatibles con el núcleo elegido; no todas las ROM funcionan con todos los núcleos."},
 {id:"neogeo-demo",title:"Neo Geo Classics",system:"neogeo",systemName:"SNK Neo Geo",genre:"Lucha / Arcade",year:"1990s",symbol:"拳",c1:"#dc5c4d",c2:"#3e2a60",description:"Categoría de ejemplo para Neo Geo. Habitualmente se utiliza un núcleo arcade como FBNeo y el conjunto correcto de ROM/BIOS. Esta ficha no incluye archivos de juego."},
 {id:"mame-demo",title:"MAME Arcade Library",system:"mame",systemName:"MAME 2003 Plus",genre:"Arcade",year:"Arcade",symbol:"🕹️",c1:"#d99c43",c2:"#4d2d63",description:"MAME32 es una interfaz de Windows para MAME, no una consola diferente. En navegador podemos usar núcleos MAME compatibles; las ROM deben coincidir con la versión del núcleo."},
 {id:"master-system-demo",title:"8-bit Sega Collection",system:"sms",systemName:"Sega Master System",genre:"Clásicos",year:"1980s",symbol:"⭐",c1:"#397bb8",c2:"#29335f",description:"Categoría demostrativa para Sega Master System. Seleccioná un archivo compatible para probar la emulación."},
 {id:"gamegear-demo",title:"Pocket Sega Collection",system:"gg",systemName:"Sega Game Gear",genre:"Portátil",year:"1990s",symbol:"▣",c1:"#4eaa8a",c2:"#233f5a",description:"Categoría demostrativa para Game Gear. Los archivos deben ser compatibles con el núcleo de emulación."},
 {id:"gb-demo",title:"Game Boy Collection",system:"gb",systemName:"Game Boy / Color",genre:"Portátil",year:"1990s",symbol:"▤",c1:"#9ebc65",c2:"#354c4c",description:"Categoría demostrativa para Game Boy y Game Boy Color."},
 {id:"nds-demo",title:"Nintendo DS Collection",system:"nds",systemName:"Nintendo DS",genre:"Portátil",year:"2000s",symbol:"▣",c1:"#a48ce1",c2:"#2d3d6e",description:"Categoría demostrativa para Nintendo DS. El rendimiento depende del dispositivo y algunos juegos requieren configuración adicional."},
 {id:"atari-demo",title:"Atari Classics",system:"atari2600",systemName:"Atari 2600",genre:"Clásicos",year:"1970s",symbol:"✦",c1:"#c85d45",c2:"#3b2b4e",description:"Categoría demostrativa para Atari 2600."}
];
const systems = [
 {id:"nes",name:"NES / Famicom",icon:"▣",level:"Ligero",cls:"",desc:"Muy buena opción para móviles"},
 {id:"snes",name:"SNES / Super Famicom",icon:"◈",level:"Ligero",cls:"",desc:"Rendimiento generalmente accesible"},
 {id:"gba",name:"Game Boy Advance",icon:"▤",level:"Ligero",cls:"",desc:"Ideal para la primera prueba"},
 {id:"psx",name:"PlayStation",icon:"△",level:"Intermedio",cls:"mid",desc:"Algunos juegos requieren BIOS"},
 {id:"n64",name:"Nintendo 64",icon:"✦",level:"Intermedio",cls:"mid",desc:"Compatibilidad variable por juego"},
 {id:"psp",name:"PlayStation Portable",icon:"▰",level:"Exigente",cls:"hard",desc:"Validar primero en PC y luego Android"},
 {id:"neogeo",name:"SNK Neo Geo",icon:"拳",level:"Intermedio",cls:"mid",desc:"FBNeo; ROM set y BIOS compatibles"},
 {id:"mame",name:"Arcade / MAME",icon:"🕹",level:"Variable",cls:"mid",desc:"La versión del ROM set debe coincidir"},
 {id:"sms",name:"Sega Master System",icon:"◧",level:"Ligero",cls:"",desc:"Emulación generalmente accesible"},
 {id:"gg",name:"Sega Game Gear",icon:"▣",level:"Ligero",cls:"",desc:"Emulación generalmente accesible"},
 {id:"gb",name:"Game Boy / Color",icon:"▤",level:"Ligero",cls:"",desc:"Ideal para móviles"},
 {id:"nds",name:"Nintendo DS",icon:"▥",level:"Intermedio",cls:"mid",desc:"Pantalla táctil y rendimiento por juego"},
 {id:"atari2600",name:"Atari 2600",icon:"✦",level:"Ligero",cls:"",desc:"Muy bajo requisito de rendimiento"}
];
let selectedGame = null, selectedFile = null, favorites = JSON.parse(localStorage.getItem("retroverse-favorites")||"[]");
const $ = id => document.getElementById(id);
const grid = $("gameGrid");
function renderCards(target, list){
 target.innerHTML = "";
 list.forEach(g=>{
  const card=document.createElement("article"); card.className="game-card";
  card.innerHTML=`<div class="cover" style="--c1:${g.c1};--c2:${g.c2};${g.image ? `background-image:linear-gradient(135deg,${g.c1}55,${g.c2}66),url('${g.image}')` : ""};background-size:cover;background-position:center"><span class="cover-symbol ${g.image ? "has-cover" : ""}">${g.image ? "" : g.symbol}</span><span class="cover-label">${g.system.toUpperCase()} / LIBRARY</span><button class="favorite-toggle ${favorites.includes(g.id)?"on":""}" data-fav="${g.id}" aria-label="Favorito">${favorites.includes(g.id)?"♥":"♡"}</button></div><div class="game-info"><h3></h3><p></p><div class="game-tags"><span class="tag"></span><span class="tag muted-tag"></span></div></div>`;
  card.querySelector("h3").textContent=g.title;
  card.querySelector(".game-info p").textContent=g.systemName;
  card.querySelector(".tag").textContent=g.genre;
  card.querySelector(".muted-tag").textContent=g.year;
  card.addEventListener("click",e=>{if(e.target.closest("[data-fav]"))return;selectPreview(g)});
  card.querySelector("[data-fav]").addEventListener("click",e=>{e.stopPropagation();toggleFavorite(g.id)});
  target.appendChild(card);
 });
}
function selectPreview(g){
 selectedGame=g;
 $("previewTitle").textContent=g.title;
 $("previewSystem").textContent=g.systemName.toUpperCase();
 $("previewDescription").textContent=g.description;
 $("previewGenre").textContent=g.genre.toUpperCase();
 $("previewYear").textContent=g.year;
 $("previewSymbol").textContent=g.symbol;
 $("previewArt").style.background=g.image ? `linear-gradient(135deg,#10131d55,#10131d55),url("${g.image}") center/cover` : `linear-gradient(135deg,${g.c1},${g.c2})`;
 $("previewSymbol").textContent=g.image ? "" : g.symbol;
 $("previewOpen").disabled=false;
}
$("previewOpen").addEventListener("click",()=>{if(selectedGame)openGame(selectedGame)});
function renderWheel(){
 const wheel=$("consoleWheel");
 wheel.innerHTML="";
 const wheelSystems=[
  {id:"all",name:"Todas",short:"ALL",icon:"✦",c1:"#9b8af2",c2:"#334b72"},
  {id:"nes",name:"NES",short:"8-BIT",icon:"▣",c1:"#e65a58",c2:"#612f6e"},
  {id:"snes",name:"SNES / Sega",short:"16-BIT",icon:"◈",c1:"#5c7fe0",c2:"#30365f"},
  {id:"gba",name:"Game Boy Advance",short:"GBA",icon:"▤",c1:"#6aa98d",c2:"#2e4a66"},
  {id:"gb",name:"Game Boy / Color",short:"GB / GBC",icon:"▥",c1:"#b0bd67",c2:"#3a554d"},
  {id:"sms",name:"Master System",short:"SEGA",icon:"◧",c1:"#3c9ed0",c2:"#28375f"},
  {id:"gg",name:"Game Gear",short:"PORTÁTIL",icon:"▣",c1:"#4cae9d",c2:"#294b68"},
  {id:"psx",name:"PlayStation",short:"PS1",icon:"△",c1:"#7f83c8",c2:"#242b47"},
  {id:"n64",name:"Nintendo 64",short:"N64",icon:"✦",c1:"#d59a4a",c2:"#47345f"},
  {id:"neogeo",name:"Neo Geo",short:"SNK",icon:"拳",c1:"#d75c4e",c2:"#432a5b"},
  {id:"mame",name:"MAME / Arcade",short:"ARCADE",icon:"🕹",c1:"#e2a448",c2:"#6d346b"},
  {id:"nds",name:"Nintendo DS",short:"NDS",icon:"▥",c1:"#a18be0",c2:"#30436b"},
  {id:"psp",name:"PSP",short:"PORTÁTIL",icon:"▰",c1:"#6d83d8",c2:"#222e4d"},
  {id:"atari2600",name:"Atari 2600",short:"ATARI",icon:"✧",c1:"#ce6b4e",c2:"#3c2a4c"}
 ];
 wheelSystems.forEach((s,i)=>{
  const b=document.createElement("button");
  b.className="wheel-item"+(($("systemFilter").value===s.id||(s.id==="all"&&$("systemFilter").value==="all"))?" selected":"");
  b.dataset.system=s.id;
  b.innerHTML=`<span class="wheel-console" style="--wc1:${s.c1};--wc2:${s.c2}"><span class="wheel-icon">${s.icon}</span><span class="wheel-reflection"></span></span><span class="wheel-name">${s.name}</span><span class="wheel-sub">${s.short}</span>`;
  b.addEventListener("click",()=>{
   $("systemFilter").value=s.id;
   document.querySelectorAll(".wheel-item").forEach(x=>x.classList.toggle("selected",x.dataset.system===s.id));
   refresh();
   $("viewTitle").innerHTML=s.id==="all"?'Tu biblioteca <span>retro</span>':`${s.name} <span>games</span>`;
   $("crumb").textContent=s.name.toUpperCase();
   $("librarySection").scrollIntoView({behavior:"smooth",block:"start"});
  });
  wheel.appendChild(b);
 });
}
$("wheelPrev").addEventListener("click",()=>$("consoleWheel").scrollBy({left:-300,behavior:"smooth"}));
$("wheelNext").addEventListener("click",()=>$("consoleWheel").scrollBy({left:300,behavior:"smooth"}));
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
 $("modalGenre").textContent=g.genre;$("modalYear").textContent=g.year;$("modalCover").textContent=g.image?"":g.symbol;$("modalCover").style.background=g.image?`linear-gradient(145deg,#10131d22,#10131d55),url("${g.image}") center/cover`:`linear-gradient(145deg,${g.c1},${g.c2})`;
 $("gameModal").classList.remove("hidden");
}
$("romFile").addEventListener("change",e=>{selectedFile=e.target.files[0]||null;if(selectedFile){$("launchButton").disabled=false;$("launchButton").innerHTML=`Iniciar ${selectedGame.title} <span>▶</span>`;}});
function coreFor(system){return ({nes:"fceumm",snes:"snes9x",gba:"mgba",psx:"pcsx_rearmed",n64:"mupen64plus_next",psp:"ppsspp",neogeo:"fbneo",mame:"mame2003_plus",sms:"smsplus",gg:"genesis_plus_gx",gb:"gambatte",nds:"melonds",atari2600:"stella2014"})[system]||"fceumm";}
$("launchButton").addEventListener("click",()=>{
 if(!selectedGame||!selectedFile)return;
 const url=URL.createObjectURL(selectedFile);
 $("gameModal").classList.add("hidden");$("playerOverlay").classList.remove("hidden");
 $("playerGameTitle").textContent=selectedGame.title;$("playerSystemName").textContent=selectedGame.systemName;
 $("playerMessage").textContent="Cargando emulador web. El primer inicio puede tardar unos instantes.";
 const host=$("game");host.innerHTML="";
 // EmulatorJS loads the selected ROM locally. No file is uploaded to a server.
 window.EJS_player="#game";window.EJS_core=coreFor(selectedGame.system);window.EJS_gameUrl=url;
 window.EJS_pathtodata="https://cdn.emulatorjs.org/stable/data/";window.EJS_startOnLoaded=true;window.EJS_language="es";window.EJS_gameName=selectedGame.title;
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
// Importa el catálogo real de Neo Geo desde el gamelist.xml aportado.
async function loadNeoGeoCatalog(){
 try{
  const response=await fetch("/data/neogeo/gamelist.xml",{cache:"no-cache"});
  if(!response.ok) throw new Error("No se pudo cargar gamelist.xml");
  const xml=new DOMParser().parseFromString(await response.text(),"application/xml");
  if(xml.querySelector("parsererror")) throw new Error("El XML no es válido");
  const entries=[...xml.querySelectorAll("game")].map((node,index)=>{
   const value=tag=>node.querySelector(tag)?.textContent?.trim()||"";
   const mediaPath=(raw,folder)=>{
    if(!raw) return "";
    const clean=raw.replace(/^\.\//,"");
    return "/data/neogeo/"+clean;
   };
   const date=value("releasedate");
   const year=/^\d{4}/.test(date)?date.slice(0,4):"Neo Geo";
   return {
    id:"neogeo-"+(value("path").replace(/^\.\//,"").replace(/\.[^.]+$/,"")||index),
    title:value("name")||"Juego Neo Geo", system:"neogeo", systemName:"SNK Neo Geo",
    genre:value("genre")||"Arcade", year, symbol:"拳", c1:"#d75c4e",c2:"#34244f",
    description:value("desc")||"Ficha importada del catálogo de Neo Geo.",
    image:mediaPath(value("image")), thumbnail:mediaPath(value("thumbnail")),
    video:mediaPath(value("video")), romPath:value("path"), developer:value("developer"),
    publisher:value("publisher"), players:value("players"), rating:value("rating"),
    marquee:mediaPath(value("marquee")), fanart:mediaPath(value("fanart"))
   };
  });
  if(entries.length){
   const demoIndex=games.findIndex(g=>g.id==="neogeo-demo");
   if(demoIndex>=0) games.splice(demoIndex,1);
   games.push(...entries);
   const notice=document.querySelector(".notice");
   if(notice){notice.querySelector("b").textContent=`Catálogo Neo Geo cargado: ${entries.length} juegos`;
    notice.querySelector("small").textContent="Fichas importadas desde gamelist.xml. Para mostrar carátulas y vídeos, copiá también las carpetas images y videos dentro de data/neogeo.";}
   refresh();
  }
 }catch(error){console.warn("Catálogo Neo Geo:",error);}
}
refresh();
loadNeoGeoCatalog();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));
