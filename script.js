document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const infoCard = document.getElementById('infoCard');
    const countryName = document.getElementById('countryName');
    const countryImg = document.getElementById('countryImg');
    const countryFact = document.getElementById('countryFact');
    const closeCard = document.getElementById('closeCard');
  
    const olkeler = {
      russia: {
        name: "Russia",
        img: "https://news.exeter.ac.uk/wp-content/uploads/2023/08/Untitled39.jpg",
        fact: "Red Square, the Kremlin, Lake Baikal, and the endless taiga."
      },
      france: {
        name: "France",
        img: "https://www.frenchclass.in/wp-content/uploads/2024/01/cities-in-france-paris-laforet.webp",
        fact: "The Eiffel Tower, the Louvre, and croissants with coffee!"
      },
      japan: {
        name: "Japan",
        img: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
        fact: "Mount Fuji, blooming sakura, and sushi."
      },
      brazil: {
        name: "Brazil",
        img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt84e6f613930bd904/63c9c76e75a0df5fb06eec98/Intrepid_Travel-brazil_rio-de-janeiro_botafogo-bay-aerial_ss-435627745_2018.jpg?branch=prd",
        fact: "The Rio Carnival, football, and the Amazon rainforest."
      },
      egypt: {
        name: "Egypt",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/640px-Kheops-Pyramid.jpg",
        fact: "The pyramids, the Sphinx, and the ancient secrets of the pharaohs."
      },
      germany: {
        name: "Germany",
        img: "https://www.insightvacations.com/media/pfwapf3l/best-germany-guided-tour-14.jpg?crop=0%2C0.0666666666666667%2C0%2C0.18333333333333332&cropmode=percentage&format=webp&mode=crop&width=1200&height=600&quality=80",
        fact: "Castles, Oktoberfest, and the Black Forest."
      },
      azerbaijan: {
        name: "Azerbaijan",
        img: "https://assets.micontenthub.com/traveloffers/travel-tips/baku_OIPJAbO-S.jpg",
        fact: "The Flame Towers, Caspian Sea, and ancient city of Baku."
      },
      turkiye: {
        name: "Türkiye",
        img: "https://www.fluentin3months.com/wp-content/uploads/2021/09/learn-turkish.jpg",
        fact: "Hagia Sophia, Turkish baths, and delicious kebabs."
      },
      kazakhstan: {
        name: "Kazakhstan",
        img: "https://aze.media/wp-content/uploads/2024/05/060936624804-web-tete.jpg",
        fact: "Endless steppes, the city of Astana, and traditional yurts."
      },
      usa: {
        name: "USA",
        img: "https://www.axisbank.com/images/default-source/progress-with-us_new/cities-in-america.jpg",
        fact: "New York, Grand Canyon, and Hollywood."
      },
      italy: {
        name: "Italy",
        img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/03/18192544/venice.jpeg",
        fact: "Colosseum, canals of Venice, pizza and pasta!"
      },
      georgia: {
        name: "Georgia",
        img: "https://cdn.bunniktours.com.au/public/posts/images/Europe/Tbilisi%20-%201234016323-feature.jpg",
        fact: "Mountains of Kazbegi, ancient Tbilisi, and delicious khachapuri."
      },
      iceland: {
        name: "Iceland",
        img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/02/12190030/Kirkjufell.jpg",
        fact: "Northern lights, geysers, volcanoes, and glaciers."
      },
      greece: {
        name: "Greece",
        img: "https://a.storyblok.com/f/51678/1920x1280/da83ebc910/santorini-greek-islands.jpg/m/1536x864",
        fact: "Ancient ruins, Santorini sunsets, and Mediterranean cuisine."
      },
      maldives: {
        name: "Maldives",
        img: "https://luxuryescapes.com/inspiration/wp-content/uploads/2024/07/maldives.jpg",
        fact: "Crystal clear waters, coral reefs, and luxury resorts."
      },
      norway: {
        name: "Norway",
        img: "https://www.earthtrekkers.com/wp-content/uploads/2019/12/Norway-for-Facebook.jpg.optimal.jpg",
        fact: "Fjords, northern lights, and Viking history."
      },
      uae: {
        name: "United Arab Emirates",
        img: "https://www.uae-embassy.org/sites/default/files/styles/basic_scaled/public/2021-10/Development%20BUrj.jpeg?itok=YfDZqGvg",
        fact: "Burj Khalifa, desert safaris, luxurious shopping and dubai chocolate"
      },
      mexico: {
        name: "Mexico",
        img: "https://hotelhuatulcomaxico.com/wp-content/uploads/2020/06/sta-cruz-e1593481432282.jpg",
        fact: "Mayan pyramids, tacos, and beautiful beaches of Cancun."
      },
      argentina: {
        name: "Argentina",
        img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/64000/64898-Argentina.jpg",
        fact: "Tango, Patagonia, Messi and Iguazu Falls."
      },
      portugal: {
        name: "Portugal",
        img: "https://cdn.jwplayer.com/v2/media/Q8NccPCP/poster.jpg?width=1280",
        fact: "Ronaldo, Lisbon streets, azulejos, and delicious pasteis de nata."
      },
      canada: {
        name: "Canada",
        img: "https://www.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2F2025-04%2Fresized%2520AB-i16-023510.jpg&w=1920&q=75",
        fact: "Niagara Falls, maple syrup, and vast wilderness."
      },
      australia: {
        name: "Australia",
        img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZDshdZpXIHI/v0/-1x-1.webp",
        fact: "Sydney Opera House, Great Barrier Reef, and kangaroos."
      },
      croatia: {
        name: "Croatia",
        img: "https://hips.hearstapps.com/hmg-prod/images/korcula-town-croatia-royalty-free-image-1736852921.pjpeg",
        fact: "Game of Thrones locations, Adriatic coast, and old towns."
      },
      china: {
        name: "China",
        img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/china-gettyimages-565786575?_a=BAVAZGDX0",
        fact: "Great Wall, pandas, and ancient dynasties."
      },
    };
  
    document.querySelectorAll('.country-box').forEach(box => {
      box.addEventListener('click', () => {
        const id = box.id;
        const data = olkeler[id];
        if (data) {
          countryName.textContent = data.name;
          countryImg.src = data.img;
          countryFact.textContent = data.fact;
          infoCard.classList.remove('hidden');
        }
      });
    });
  
    closeCard.addEventListener('click', () => {
      infoCard.classList.add('hidden');
    });
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      body.classList.toggle('light');
      themeToggle.textContent = body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
    });
  });