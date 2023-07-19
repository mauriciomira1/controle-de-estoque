const NewItem = () => {
  return (
    <form className="w-full flex flex-col mt-4">
      <div className="flex gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            className="px-2 py-2 rounded bg-gray-950 w-full text-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="px-2 py-2 rounded bg-gray-950 w-full text-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            name="price"
            id="price"
            className="px-2 py-2 rounded bg-gray-950 w-full text-gray-50"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            className="px-2 py-2 rounded selection:border-red-400 bg-gray-950 w-full text-gray-50"
          >
            <option disabled selected>
              Selecione
            </option>
            <option value="bala">Bala</option>
            <option value="biscoito">Biscoito</option>
            <option value="chicle">Chicle</option>
            <option value="doce">Doce</option>
            <option value="pirulito">Pirulito</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full mt-4">
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="px-2 py-2 rounded w-full bg-gray-950 text-gray-50"
        ></textarea>
      </div>
      <button className="px-4 py-2 duration-150 bg-blue-800 hover:bg-blue-700 text-gray-50 font-semibold rounded mt-2 w-32">
        Salvar
      </button>
    </form>
  );
};

export default NewItem;
