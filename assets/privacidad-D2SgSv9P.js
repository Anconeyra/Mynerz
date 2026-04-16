import{S as Y,i as Z,s as ee,N as te,e as z,F as se,d as A,m as x,a as S,p as I,q,J as ne,K as oe,b as w,r as R,c as r,f as v,u as U,g as _,h as u,o as ae,T as ie,n as X,L as ce}from"./ThemeToggle-CnL6-B5Q.js";function O(a,e,t){const s=a.slice();return s[2]=e[t],s[4]=t,s}function G(a,e,t){const s=a.slice();return s[5]=e[t],s}function J(a,e,t){const s=a.slice();return s[2]=e[t],s[4]=t,s}function K(a){let e,t;return e=new ie({}),{c(){U(e.$$.fragment)},m(s,i){R(e,s,i),t=!0},i(s){t||(q(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function Q(a){let e,t,s;return{c(){e=v("li"),t=v("a"),t.textContent=`${a[2].title}`,s=_(),u(t,"href","#section-"+a[4]),u(t,"class","svelte-1vnmshy"),u(e,"class","svelte-1vnmshy")},m(i,l){w(i,e,l),r(e,t),r(e,s)},p:X,d(i){i&&A(e)}}}function re(a){let e;return{c(){e=v("p"),e.textContent=`${a[5]}`,u(e,"class","svelte-1vnmshy")},m(t,s){w(t,e,s)},p:X,d(t){t&&A(e)}}}function V(a){let e=a[5].trim(),t,s=e&&re(a);return{c(){s&&s.c(),t=ce()},m(i,l){s&&s.m(i,l),w(i,t,l)},p(i,l){e&&s.p(i,l)},d(i){i&&A(t),s&&s.d(i)}}}function W(a){let e,t,s,i,l=z(a[2].content.split(`

`)),d=[];for(let m=0;m<l.length;m+=1)d[m]=V(G(a,l,m));return{c(){e=v("section"),t=v("h2"),t.textContent=`${a[2].title}`,s=_(),i=v("div");for(let m=0;m<d.length;m+=1)d[m].c();u(t,"class","svelte-1vnmshy"),u(i,"class","section-content svelte-1vnmshy"),u(e,"id","section-"+a[4]),u(e,"class","content-section svelte-1vnmshy")},m(m,g){w(m,e,g),r(e,t),r(e,s),r(e,i);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(i,null)},p(m,g){if(g&2){l=z(m[2].content.split(`

`));let c;for(c=0;c<l.length;c+=1){const y=G(m,l,c);d[c]?d[c].p(y,g):(d[c]=V(y),d[c].c(),d[c].m(i,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=l.length}},d(m){m&&A(e),S(d,m)}}}function le(a){let e,t,s,i,l,d,m,g,c,y,P,M,B,E,F,b,N,j,H,$,L;t=new te({});let p=a[0]&&K(),D=z(a[1]),h=[];for(let n=0;n<D.length;n+=1)h[n]=Q(J(a,D,n));let k=z(a[1]),f=[];for(let n=0;n<k.length;n+=1)f[n]=W(O(a,k,n));return $=new se({}),{c(){e=v("div"),U(t.$$.fragment),s=_(),p&&p.c(),i=_(),l=v("main"),d=v("div"),d.innerHTML='<div class="container svelte-1vnmshy"><div class="header-content svelte-1vnmshy"><span class="header-icon svelte-1vnmshy">🔒</span> <h1 class="svelte-1vnmshy">Política de Privacidad</h1> <p class="header-subtitle svelte-1vnmshy">Protegemos tus datos personales con los más altos estándares de seguridad</p></div></div>',m=_(),g=v("div"),c=v("div"),y=v("div"),P=v("nav"),M=v("h3"),M.textContent="📑 Contenido",B=_(),E=v("ul");for(let n=0;n<h.length;n+=1)h[n].c();F=_(),b=v("article");for(let n=0;n<f.length;n+=1)f[n].c();N=_(),j=v("div"),j.innerHTML='<h3 class="svelte-1vnmshy">¿Tienes preguntas sobre nuestra privacidad?</h3> <p class="svelte-1vnmshy">Estamos aquí para ayudarte. Contáctanos en cualquier momento.</p> <a href="/#contacto" class="btn btn-primary svelte-1vnmshy">Contactar Ahora</a>',H=_(),U($.$$.fragment),u(d,"class","page-header svelte-1vnmshy"),u(M,"class","svelte-1vnmshy"),u(E,"class","svelte-1vnmshy"),u(P,"class","toc svelte-1vnmshy"),u(j,"class","cta-section svelte-1vnmshy"),u(b,"class","legal-content svelte-1vnmshy"),u(y,"class","content-wrapper svelte-1vnmshy"),u(c,"class","container svelte-1vnmshy"),u(g,"class","page-body svelte-1vnmshy"),u(l,"class","main-content svelte-1vnmshy"),u(e,"class","legal-page svelte-1vnmshy")},m(n,C){w(n,e,C),R(t,e,null),r(e,s),p&&p.m(e,null),r(e,i),r(e,l),r(l,d),r(l,m),r(l,g),r(g,c),r(c,y),r(y,P),r(P,M),r(P,B),r(P,E);for(let o=0;o<h.length;o+=1)h[o]&&h[o].m(E,null);r(y,F),r(y,b);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(b,null);r(b,N),r(b,j),r(e,H),R($,e,null),L=!0},p(n,[C]){if(n[0]?p?C&1&&q(p,1):(p=K(),p.c(),q(p,1),p.m(e,i)):p&&(ne(),I(p,1,1,()=>{p=null}),oe()),C&2){D=z(n[1]);let o;for(o=0;o<D.length;o+=1){const T=J(n,D,o);h[o]?h[o].p(T,C):(h[o]=Q(T),h[o].c(),h[o].m(E,null))}for(;o<h.length;o+=1)h[o].d(1);h.length=D.length}if(C&2){k=z(n[1]);let o;for(o=0;o<k.length;o+=1){const T=O(n,k,o);f[o]?f[o].p(T,C):(f[o]=W(T),f[o].c(),f[o].m(b,N))}for(;o<f.length;o+=1)f[o].d(1);f.length=k.length}},i(n){L||(q(t.$$.fragment,n),q(p),q($.$$.fragment,n),L=!0)},o(n){I(t.$$.fragment,n),I(p),I($.$$.fragment,n),L=!1},d(n){n&&A(e),x(t),p&&p.d(),S(h,n),S(f,n),x($)}}}function de(a,e,t){let s=!1;return ae(()=>{t(0,s=!0)}),[s,[{title:"1. Introducción",content:`En Mynerz (en adelante, "la Empresa", "nosotros" o "nuestro"), nos comprometemos a proteger su privacidad y garantizar la seguridad de sus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.

      Esta política cumple con la Ley de Protección de Datos Personales de Perú (Ley N° 29733) y su reglamento.`},{title:"2. Responsable del Tratamiento de Datos",content:`El responsable del tratamiento de sus datos personales es:

      • Empresa: Mynerz
      • Ubicación: Perú
      • Email de contacto: contacto@mynerz.com`},{title:"3. Datos que Recopilamos",content:`Podemos recopilar los siguientes tipos de información personal:

      3.1 Información que usted nos proporciona directamente
      • Nombre completo
      • Dirección de correo electrónico
      • Número de teléfono
      • Nombre de la empresa
      • Cargo o posición
      • Mensajes y consultas que nos envía
      • Información de proyectos y requerimientos

      3.2 Información recopilada automáticamente
      • Dirección IP
      • Tipo de navegador y versión
      • Dispositivo utilizado
      • Páginas visitadas en nuestro sitio
      • Tiempo y duración de la visita
      • Datos de ubicación geográfica aproximada

      3.3 Cookies y tecnologías similares
      Utilizamos cookies para mejorar su experiencia. Para más información, consulte nuestra Política de Cookies.`},{title:"4. Finalidad del Tratamiento",content:`Utilizamos su información personal para las siguientes finalidades:

      • Responder a sus consultas y solicitudes de información
      • Proporcionar cotizaciones y propuestas de servicios
      • Gestionar la relación comercial con clientes
      • Enviar comunicaciones relacionadas con nuestros servicios (previo consentimiento)
      • Mejorar nuestro sitio web y servicios
      • Cumplir con obligaciones legales y regulatorias
      • Prevenir fraudes y garantizar la seguridad`},{title:"5. Base Legal para el Tratamiento",content:`Tratamos sus datos personales basándonos en:

      • Consentimiento: Cuando usted nos ha dado su consentimiento explícito
      • Ejecución de contrato: Cuando es necesario para prestar nuestros servicios
      • Interés legítimo: Para mejorar nuestros servicios y comunicación
      • Obligación legal: Cuando debemos cumplir con requisitos legales`},{title:"6. Compartir Información con Terceros",content:`No vendemos ni alquilamos su información personal a terceros. Solo podemos compartir su información en las siguientes circunstancias:

      • Proveedores de servicios: Con empresas que nos ayudan a operar (hosting, email, etc.) bajo estrictos acuerdos de confidencialidad
      • Obligación legal: Cuando lo requiera la ley o autoridades competentes
      • Consentimiento: Cuando usted ha dado su consentimiento explícito
      • Protección de derechos: Para proteger nuestros derechos o propiedad`},{title:"7. Conservación de Datos",content:`Conservamos su información personal únicamente durante el tiempo necesario para cumplir con las finalidades descritas en esta política:

      • Datos de contacto: mientras mantengamos relación comercial o hasta que solicite su eliminación
      • Datos de navegación: hasta 2 años desde la última interacción
      • Datos de proyectos: durante la vigencia del contrato y 5 años después por obligaciones legales`},{title:"8. Sus Derechos",content:`Como titular de datos personales, usted tiene los siguientes derechos:

      • Derecho de acceso: A conocer qué datos tenemos sobre usted
      • Derecho de rectificación: A corregir datos inexactos o incompletos
      • Derecho de cancelación: A solicitar la eliminación de sus datos
      • Derecho de oposición: A oponerse al tratamiento de sus datos
      • Derecho de portabilidad: A recibir sus datos en formato estructurado
      • Derecho de limitación: A solicitar la limitación del tratamiento
      • Derecho de revocación del consentimiento: A retirar su consentimiento en cualquier momento

      Para ejercer estos derechos, contáctenos a: contacto@mynerz.com`},{title:"9. Seguridad de los Datos",content:`Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal:

      • Encriptación de datos en tránsito y en reposo
      • Control de acceso y autenticación
      • Backups regulares
      • Actualizaciones de seguridad periódicas
      • Capacitación del personal en protección de datos`},{title:"10. Contacto",content:`Si tiene preguntas, preocupaciones o solicitudes relacionadas con esta Política de Privacidad, puede contactarnos:

      • Email: contacto@mynerz.com
      • LinkedIn: Mynerz
      • Ubicación: Perú

      Respondemos a todas las solicitudes dentro de los 15 días hábiles siguientes.`}]]}class me extends Y{constructor(e){super(),Z(this,e,de,le,ee,{})}}new me({target:document.getElementById("app")});
