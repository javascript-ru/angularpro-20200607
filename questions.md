1. @Attribute() и Observeble

@Attribute поддерживает только статические(строковые) значения, пример можно посмотреть в ./1-content-generation/attribute


2. ngOutletContext

так это уже deprecated начиная с 4й версии (2017-01-11)
https://github.com/angular/angular/blob/master/CHANGELOG.md
> Deprecate ngOutletContext. Use ngTemplateOutletContext instead.


3. https://medium.com/marmicode/your-angular-module-is-a-scam-b4136ca3917b

Как мне кажется, черезмерная избыточность. 
Единственное чем понравился подход - что мы всегда знаем зависимости компонента, 
но для этого я бы лучше уже определял declarations: [] на уровне самого компонента, 
но не создавал для этого модуль.


4. А что пишут в ngOnBootstrap?

Для более точной настройки бутстрапа (по сравнению с bootstrap: [AppComponent]),
например: когда корневой элемент добавляется динамически.
Пример: ./1-content-generation/bootstrap


5. customElements.define как дерегистрировать

похоже в стандарте до сих пор этого нет - https://github.com/w3c/webcomponents/issues/754


6. provideIn any example

Вот статья которая хорошо подсвечивает применение 'any' - https://medium.com/angular-in-depth/angulars-root-and-any-provider-scopes-1ccc53466a7b
TLDR: когда мы таки хотим переопределить сервис на каком-то уровне, но при этом также хотим использовать provideIn


7. Angular Universal. Как из запроса к серверу определить размер экрана пользователя

похоже не существует единственного верного способа получить размер экрана, потому что браузер просто непередает эту информацию при запросе. можно использовать разные хаки, например: сохранять размер экрана в куках(которые будут автоматом передаваться на сервер)

8. Worker type: 'module' 

аналогичен <script type="module"></script>, для подключения ECMAScript модулей
подробно можно почитать тут - https://v8.dev/features/modules
https://web.dev/module-workers/#enter-module-workers


9. Angular Universal prerender/cache vs Scully
- в Scully страницы генерируются реальным браузером Puppeteer, поэтому можно свободно использовать сторонние библиотеки и обращения к document/window/navigator
- Scully не подходит для прилоежний, где очень часто обновляется контент(время перегенерации занимает много)
- Scully до сих пор не умеет делать частичную перегенерацию: в случае обновления перегенерируются все страницы
- с помощью плагинов Scully дает возможность вклиниться в процесс рендеринга, вплоть до того что выкинуть Angular в конечной версии вообще (с целью оптимизации, так как для статического сайта иметь Angular особо не нужно)
- Scully дает парсинг .md файлов с последующей компиляцией в HTML из коробки

