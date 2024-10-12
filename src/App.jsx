import i18n from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"
import TicTacToe from "./TicTacToe"

function App() {
  
  i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: 'Tic Tac Toe',
          player: 'Player',
          winner: 'Winner',
          draw: 'Draw',
          restart: 'Restart Game',
          next: 'Next player',
        }
      },
      bn: {
        translation: {
          title: 'টিক ট্যাক টো',
          player: 'খেলোয়াড়',
          winner: 'বিজয়ী',
          draw: 'ড্র',
          restart: 'গেম পুনরায় শুরু করুন',
          next: 'পরবর্তী খেলোয়াড়',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
  })


  return (
    <>
      <I18nextProvider i18n={i18n}>
      <TicTacToe/>
      </I18nextProvider>
    </>
  )
}

export default App
