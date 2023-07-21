import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const NewItem = () => {
  const [successBtn, setSuccessBtn] = useState<boolean>(false);
  useEffect(() => {
    if (successBtn) {
      const timer = setTimeout(() => {
        setSuccessBtn(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [successBtn]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    description: "",
    dataDeCadastro: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novaData = new Date();
    const dataDeCadastro = novaData.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const newProductWithNumberQuantity = {
      ...newProduct,
      quantity: Number(newProduct.quantity),
      price: Number(newProduct.price),
      dataDeCadastro: dataDeCadastro,
    };

    void (async () => {
      try {
        await axios.post(
          "http://localhost:3000/products",
          newProductWithNumberQuantity
        );
        console.log("requisição enviada com sucesso");
        setSuccessBtn(true);
      } catch (error) {
        console.log("requisição falhou");
      }
    })();
    setNewProduct({
      name: "",
      quantity: "",
      price: "",
      category: "",
      description: "",
      dataDeCadastro: "",
    });
  };

  return (
    <form className="w-full flex flex-col mt-4" onSubmit={handleSubmit}>
      <div className="flex gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            className="px-2 py-2 rounded bg-gray-950 w-full text-gray-50"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="px-2 py-2 rounded bg-gray-950 w-full text-gray-50"
            value={+newProduct.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            name="price"
            id="price"
            min={0.01}
            step={0.01}
            ref
            className="px-2 py-2 rounded bg-gray-950 w-full text-gray-50"
            value={+newProduct.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            className="px-2 py-2 rounded selection:border-red-400 bg-gray-950 w-full text-gray-50"
            value={newProduct.category}
            onChange={handleChange}
            required
          >
            <option selected>Selecione</option>
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
          cols={30}
          rows={10}
          className="px-2 py-2 rounded w-full bg-gray-950 text-gray-50"
          value={newProduct.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex gap-4 items-center mt-2">
        {!successBtn ? (
          <button className="px-4 h-10 duration-150 bg-blue-800 hover:bg-blue-700 text-gray-50 font-semibold rounded w-32">
            Salvar
          </button>
        ) : (
          <button
            className="px-4 h-10 duration-150 bg-green-500 text-gray-50 text-3xl rounded w-32 flex items-center justify-center"
            disabled
          >
            <AiFillCheckCircle />
          </button>
        )}
      </div>
    </form>
  );
};

export default NewItem;
