import styles from './index.css';

const root = document.getElementById('root');
const ul = document.createElement('ul');

root.appendChild(ul);

['jerry', 'fido', 'spot', 'punch']
  .forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
