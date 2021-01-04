import { getData } from "./utils.js"

const styles = `
<style>
.container {
  margin: 0 auto;
  width: 60vw;
}

@media (max-width: 729px) {
  .container {
    width: 100%;
  }
}
</style>`

class GameScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      Loading...
    </div>`

    let score = 0
    let count = 0
    const questionList = await getData()
    console.log(questionList)

    window.score = score
    window.count = count
    window.answered = []

    let questionHTML = ``

    questionList.map((item, index) => {
      questionHTML += `
      <question-count question="${index + 1}"></question-count>
      <question-display id="question-display" index="${index}" question='${JSON.stringify(
        item
      )}'></question-display>`
    })

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <score-display id="score"></score-display>
      ${questionHTML}
    </div>`

    this._shadowRoot.getElementById("score").setAttribute("score", score)

    window.scoreDisplay = this._shadowRoot.getElementById("score")
    window.questionCount = this._shadowRoot.getElementById("question")
    window.questionDisplay = this._shadowRoot.getElementById("question-display")
  }
}

window.customElements.define("game-screen", GameScreen)
