const ItemDetails = () => {
  return (
    <section>
      <div className="flex gap-4 items-center my-4">
        <h1 className="text-3xl mr-6  ">Nome do produto</h1>
        <button className="w-24 py-2 rounded text-gray-950 font-semibold bg-gray-100 hover:opacity-80 duration-150">
          Atualizar
        </button>
        <button className="w-24 py-2 rounded text-gray-950 font-semibold bg-red-600 hover:opacity-80 duration-150">
          Excluir
        </button>
      </div>
      <div className="flex gap-6 my-8">
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">Categoria: Biscoito</span>
        </div>
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">Quantidade em estoque: 8</span>
        </div>
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">Preço: RS 20.00</span>
        </div>
      </div>
      <p className="text-xl font-light">
        Descrição do produto vai escrita aqui
      </p>
      <p className="text-gray-400 text-sm italic">Cadastrado em: 12/02/2023</p>
      <p className="text-gray-400 text-sm italic">Atualizado em: 12/02/2023</p>
    </section>
  );
};

export default ItemDetails;
