import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Categoria, Galeria, Pais, Portafolio } from './definitions';

type State = {
  portafolio: undefined | Portafolio;
  loading: boolean;
};

const initialState: State = {
  portafolio: undefined,
  loading: false,
};

type Action =
  | { type: 'portafolioInicial' }
  | {
      type: 'portafolioLlenando';
      categorias: [Categoria] | undefined;
      paises: [Pais] | undefined;
      galerias: [Galeria] | undefined;
    }
  | {
      type: 'portafolioCambiandoCategoriasBandera';
      cate_selecionada: string | null;
      bandera_seleccionada: string | null;
      portafolio: Portafolio | null;
    }
  | { type: 'portafolioReiniciando'; banderas: boolean; categorias: boolean };
let portafolioTotal: Portafolio;
let categoria: string | undefined;
let bandera: string | undefined;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'portafolioInicial':
      return { ...state, loading: true };
    case 'portafolioLlenando':
      let porta: Portafolio = {
        categorias: [...action.categorias!],
        paises: [...action.paises!],
        galerias: [...action.galerias!],
      };
      portafolioTotal = porta;
      return { ...state, loading: true, portafolio: porta };
    case 'portafolioCambiandoCategoriasBandera':
      if (action.cate_selecionada) categoria = action.cate_selecionada;
      if (action.bandera_seleccionada) bandera = action.bandera_seleccionada;
      const nuevoGaleria = portafolioTotal.galerias.filter((item, value) => {
        console.log(bandera);
        console.log(categoria);
        if (bandera && categoria) {
          return (
            item.context.custom.categoria === categoria && item.context.custom.pais === bandera
          );
        } else if (bandera) {
          return item.context.custom.pais === bandera;
        } else if (categoria) {
          return item.context.custom.categoria === categoria;
        }
      });
      const nuevoPortafolio: Portafolio = {
        galerias: nuevoGaleria as unknown as [Galeria],
        paises: portafolioTotal.paises,
        categorias: portafolioTotal.categorias,
      };
      return { ...state, loading: true, portafolio: nuevoPortafolio };
    case 'portafolioReiniciando':
      const portafolioR = portafolioTotal.galerias.filter((item, value) => {
        bandera = undefined;
        categoria = undefined;
        if (action.banderas) {
          return item.context.custom.pais !== null;
        }

        if (action.categorias) {
          return item.context.custom.categoria !== null;
        }

        if (action.categorias && action.banderas) {
          return item.context.custom.categoria !== null && item.context.custom.pais !== null;
        }
      });

      const nuevoPortafolio2: Portafolio = {
        galerias: portafolioR as unknown as [Galeria],
        paises: portafolioTotal.paises,
        categorias: portafolioTotal.categorias,
      };

      return { ...state, loading: false, portafolio: nuevoPortafolio2 };

    default:
      return state;
  }
}

type AppContextType = State & {
  dispatch: React.Dispatch<Action>;
};

const AppContext = createContext<AppContextType>({
  ...initialState,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

export function PortafolioProvider({ children }: Props) {
  const [{ portafolio, loading }, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ portafolio, loading, dispatch }}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
