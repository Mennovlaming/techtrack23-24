document.addEventListener("DOMContentLoaded", function () {
  
  const jsonData = [
    { "edition": "ADE 2016", "visitors": 375000, "artists": 1800, "locations": 120, "outside": 20, "events": 450, "arests": 250 },
    { "edition": "ADE 2017", "visitors": 395000, "artists": 2200, "locations": 160, "outside": 30, "events": 500, "arests": 120 },
    { "edition": "ADE 2018", "visitors": 400000, "artists": 2500, "locations": 200, "outside": 40, "events": 550, "arests": 74 },
    { "edition": "ADE 2019", "visitors": 400000, "artists": 2400, "locations": 200, "outside": 40, "events": 500, "arests": 80 },
    { "edition": "ADE 2020 online", "visitors": 100000, "artists": 0, "locations": 0, "outside": 0, "events": 0, "arests": 0 },
    { "edition": "ADE 2021 online", "visitors": 100000, "artists": 0, "locations": 0, "outside": 0, "events": 0, "arests": 0 },
    { "edition": "ADE 2022", "visitors": 450000, "artists": 2500, "locations": 140, "outside": 20, "events": 450, "arests": 100 },
    { "edition": "ADE 2023", "visitors": 500000, "artists": 2900, "locations": 200, "outside": 40, "events": 1000, "arests": 200 }
  ];

 
  //werk de HTML bij voor elke sectie
  jsonData.forEach((editionData, index) => {
    const sectionId = `section-${index + 1}`;
    const artistsId = `artists-${index + 1}`;
    const locationsId = `locations-${index + 1}`;
    const eventsId = `events-${index + 1}`;
    const arestsId = `arests-${index + 1}`;

    //werk de editienaam bij
    document.getElementById(sectionId).querySelector('h2').textContent = editionData.edition;

    //werk artiesten bij (indien beschikbaar)
    if (editionData.artists) {
      updateWithCountUp(artistsId, editionData.artists);
    }

    //werk locaties bij (indien beschikbaar)
    if (editionData.locations) {
      updateWithCountUp(locationsId, editionData.locations);
    }

    //werk evenementen bij (indien beschikbaar)
    if (editionData.events) {
      updateWithCountUp(eventsId, editionData.events);
    }

    //werk arests bij (indien beschikbaar)
    if (editionData.arests) {
      updateWithCountUp(arestsId, editionData.arests);
    }
  });
});

function updateWithCountUp(elementId, value) {
  const element = document.getElementById(elementId);
  const initialValue = 0;
  const duration = 2000; //milliseconden
  const frameDuration = 1000 / 60; //60 frames per seconde
  const totalFrames = Math.ceil(duration / frameDuration);
  const increment = value / totalFrames;

  let currentFrame = 0;

  //telt op met currentFrame++, kijkt daarna of het minder is dan het moet zijn.
  function animate() {
    currentFrame++;
    const currentValue = initialValue + increment * currentFrame;
    element.textContent = Math.round(currentValue);

    if (currentFrame < totalFrames) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}
