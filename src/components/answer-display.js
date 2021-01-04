const styles = `
<style>
*{
  margin: 0;
  padding: 0;
}

.container {
  width: 40wv;
  height: 3vh;
  line-height: 3vh;
  border: 1px solid black;
  margin: 0 auto;
  text-align: center;
}

.container:hover {
  background: grey;
}

.correct {
  background: green;
  color: white;
}

.incorrect {
  background: red;
  color: white;
}
</style>`

class AnswerDisplay extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    const answer = this.getAttribute("answer")
    const isCorrect = this.getAttribute("correct")
    this.index = this.getAttribute("id")

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container" id="answer">
      <p>${answer}</p>
    </div>`

    this._shadowRoot
      .getElementById("answer")
      .addEventListener("click", async () => {
        console.log("Registered click")
        console.log(this.index)
        if (answered.indexOf(this.index) !== -1) {
          alert("You already attempted this question!")
          return
        }

        answered.push(this.index)
        console.log(answered)

        if (isCorrect === "true") {
          score += 10
          alert("Correct answer!")
          this._shadowRoot.getElementById("answer").classList.toggle("correct")
        } else {
          alert("Wrong answer!")
          this._shadowRoot
            .getElementById("answer")
            .classList.toggle("incorrect")
        }
        count++

        scoreDisplay.setAttribute("score", score)

        if (answered.length === 5) {
          alert(`Game over! Your score is ${score}.`)
        }
      })
  }
}

window.customElements.define("answer-display", AnswerDisplay)
