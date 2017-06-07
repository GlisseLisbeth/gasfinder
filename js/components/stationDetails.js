'use strict';
const StationDetails = (update) =>{
  const parent =$('<div class="station-detail"></div>');
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');
  const contentMap = $('<div id="map" class="legend figure"></div>');
  const name = $('<h3 class="space-result">'+state.selectedStation.name+'</h3>');
  const hr = $('<hr class="space-result">');
  const address = $('<span>'+state.selectedStation.address+'</span>');
  const productsDiv = $('<div class="products padding-top-search"></div>');
  const button = $('<button class="btn btn-default btn-station-left"><i class="fa fa-angle-left" aria-hidden="true"></i></button>');
  
  col.append(button);
  col.append(contentMap);
  col.append(name);
  col.append(hr);
  col.append(address);
  col.append(productsDiv);
  row.append(col);
  container.append(row);
  parent.append(container);
  
  state.selectedStation.products.forEach((product)=> {
    const productStation = $('<button class="products-station margin-right-10">'+ product +'</button>');
    productsDiv.append(productStation);
  })
  
  button.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })
  
  $(() => {
    const map = new GMaps({
      div: '#map',        
      lat: state.selectedStation.lat,
      lng: state.selectedStation.long,
    });
    const marker = map.addMarker({
      lat: state.selectedStation.lat,
      lng: state.selectedStation.long,
      title: state.selectedStation.name
    });  
  });
  
  return parent;
}