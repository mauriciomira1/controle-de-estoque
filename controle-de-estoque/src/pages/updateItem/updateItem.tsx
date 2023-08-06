import { useState } from "react";
import FormNewItem from "../../components/FormNewItem";

const UpdateItem = ({ changeClass }: boolean) => {
  const [textClass, setTextClass] = useState<string>("hidden");
  if (changeClass === true) {
    setTextClass("block");
  }

  return (
    <div className={`${textClass} px-4 py-2 absolute`}>
      <h2>Atualizar item</h2>
      <FormNewItem
        id={0}
        name={""}
        quantity={0}
        category={""}
        price={0}
        description={""}
        createdAt={""}
        updatedAt={""}
      />
    </div>
  );
};

export default UpdateItem;
