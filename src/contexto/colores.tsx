import { createContext, useContext, useReducer, ReactNode } from 'react';

type State = {
  color: undefined | string;
  loading: boolean;
};

const initialState: State = {
  color: '32CBFF',
  loading: false,
};

type Action =
  | { type: 'coloInicial' }
  | { type: 'colorDia'; color: string | undefined }
  | { type: 'colorNoche'; color: string | undefined };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'coloInicial':
      return { ...state, loading: false };
    case 'colorDia':
      return { ...state, loading: false, color: action.color };
    case 'colorNoche':
      return { ...state, loading: false, color: action.color };

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

export function AppProvider({ children }: Props) {
  const [{ color, loading }, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ color, loading, dispatch }}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);
