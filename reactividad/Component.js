const Component = (function () {
  //Creamos el constructor del componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //Agregamos los métodos al prototipo del contructor del componente

  //Render UI
  Constructor.prototype.render = function () {
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  //Actualizar el estado de forma reactiva
  Constructor.prototype.setState = function (obj) {
    //Recibe un objeto, recorre las llaves, y cuando alguna llave coincida con las del objeto state original la actualiza.
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key]; //Comparamos llaves con método .hasOwnProperty() y si encuentra asigna la del obj entonces se actualiza
      }
    }
    this.render();
  };

  //Obtener copia InMutable del estado
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
