'use strict';

// write code here

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const surrender = input.name[0].toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = surrender;

  input.placeholder = surrender;
  input.parentNode.append(label);
}
