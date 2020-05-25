import React from 'react';
import PortfolioItem from '../portfolio-item/portfolio-item';


const Projects = [
  {
    id: `1`,
    title: `Want To Watch`,
    imageUrl: `images/portfolio/1.png`,
    hostUrl: `https://wtw-react-redux.web.app`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit.`,
    technologies: `TypeScript/React/Redux`,
  },
  {
    id: `2`,
    title: `Medium Clone`,
    imageUrl: `images/portfolio/2.png`,
    hostUrl: `https://medium-clone-react-hooks.web.app`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit.`,
    technologies: `React/Hooks/Context API`,
  },
  {
    id: `3`,
    title: `Star Wars DB`,
    imageUrl: `images/portfolio/3.png`,
    hostUrl: `hhttps://starwar-db-react-context-api.web.app`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                  nec sagittis sem nibh id elit.`,
    technologies: `React/Context API`,
  },
  {
    id: `4`,
    title: `Bookstore`,
    imageUrl: `images/portfolio/4.png`,
    hostUrl: `https://bookstore-react-redux.web.app`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit.`,
    technologies: `React/Redux`,
  },
  {
    id: `5`,
    title: `Cinemaddict`,
    imageUrl: `images/portfolio/5.png`,
    hostUrl: `https://sander2411.github.io/Cinemaddict-Native-JS-HMVP/`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit.`,
    technologies: `Native JS/OOP/MVP`,
  },
  {
    id: `6`,
    title: `Task Manager`,
    imageUrl: `images/portfolio/6.png`,
    hostUrl: `https://taskmanager-oop.web.app`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit.`,
    technologies: `Native JS/OOP/MVP`,
  },
  {
    id: `7`,
    title: `To Do App`,
    imageUrl: `images/portfolio/7.png`,
    hostUrl: `https://todo-app-react-sandbox.web.app`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, 
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit.`,
    technologies: `React`,
  },
  {
    id: `8`,
    title: `Mishka: Handmade Toy Store`,
    imageUrl: `images/portfolio/8.png`,
    hostUrl: `https://sander2411.github.io/saNder2411-demo-mishka/`,
    description: `Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, 
                  nisi elit consequat ipsum, nec sagittis sem nibh id elit.`,
    technologies: `HTML5/CSS/Less/Gulp`,
  },
];

const PortfolioList = () => {
  const items = Projects
    .map((item) => <PortfolioItem {...item} />);

  return (
    <ul id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
      {items}
    </ul>
  );
};

export default PortfolioList;
