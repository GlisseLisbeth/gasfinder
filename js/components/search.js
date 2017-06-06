'use strict';

const Search = (update) =>{
  const parent = $('<div class="panel-search"></div>')
  const searchInput = $('<div class="search"></div>');
  const containerSearchInput = $('<div class="container"></div>');
  const rowSearchInput = $('<div class="row"></div>');
  const colSearchInput = $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');
  const inputGroup = $('<div class="input-group"></div>');
  const inputGroupBtn = $('<span class="input-group-btn"></span>');
  const  button= $('<button class="btn btn-default border-none" type="button"><span class="fa fa-search" aria-hidden="true"></span></button>');
  const inputSearch = $('<input type="text" class="form-control  border-none box-shadow" placeholder="Ingresa tu distrito a buscar">');
  
  inputGroupBtn.append(button);
  inputGroup.append(inputGroupBtn);
  inputGroup.append(inputSearch);
  colSearchInput.append(inputGroup);
  rowSearchInput.append(colSearchInput);
  containerSearchInput.append(rowSearchInput);
  searchInput.append(containerSearchInput);
  
  const searchContent = $('<div class="content-search"></div>');
  state.stations.forEach((station) => {
    searchContent.append(stationItem(station));  
  });
  
  inputSearch.on('keyup', (e) =>{
    e.preventDefault();
    var filterStations = filterByDistrict(state.stations,inputSearch.val());
    reRender(searchContent, filterStations);
  });
  parent.append(searchInput);
  parent.append(searchContent);
  return parent;
}

const reRender = (content, filterStations) =>{
  content.empty();
  filterStations.forEach((filterStation) =>{
    content.append(stationItem(filterStation, _ => {reRender(content, filterStations);}));
  });
}
const stationItem = (data) =>{
  const parentStationItem = $('<div class="result-search"></div>');
  const containerStationItem = $('<div class="container"></div>');
  const rowStationItem = $('<div class="row"></div>');
  const colStationItem = $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');
  const left = $('<div class="col-lg-8 ol-md-8 col-sm-8 col-xs-8"></div>');
  const name = $('<h3 class="space-result"><small class="color-black">'+data.name+'</small></h3>');
  const address = $('<span class="color-gray space-result">'+data.address+'</span>');
  const district = $('<br><span class="color-gray space-result">'+data.district+'</span>');
  const right = $('<div class="col-lg-4 ol-md-4 col-sm-4 col-xs-4 text-right padding-top-search"></div>');
  const map = $('<span class="fa fa-map color-gray pull-rigth" aria-hidden="true"></span>');
  
  right.append(map);
  left.append(name);
  left.append(address);
  left.append(district);
  colStationItem.append(left);
  colStationItem.append(right);
  rowStationItem.append(colStationItem);
  containerStationItem.append(rowStationItem);
  parentStationItem.append(containerStationItem);
  
  return parentStationItem;
  
}