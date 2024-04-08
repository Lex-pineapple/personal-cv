import imgForest from '@assets/images/изображение 2.png';
import imgGraphql from '@assets/images/изображение 3.png';
import imgStore from '@assets/images/изображение 4.png';
import { ProjectsItem } from '@components/minor/projects-item';

import './projects.scss';

export function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects_container">
        <h2 className="projects__h2 h2">Проекты</h2>
        <ProjectsItem
          name="Lost - Игра 2D-платформер в пиксельном стиле"
          descr="2D игра с 3 разнообразными уровнями, возможностью регистрации и просмотра таблицы рекордов"
          codeLink="https://github.com/Lex-pineapple/lost-2d-platformer/tree/develop"
          img={imgForest}
          align="left"
        />
        <ProjectsItem
          name="GraphQl Client - Сайт для работы с GraphQl запросами"
          descr="Графическая интерактивная среда разработки в браузере, позволяющая оправлять запросы на API с использованием языка запросов GraphQL"
          previewLink="https://merrybeavers-graphiql.netlify.app/"
          codeLink="https://github.com/Lex-pineapple/graphiql-app/tree/develop"
          img={imgGraphql}
          align="right"
        />
        <ProjectsItem
          name="Online store - Онлайн магазин"
          descr="Сайт-каталог онлайн магазина, с возможностью фильтра продуктов, добавления в корзину и check out"
          previewLink="https://lex-pineapple-online-store.netlify.app/#catalog"
          codeLink="https://github.com/Lex-pineapple/online-store/tree/develop"
          img={imgStore}
          align="left"
        />
      </div>
    </div>
  );
}
