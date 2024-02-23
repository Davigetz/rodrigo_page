export type Portafolio = {
  paises: [Pais];
  categorias: [Categoria];
  galerias: [Galeria];
};

export type Pais = {
  value: string;
  label: string;
};
export type Categoria = {
  value: string;
  cuenta: number;
};

export type Galeria = {
  public_id: string;
  height: number;
  format: string;
  created_at: string;
  type: string | undefined;
  version: number;
  width: number;
  context: Context;
};

export type Context = {
  custom: Custom;
};

export type Custom = {
  alt: string;
  caption: string;
  categoria: string;
  cliente: string;
  designer: string;
  pais: string;
  year: string;
};
