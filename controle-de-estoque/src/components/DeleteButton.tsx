import useStock from "../hooks/useStock";

interface DeleteButtonProps {
  itemName: string;
  itemId: number;
  /*   deleteItem?: (itemId: number) => void; */
}

const DeleteButton = ({ itemName, itemId }: DeleteButtonProps) => {
  const { deleteItem } = useStock();
  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem ? deleteItem(itemId) : null;
    }
  };

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
