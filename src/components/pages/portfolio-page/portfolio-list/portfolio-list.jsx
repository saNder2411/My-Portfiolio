import React from 'react';
import PortfolioItem from '../portfolio-item/portfolio-item';


const Projects = [
  {
    id: `1`,
    title: `Want To Watch`,
    imageUrl: `images/portfolio/1.png`,
    hostUrl: `https://wtw-react-redux.web.app`,
    technologies: `TypeScript/React/Redux`,
    description: `"What to Watch" is a new generation online cinema.
                  Watch the latest new films absolutely free and in the best quality.
                  Leave feedback, rate and choose only the best from the world of big cinema.`,
    descriptionRu: `"Что посмотреть" — онлайн кинотеатр нового поколения.
                    Смотрите новинки абсолютно бесплатно и в лучшем качестве.
                    Оставляйте отзывы, ставьте оценки и выбирайте только лучшее из мира большого кино.`,
  },
  {
    id: `2`,
    title: `Medium Clone`,
    imageUrl: `images/portfolio/2.png`,
    hostUrl: `https://medium-clone-react-hooks.web.app`,
    technologies: `React/Hooks/Context API`,
    description: `"Medium Clone" is  not a large the social network,
                  with all its components, which is written in React/Hooks and Context API`,
    descriptionRu: `"Medium Clone" - это не большая копия социальной сети,
                      со всеми ее состовляющеми, которая написана на React/Hooks и Context API`,
  },
  {
    id: `3`,
    title: `Star Wars DB`,
    imageUrl: `images/portfolio/3.png`,
    hostUrl: `hhttps://starwar-db-react-context-api.web.app`,
    technologies: `React/Context API`,
    description: `"Star Wars DB" is an illustrated database about of characters,
                  planets and starships from the Star Wars saga.`,
    descriptionRu: `"Star Wars DB" - это иллюстрированная база данных про
                    персонажи, планеты и звездные корабли из саги "Звездные Войны".`,
  },
  {
    id: `4`,
    title: `Bookstore`,
    imageUrl: `images/portfolio/4.png`,
    hostUrl: `https://bookstore-react-redux.web.app`,
    technologies: `React/Redux`,
    description: `"Bookstore" is not a large online store of programming books, written in React and Redux.`,
    descriptionRu: `"Bookstore" - это не большой онлайн магазин книг по программированию, который написан на React и Redux`,
  },
  {
    id: `5`,
    title: `Cinemaddict`,
    imageUrl: `images/portfolio/5.png`,
    hostUrl: `https://sander2411.github.io/Cinemaddict-Native-JS-HMVP/`,
    technologies: `Native JS/OOP/MVP`,
    description: `"Cinemaddict" is a service for fans of big movies. Detailed information about the latest hot movies,
                  the ability to select and create your own list of films to watch, discussion of movies.`,
    descriptionRu: `"Киноман" — сервис для фанатов большого кино. Подробная информация о горячих новинках кино,
                    возможность выбрать и сформировать собственный список фильмов к просмотру, обсуждение кинофильмов.`,
  },
  {
    id: `6`,
    title: `Task Manager`,
    imageUrl: `images/portfolio/6.png`,
    hostUrl: `https://taskmanager-oop.web.app`,
    technologies: `Native JS/OOP/MVP`,
    description: `"Task Manager" helps the user organize and control the execution of tasks. 
                  The minimalistic interface of the application will not allow the user to be distracted.`,
    descriptionRu: `«Менеджер задач» помогает пользователю организовывать и контролировать выполнение задач.
                    Минималистичный интерфейс приложения не позволит пользователю отвлекаться.`,
  },
  {
    id: `7`,
    title: `Todo List App`,
    imageUrl: `images/portfolio/7.png`,
    hostUrl: `https://todo-app-react-sandbox.web.app`,
    technologies: `React`,
    description: `"Todo List" is a simple application that allows the user to keep a record of planned affairs.`,
    descriptionRu: `"Todo List" - это простое приложение, которое позволяет пользователю вести учет заплонированых дел.`,
  },
  {
    id: `8`,
    title: `Mishka: Handmade Toy Store`,
    imageUrl: `images/portfolio/8.png`,
    hostUrl: `https://sander2411.github.io/saNder2411-demo-mishka/`,
    technologies: `HTML5/CSS/Less/Gulp`,
    description: `"Mishka" is an online store of cute gizmos for a handmade house.
                  A lot of decorative elements, a complex grid, not a standard component of the interface.`,
    descriptionRu: `"Мишка" - это интернет магазин милых вещиц для дома ручной работы.
                    Множество декаративных элементов, сложная сетка, не сандартный компонент интерфейса.`,
  },
];

const PortfolioList = () => {
  const items = Projects
    .map((item) => <PortfolioItem {...item} key={item.id} />);

  return (
    <ul id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
      {items}
    </ul>
  );
};

export default PortfolioList;
