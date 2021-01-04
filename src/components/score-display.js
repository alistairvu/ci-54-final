const styles = `
<style>
.container {
  text-align: center;
}
</style>`

class ScoreDisplay extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.currentScore = this.getAttribute("score")
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <p>Your score:</p>
      <h3 id="score">${this.currentScore}</h3>
    </div>`
  }

  static get observedAttributes() {
    return ["score"]
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._shadowRoot.getElementById("score").innerHTML = newVal
  }
}

window.customElements.define("score-display", ScoreDisplay)
