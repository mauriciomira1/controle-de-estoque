import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ItemBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return (
          <h2 className="text-4xl font-semibold">
            Oops... Produto não encontrado :(
          </h2>
        );
      case 401:
        return (
          <h2 className="text-4xl font-semibold">
            Você não tem autorização para acessar essa página.
          </h2>
        );
      case 400:
        return (
          <h2 className="text-4xl font-semibold">
            Algo deu errado na requisição. Tente mais tarde.
          </h2>
        );
      case 500:
        return (
          <h2 className="text-4xl font-semibold">
            Erro inesperado no servidor. Tente novamente.
          </h2>
        );
    }
  }

  return <h2 className="text-4xl font-semibold">Algo deu errado :(</h2>;
};

export default ItemBoundary;
