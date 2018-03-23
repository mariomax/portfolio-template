import html from './nav.html';
import './nav.css';
import Template from '../Template';

const template = new Template(html);

export default class Nav {

  render() {
    const dom = template.clone();

    return dom;
  }
}