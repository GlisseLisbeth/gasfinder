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
  
  parent.append(searchInput);
  parent.append(searchContent);
  return parent;
}

const stationItem = (data) =>{
  const parentSearchResult = $('<div class="result-search"></div>');
  const containerSearchResult = $('<div class="container"></div>');
  const rowSearchResult = $('<div class="row"></div>');
  const colSearchResult = $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');
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
  colSearchResult.append(left);
  colSearchResult.append(right);
  rowSearchResult.append(colSearchResult);
  containerSearchResult.append(rowSearchResult);
  parentSearchResult.append(containerSearchResult);
  

  return parentSearchResult;
  
}