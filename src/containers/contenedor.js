class Contenedor {
  constructor() {
    this.products = [];
  }


  async getById(id) {
    id = Number(id);
    try {
      const data = await this.getData();
      const parsedData = data;

      return parsedData.find((producto) => producto.id === id);
    } catch (error) {
      console.log(
        `Error Code: ${error.code} | Ocurrió un error al intentar obtener un elemento por su ID (${id})`
      );
    }
  }

  async deleteById(id) {
    try {
      id = Number(id);
      const data = await this.getData();
      const parsedData = data;
      const objectIdToBeRemoved = parsedData.find(
        (producto) => producto.id === id
      );

      if (objectIdToBeRemoved) {
        const index = parsedData.indexOf(objectIdToBeRemoved);
        parsedData.splice(index, 1);
        return true;
      } else {
        console.log(`ID ${id} no existente`);
        return null;
      }
    } catch (error) {
      console.log(
        `Error Code: ${error.code} | Ocurrió un error al intentar eliminar un elemento por ID (${id})`
      );
    }
  }

  async updateById(id, newData) {
    try {
      id = Number(id);
      const data = await this.getData();
      const parsedData = data;
      const objectIdToBeUpdated = parsedData.find(
        (producto) => producto.id === id
      );
      if (objectIdToBeUpdated) {
        const index = parsedData.indexOf(objectIdToBeUpdated);
        const {title, price, thumbnail} = newData;

        parsedData[index]['title'] = title;
        parsedData[index]['price'] = price;
        parsedData[index]['thumbnail'] = thumbnail;
        return true;
      } else {
        console.log(`ID ${id} no existente`);
        return null;
      }

    } catch (error) {
      `Error Code: ${error.code} | Ocurrió un error al intentar actualizar un elemento por ID (${id})`
    }
  }

  async save(object) {
    try {
      const allData = await this.getData();
      const parsedData = allData;
      let newId;
      newId = parsedData.length > 0 ? parsedData[parsedData.length-1].id +1 : 1;
      object.id = newId;
      parsedData.push(object);
      return object.id;
    } catch (error) {
      console.log(
        `Error Code: ${error.code} | Ocurrió un error al tratar de guardar el elemento`
      );
    }
  }


  async getData() {
    const data = this.products;
    return data;
  }

  async getAll() {
    const data = await this.getData();
    return data;
  }
}

module.exports = Contenedor;