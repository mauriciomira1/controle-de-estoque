import { useParams } from "react-router-dom";
import useStock from "../../hooks/useStock";
import FormNewItem from "../../components/FormNewItem";

/* import FormNewItem from "../../components/FormNewItem"; */

const UpdateItem = () => {
  const { getItem } = useStock();
  const { id } = useParams();
  const item = getItem(id);

  console.log(item);

  return (
    <>
      <FormNewItem productToUpdate={item} />
    </>
  );
};

export default UpdateItem;
