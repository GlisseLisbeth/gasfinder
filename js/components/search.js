const Search = () =>{
  const parent = $('<div class="search"></div>');
  //container search
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col-lg-12 col-md-12 col -sm-12 col-xs-12"></div>');
  const inputGroup = $('<div class="input-group"></div>');
  const inputGroupBtn = $('<span class="input-group-btn"></span>');
  const  button= $('<button class="btn btn-default border-none" type="button"><span class="fa fa-search" aria-hidden="true"></span></button>');
  const inputSearch = $('<input type="text" class="form-control  border-none box-shadow" placeholder="Ingresa tu distrito a buscar">');
  
  //container result searh
  inputGroupBtn.append(button);
  inputGroup.append(inputGroupBtn);
  inputGroup.append(inputSearch);
  col.append(inputGroup);
  row.append(col);
  container.append(row);
  parent.append(container);
  
  return parent;
}