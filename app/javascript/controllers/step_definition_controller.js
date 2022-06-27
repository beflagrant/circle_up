import { Controller } from '@hotwired/stimulus'

class StepDefinitionController extends Controller {
  dragstart(event) {
    event.dataTransfer.dropEffect = "move"
    event.dataTransfer.setData("text/html", event.target.outerHTML)
    this.dispatch('stepdragstart')
  }

  dragend(event) {
    this.dispatch('stepdragend')
  }
}

export default StepDefinitionController
