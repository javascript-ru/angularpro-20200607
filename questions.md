1. @Attribute() и Observeble

@Attribute поддерживает только статические(строковые) значения, пример можно посмотреть в ./1-content-generation/attribute

2. ngoutletcontext
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
6. provideIn any example
7. Angular Universal. Как из запроса к серверу определить размер экрана пользователя
8. Worker type: 'module' 
9. Angular Universal  vs Scully