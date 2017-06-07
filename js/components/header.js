'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $('<span class="margin-left-20">Gas Finder</span>');
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);

  return header;
}
