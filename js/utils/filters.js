'use strict';

const filterByDistrict = (stations,query) => {
  const filter=[];
  stations.forEach((station) =>{
 (station.district.toUpperCase().indexOf(query.toUpperCase())>-1)?filter.push(station):null;
  });
 return filter;
}
