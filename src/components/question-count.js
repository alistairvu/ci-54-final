const styles = `
<style>
.container {
  text-align: center;
}
</style>`

class QuestionCount extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.currentQuest = this.getAttribute("question")
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
     <p>Question <span id="question">${this.currentQuest}</span> of 5</p>
    </div>`
  }

  static get observedAttributes() {
    return ["question"]
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._shadowRoot.getElementById("question").innerHTML = newVal
  }
}

window.customElements.define("question-count", QuestionCount)
