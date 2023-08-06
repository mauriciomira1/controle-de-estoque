import useStock from "../hooks/useStock";

interface DeleteButtonProps {
  itemName: string; // Nome do item a ser excluído
  itemId: number; // ID do item a ser excluído
}

const DeleteButton = ({ itemName, itemId }: DeleteButtonProps) => {
  // Utilizando o hook useStock para obter a função deleteItem
  const { deleteItem } = useStock();

  // Função que será executada quando o botão de exclusão for clicado
  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem ? deleteItem(itemId) : null;
    }
  };

  // Renderiza o botão de exclusão com as classes de estilo CSS
  return (
    <button
      className="px-2 py-1 rounded text-gray-950 font-semibold bg-red-600 hover:opacity-90 duration-150"
      onClick={handleDelete}
    >
      Excluir
    </button>
  );
};

export default DeleteButton;
