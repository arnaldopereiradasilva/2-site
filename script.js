 // Dados de exemplo com 5 fotos por profissao (imagens locais)
    const data = {
      garcons: [
        {img:'imagem/arnaldo.jpg', name:'Arnaldo'},
        {img:'imagens/garcom2.jpg', name:'Pedro'},
        {img:'imagens/garcom3.jpg', name:'Lucas'},
        {img:'imagens/garcom4.jpg', name:'Rafael'},
        {img:'imagens/garcom5.jpg', name:'Bruno'}
      ],
      copeiras: [
        {img:'imagens/copeira1.jpg', name:'Mariana'},
        {img:'imagens/copeira2.jpg', name:'Ana'},
        {img:'imagens/copeira3.jpg', name:'Fernanda'},
        {img:'imagens/copeira4.jpg', name:'Rita'},
        {img:'imagens/copeira5.jpg', name:'Juliana'}
      ],
      fritadeiras: [
        {img:'imagens/fritadeira1.jpg', name:'Carla'},
        {img:'imagens/fritadeira2.jpg', name:'Elisa'},
        {img:'imagens/fritadeira3.jpg', name:'Patrícia'},
        {img:'imagens/fritadeira4.jpg', name:'Larissa'},
        {img:'imagens/fritadeira5.jpg', name:'Simone'}
      ],
      monitores: [
        {img:'imagens/monitor1.jpg', name:'Daniel'},
        {img:'imagens/monitor2.jpg', name:'Patrícia'},
        {img:'imagens/monitor3.jpg', name:'Tiago'},
        {img:'imagens/monitor4.jpg', name:'Sara'},
        {img:'imagens/monitor5.jpg', name:'Bruno'}
      ],
      churrasqueiros: [
        {img:'imagens/churrasqueiro1.jpg', name:'Renato'},
        {img:'imagens/churrasqueiro2.jpg', name:'Cláudio'},
        {img:'imagens/churrasqueiro3.jpg', name:'Eduardo'},
        {img:'imagens/churrasqueiro4.jpg', name:'Paulo'},
        {img:'imagens/churrasqueiro5.jpg', name:'Roberto'}
      ],
      recepcionistas: [
        {img:'imagens/recepcionista1.jpg', name:'Aline'},
        {img:'imagens/recepcionista2.jpg', name:'Beatriz'},
        {img:'imagens/recepcionista3.jpg', name:'Natália'},
        {img:'imagens/recepcionista4.jpg', name:'Giselle'},
        {img:'imagens/recepcionista5.jpg', name:'Clara'}
      ]
    };

    const roleLinks = document.querySelectorAll('.role-link');
    const carouselArea = document.getElementById('carousel-area');
    const carousel = document.getElementById('carousel');
    const profTitle = document.getElementById('prof-title');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function openRole(role){
      const items = data[role];
      if(!items) return;
      carousel.innerHTML='';
      // duplicate items to allow smooth infinite feel
      const combined = items.concat(items);
      combined.forEach(it=>{
        const div = document.createElement('div');
        div.className='slide';
        div.innerHTML = `<img src="${it.img}" alt="${it.name}"><p>${it.name}</p>`;
        carousel.appendChild(div);
      });
      carouselArea.style.display='block';
      profTitle.textContent = role.charAt(0).toUpperCase() + role.slice(1);
      carousel.scrollLeft = 0;
      currentIndex = 0;
    }

    roleLinks.forEach(link=>{
      link.addEventListener('click', ()=>{
        const role = link.dataset.target;
        openRole(role);
      })
    });

    // Arrow navigation
    nextBtn.addEventListener('click', ()=>{
      const w = carousel.querySelector('.slide').clientWidth + 12;
      carousel.scrollBy({left: w, behavior:'smooth'});
    });
    prevBtn.addEventListener('click', ()=>{
      const w = carousel.querySelector('.slide').clientWidth + 12;
      carousel.scrollBy({left: -w, behavior:'smooth'});
    });

    // Stations click
    const stationBtns = document.querySelectorAll('.station-btn');
    const stationDisplay = document.getElementById('stationDisplay');
    const stationImg = document.getElementById('stationImg');
    const stationTitle = document.getElementById('stationTitle');

    stationBtns.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const img = btn.dataset.img;
        const title = btn.dataset.title;
        stationImg.src = img;
        stationImg.alt = title;
        stationTitle.textContent = title;
        stationDisplay.style.display='block';
        stationDisplay.scrollIntoView({behavior:'smooth', block:'center'});
      })
    });

    // Optional: keyboard arrows for carousel
    document.addEventListener('keydown', (e)=>{
      if(carouselArea.style.display==='block'){
        if(e.key === 'ArrowRight') nextBtn.click();
        if(e.key === 'ArrowLeft') prevBtn.click();
      }
    });
