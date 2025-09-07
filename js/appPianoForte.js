//  Helpers para seleccionar elementos del DOM
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));



const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)) }
};




//Registro. Ingreso y Perfil

function setupPerfil(){
  const save = $('#btnGuardarPerfil'); if(!save) return;
  const ses = store.get('session',null);
  if(!ses){ location.href='Ingresar.html'; return; }
  const users = store.get('users',{});
  const u = users[ses.email];
  $('#perNombre').value = u.nombre;
  $('#perEmail').value = u.email;
  $('#perTel').value = u.tel;
  save.addEventListener('click',()=>{
    const nombre = $('#perNombre').value.trim();
    const tel = $('#perTel').value.trim();
    if(!nombre) return $('#perfilMsg').textContent='El nombre es obligatorio';
    if(!validarTel(tel)) return $('#perfilMsg').textContent='Teléfono inválido';
    u.nombre = nombre; u.tel = tel; users[ses.email]=u; store.set('users',users);
    $('#perfilMsg').textContent='Perfil actualizado';
  });
}

// VALIDACIONES
function validarEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) }
function validarTel(v){ return /^\+?\d[\d\s-]{6,}$/.test(v) }

// REGISTRO USUARIO
function setupRegistro(){
  const btn = $('#btnRegistro'); if(!btn) return;
  btn.addEventListener('click', ()=>{
    const nombre = $('#regNombre').value.trim();
    const email = $('#regEmail').value.trim();
    const tel = $('#regTel').value.trim();
    const pass = $('#regPass').value;
    const pass2 = $('#regPass2').value;
    const msg = $('#regMsg');
    // Validaciones
    if(!nombre) return msg.textContent='El nombre es obligatorio';
    if(!validarEmail(email)) return msg.textContent='Ingresa un correo válido';
    if(!validarTel(tel)) return msg.textContent='Ingresa un teléfono válido';
    if(pass.length<6) return msg.textContent='La contraseña debe tener 6+ caracteres';
    if(pass!==pass2) return msg.textContent='Las contraseñas no coinciden';
    msg.textContent='';
    const users = store.get('users',{});
    if(users[email]){ msg.textContent='Ya existe una cuenta con este correo'; return; }
    users[email] = { nombre, email, tel, pass };
    store.set('users', users);
    store.set('session', { email });
    location.href='perfil.html';
  });
}



//CORRER FUNCIONES

document.addEventListener('DOMContentLoaded',()=>{

  setupPerfil();
  setupRegistro();

});
