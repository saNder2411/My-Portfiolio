const Data = {

  EN: {

    navMenu: {
      home: `Home`,
      about: `About`,
      resume: `Resume`,
      works: `Works`,
      lang: `EN`,
    },

    homePage: {
      title: `Hi, I'm Alexander Olshansky.`,
      aboutMe: `
        I'm a beginner React UI developer with great passion and love for web application programming.
        Here you can find my work and resume.
      `,
    },

    aboutMePage: {
      title: `About Me`,
      contactTitle: `Contact Details`,
      resumePath: `resume-alex-olshansky-en.pdf`,
      description: `
        Open, benevolent and purposeful. I have a high passion and interest in technology.
        Constantly improving my professional skills. I am very responsible for work.
        Independently find and study the necessary information on the project.
        I'm good at someone else's code. Fond of creating electronic music, love sports and history.
      `,
      contactDetails: [
        `Alexander Olshansky`,
        `Phone: +380669848090`,
        `Email: sander2411@ukr.net`,
        `Skype: live:27e73c79fb62325b`,
        `Telegram: https://t.me/Alexandr_Olshanskiy`,
        `GitHub: https://github.com/saNder2411`,
      ],
    },

    resumePage: {
      education: {
        title: `Education`,
        university: `Professional courses HTML Academy`,
        department: `React-developer`,
        yearEnding: `May 2020`,
        description: [
          `— Preparatory course, april 2019`,
          `— HTML & CSS, level I, july 2019`,
          `— HTML & CSS, level II, september 2019`,
          `— JavaScript, level I, november 2019`,
          `— JavaScript, level II, january 2020`,
          `— JavaScript, level III, may 2020`],
        labelLinkCertificates: `Certificates of Education`,
      },
      personalAchievements: {
        title: `Achievements`,
        titleAchievements: `Personal Achievements`,
        description: `
          Successfully completed a 12-month professional course in HTMLAcademy "React-developer".
          During the training defended the entire all personal projects by 100 points.
          Developing on TypeScript React/Redux, React/Hooks, in small applications I use PropTypes.
          Testing with Jest and Enzym. Optimized application performance using the built-in browser profiler,
          for development and debugging I work with React dev Tools, Redux dev Tools.
          I am very familiar with the work on immutable objects: React (component state),
          Redux (store state: adding and removing elements in an array, updating element properties, etc.).
          Familiar with Store Enhancers, actively using Middleware. For dispatch async call I use Thunk Middleware.
          Interaction with REST API: XHR, Fetch method, library for creating Axios HTTP client, Promise, Async/Await.
          Storage: Local Storage, Service Worker.
          I implement DAL (Data access Layer) with a class based on the Axios HTTP client or the Fetch method,
          with private properties and methods for configuring the client and setting default parameters,
          and public methods for accessing the service API.
          Access the DAL class implements through the context.
          I create a HOC (withAPIService) that takes a function in the parameters for mapping
          the instance method and sets the required method in props to the wrapped component
          to request data from the service.
          Then this is the dispatch method in the component life cycle method (HOC withData),
          after processing the data in reducer,
          the HOC withData passes the request state (loading, data, error) to the props UI component.
          When I use hooks, in a nutshell, I do almost the same, only on custom hooks.
          A useService hook interacts with an instance of the DAL class and calls the useRequest hook,
          which passes the necessary method for the request. useRequest returns an array
          with a request status object and a function to call this request ([{loading, data, error}, doRequest]).
          doRequest is called either when mounting / updating the UI component in the useEffect hook or in an event handler.
          Developed projects on native JS with an object-oriented approach,
          with an architecture based on MVC and MVP design patterns (with a hierarchy of presenters and models HMVC(P)).
          OOP: Adapter, Singleton, Observer, Controller, Factory Method, Abstract Factory, Decorator.
          In controllers and presenters, I implemented data binding, besides callback, use Proxy and Reflect objects.
          I consider one of the main principles of SOLID -  Single Responsibility Principle.
          Therefore, I always divide the application architecture into levels: UI(React)<=>BLL(Redux)<=>DAL(API Service).
          The user interface components should not contain any logic and should be responsible only for rendering,
          these are always simple functions that are easy to test.
          Implemented: custom form validation, forms with controlled and uncontrolled components,
          Drag'n'Drop with mouse events on native JS (sliders, drag and drop handles),
          user activity chart with chart.js library.
          Worked with the HTMLVideoElement and HTMLAudioElement interfaces in projects with video and audio data.
          I do component styling with «styled-components» and «css-modules».
          I use auxiliary libraries: «reselect», «query-string», «classnames», «nanoid», «he», «flatpickr.js»,
          «chart.js», «moment.js».
          In addition to using the create-react-app,
          created his own Webpack and Babel configuration for building the application.
        `,
      },
    },

    portfolioPage: {
      title: `Check Out Some of My Works.`,
      projects: [
        {
          id: `1`,
          title: `Want To Watch`,
          imageUrl: `images/portfolio/1.png`,
          hostUrl: `https://wtw-react-redux.web.app`,
          technologies: `TypeScript/React/Redux`,
          description: `
            "What to Watch" is a new generation online cinema.
            Watch the latest new films absolutely free and in the best quality.
            Leave feedback, rate and choose only the best from the world of big cinema.
          `,
        },
        {
          id: `2`,
          title: `Medium Clone`,
          imageUrl: `images/portfolio/2.png`,
          hostUrl: `https://medium-clone-react-hooks.web.app`,
          technologies: `React/Hooks/Context API`,
          description: `
            "Medium Clone" is  not a large the social network,
            with all its components, which is written in React/Hooks and Context API
          `,
        },
        {
          id: `3`,
          title: `Star Wars DB`,
          imageUrl: `images/portfolio/3.png`,
          hostUrl: `https://starwar-db-react-context-api.web.app`,
          technologies: `React/Context API`,
          description: `
            "Star Wars DB" is an illustrated database about of characters,
            planets and starships from the Star Wars saga.
          `,
        },
        {
          id: `4`,
          title: `Bookstore`,
          imageUrl: `images/portfolio/4.png`,
          hostUrl: `https://bookstore-react-redux.web.app`,
          technologies: `React/Redux`,
        },
        {
          id: `5`,
          title: `Cinemaddict`,
          imageUrl: `images/portfolio/5.png`,
          hostUrl: `https://sander2411.github.io/Cinemaddict-Native-JS-HMVP/`,
          technologies: `Native JS/OOP/MVP`,
          description: `
            "Cinemaddict" is a service for fans of big movies. Detailed information about the latest hot movies,
            the ability to select and create your own list of films to watch, discussion of movies.
          `,
        },
        {
          id: `6`,
          title: `Task Manager`,
          imageUrl: `images/portfolio/6.png`,
          hostUrl: `https://taskmanager-oop.web.app`,
          technologies: `Native JS/OOP/MVP`,
          description: `
            "Task Manager" helps the user organize and control the execution of tasks. 
            The minimal interface of the application will not allow the user to be distracted.
          `,
        },
        {
          id: `7`,
          title: `Todo List App`,
          imageUrl: `images/portfolio/7.png`,
          hostUrl: `https://todo-app-react-sandbox.web.app`,
          technologies: `React`,
          description: `"Todo List" is a simple application that allows the user to keep a record of planned affairs.`,
        },
        {
          id: `8`,
          title: `Mishka: Handmade Toy Store`,
          imageUrl: `images/portfolio/8.png`,
          hostUrl: `https://sander2411.github.io/saNder2411-demo-mishka/`,
          technologies: `HTML5/CSS/Less/Gulp`,
          description: `
           "Mishka" is an online store of cute gizmos for a handmade house.
            A lot of decorative elements, a complex grid, not a standard component of the interface.
          `,
        },
      ],
    },
  },

  RU: {

    navMenu: {
      home: `Главная`,
      about: `Oбо Мне`,
      resume: `Резюме`,
      works: `Работы`,
      lang: `RU`,
    },

    homePage: {
      title: `Привет, Я Александр Ольшанский.`,
      aboutMe: `
        Я начинающий React разработчик UI интерфейсов,
        с большой увлеченностью и любовью к программированию веб приложений.
        Здесь вы можете ознакомиться с моими работами и резюме.
      `,
    },

    aboutMePage: {
      title: `Oбо Мне`,
      contactTitle: `Контактная Информация`,
      resumePath: `resume-alex-olshansky-ru.pdf`,
      description: `
        Открытый, доброжелательный и целеустремленный. Обладаю высокой увлеченностью и интересом к технологиям.
        Постоянно занимаюсь улучшением своих профессиональных навыков. К работе отношусь очень ответственно.
        Самостоятельно нахожу и изучаю нужную информацию по проекту. Неплохо разбираюсь в чужом коде.
        Увлекаюсь созданием электронной музыки, люблю спорт и историю.
      `,
      contactDetails: [
        `Александр Ольшанский`,
        `Phone: +380669848090`,
        `Email: sander2411@ukr.net`,
        `Skype: live:27e73c79fb62325b`,
        `Telegram: https://t.me/Alexandr_Olshanskiy`,
        `GitHub: https://github.com/saNder2411`,
      ],
    },

    resumePage: {
      education: {
        title: `Образование`,
        university: `Профессиональные курсы HTML Academy`,
        department: `React-разработчик`,
        yearEnding: `Май 2020`,
        description: [
          `— Подготовительный курс, апрель 2019`,
          `— HTML и CSS, уровень I, июль 2019`,
          `— HTML и CSS, уровень II, сентябрь 2019`,
          `— JavaScript, уровень I, ноябрь 2019`,
          `— JavaScript, уровень II, январь 2020`,
          `— JavaScript, уровень III,  май 2020`,
        ],
        labelLinkCertificates: `Сертификаты Обучения`,
      },
      personalAchievements: {
        title: `Достижения`,
        titleAchievements: `Личные Достижения`,
        description: `
          Успешно окончил 12-ти месячный профессиональный курс в HTMLAcademy "React-разработчик".
          Во время обучения защитил все личный проект на 100 баллов. Разрабатываю на TypeScript React/Redux, React/Hooks,
          в небольших приложениях пользуюсь PropTypes. Тестирую с помощью Jest и Enzym.
          Оптимизировал производительность приложений
          с использованием встроенного браузерного профайлера, для разработки и отладки работаю с «React dev Tools»,
          «Redux dev Tools». Отлично знаком с работой над иммутабельными объектами: React(component state),
          Redux(srore state: добавление и удаление элементов в массиве, обновление свойств элемента и тд.).
          Знаком с Store Enhancers, активно использую Middleware.
          Для диспатча async call использую Thunk Middleware.
          Взаимодействие с REST API: XHR, метод Fetch, библиотека для создания HTTP-клиента Axios, Promise, Async/Await.
          Хранение данных: Local Storage, Service Worker. DAL(Data access Layer) реализую классом на базе
          HTTP-клиента Axios или метода Fetch, с приватными полями и методами для настройки
          клиента и задания дефолтных параметров, и публичными методами
          для доступа к API сервиса. Доступ к экземпляру DAL класса осуществляю через контекст.
          Создаю HOC(withAPIService) который
          принимает в параметры функцию для мапинга метода экземпляра и задает в props оборачиваемому компоненту
          нужный метод для запроса данных у сервиса. Затем это метод диспатчу в методе
          жизненного цикла компонента(HOC withData), после обработки
          данных в reducer, HOC withData через mapStateToProps передает в props UI компонента состояние
          запроса(loading, data, error).При использовании хуков, в двух словах, делаю практически также,
          только на кастомных хуках.
          Хук useService взаимодействует с экземпляром DAL класса и вызывает хук useRequest,
          в который передает необходимый
          метод для запроса. useRequest возвращает массив с объектом состояния запроса и функцией для вызова этого
          запроса([{loding, data, error}, doRequset]). doRequset вызываеться либо при монтировании/обновлении
          UI компонента в хуке useEffect или в обработчике какого либо события.
          Разрабатывал проекты на native JS с объектно-ориентированным подходом,
          с архитектурой на основе шаблонов проектирования
          MVC и MVP(c иерархией презентеров и моделей HMVC(P)).
          ООП: Adapter, Singltone, Observer, Controller, Factory Method,
          Abstract Factory, Decorator. В контроллерах и презентерах реализовывал data-binding,
          помимо callback-ов, c помощью объектов Proxy и Reflect.
          Считаю одним из главных принципов SOLID принцип единственной ответственности. По этому всегда разделяю
          архитектуру приложения на уровни: UI(React)<=>BLL(Redux)<=>DAL(API Service).
          UI компоненты не должны содержать никакой
          логики и отвечать только за рендеринг, это всегда простые функции которые легко тестировать.
          Реализовывал: кастомную валидацию форм, формы с контролируемым и
          не контролируемым компонентом, Drag'n'Drop с событиями
          мыши на native JS (слайдеры, перетаскивание маркеров), диаграмму активности пользователя с библиотекой chart.js.
          Работал с интерфейсами HTMLVideoElement и HTMLAudioElement в проектах с видео и аудио данными.
          Стилизацию компонентов делаю с «styled-components» и «css-modules». 
          Пользуюсь вспомогательными библиотеками: «reselect», «query-string», «classnames», «nanoid», «he»,
          «flatpickr.js», «chart.js», «moment.js». Помимо использования «create-react-app»,
          создавал собственные конфигурации webpack и babel для сборки приложения.
        `,
      },
    },

    portfolioPage: {
      title: `Мои работы`,
      projects: [
        {
          id: `1`,
          title: `Want To Watch`,
          imageUrl: `images/portfolio/1.png`,
          hostUrl: `https://wtw-react-redux.web.app`,
          technologies: `TypeScript/React/Redux`,
          description: `
            "Что посмотреть" — онлайн кинотеатр нового поколения.
            Смотрите новинки абсолютно бесплатно и в лучшем качестве.
            Оставляйте отзывы, ставьте оценки и выбирайте только лучшее из мира большого кино.
          `,
        },
        {
          id: `2`,
          title: `Medium Clone`,
          imageUrl: `images/portfolio/2.png`,
          hostUrl: `https://medium-clone-react-hooks.web.app`,
          technologies: `React/Hooks/Context API`,
          description: `
            "Medium Clone" - это не большая копия социальной сети,
            со всеми ее состовляющеми, которая написана на React/Hooks и Context API
          `,
        },
        {
          id: `3`,
          title: `Star Wars DB`,
          imageUrl: `images/portfolio/3.png`,
          hostUrl: `https://starwar-db-react-context-api.web.app`,
          technologies: `React/Context API`,
          description: `
            "Star Wars DB" - это иллюстрированная база данных про
            персонажи, планеты и звездные корабли из саги "Звездные Войны".
          `,
        },
        {
          id: `4`,
          title: `Bookstore`,
          imageUrl: `images/portfolio/4.png`,
          hostUrl: `https://bookstore-react-redux.web.app`,
          technologies: `React/Redux`,
          description: `
           "Bookstore" - это не большой онлайн магазин книг по программированию, который написан на React и Redux
          `,
        },
        {
          id: `5`,
          title: `Cinemaddict`,
          imageUrl: `images/portfolio/5.png`,
          hostUrl: `https://sander2411.github.io/Cinemaddict-Native-JS-HMVP/`,
          technologies: `Native JS/OOP/MVP`,
          description: `
            "Киноман" — сервис для фанатов большого кино. Подробная информация о горячих новинках кино,
            возможность выбрать и сформировать собственный список фильмов к просмотру, обсуждение кинофильмов.
          `,
        },
        {
          id: `6`,
          title: `Task Manager`,
          imageUrl: `images/portfolio/6.png`,
          hostUrl: `https://taskmanager-oop.web.app`,
          technologies: `Native JS/OOP/MVP`,
          description: `
            «Менеджер задач» помогает пользователю организовывать и контролировать выполнение задач.
            Минималистичный интерфейс приложения не позволит пользователю отвлекаться.
          `,
        },
        {
          id: `7`,
          title: `Todo List App`,
          imageUrl: `images/portfolio/7.png`,
          hostUrl: `https://todo-app-react-sandbox.web.app`,
          technologies: `React`,
          description: `
            "Todo List" - это простое приложение, которое позволяет пользователю вести учет заплонированых дел.
          `,
        },
        {
          id: `8`,
          title: `Mishka: Handmade Toy Store`,
          imageUrl: `images/portfolio/8.png`,
          hostUrl: `https://sander2411.github.io/saNder2411-demo-mishka/`,
          technologies: `HTML5/CSS/Less/Gulp`,
          description: `
            "Мишка" - это интернет магазин милых вещиц для дома ручной работы.
            Множество декаративных элементов, сложная сетка, не сандартный компонент интерфейса.
          `,
        },
      ],
    },
  },
};

export default Data;
