import axios, { AxiosResponse } from "axios"; // Importa a biblioteca axios e o tipo genérico AxiosResponse

interface ProductProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
}

// Função assíncrona loadItem que carrega os detalhes de um produto específico da API
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loadItem = async ({ params }: any): Promise<ProductProps> => {
  // Faz uma requisição GET para obter todos os produtos da API
  const response: AxiosResponse<ProductProps[]> = await axios.get(
    "http://localhost:3000/products/"
  );
  // Atribui a resposta (um array de objetos ProductProps) à variável products
  const products: ProductProps[] = response.data;

  // Busca o produto com o ID correspondente aos parâmetros fornecidos
  const product: ProductProps | undefined = products.find(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (p: ProductProps) => p.id === +params.productId
  );

  // Verifica se o produto foi encontrado. Caso contrário, lança um erro
  if (!product) {
    throw new Error("Product not found");
  }

  // Retorna o produto encontrado
  return product;
};

export default loadItem; // Exporta a função loadItem como padrão para ser usada em outras partes da aplicação
