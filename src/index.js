import {Personagem} from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"

const MagoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const MagaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const personagens = [MagoAntonio, MagaJulia]

new PersonagemView(personagens).render()

