import { Controller } from '@hotwired/stimulus'

class StepDefinitionController extends Controller {
  static targets = [ 'stepName', 'stepCommand' ]

  dragstart(event) {
    const data = {
      stepName: this.stepNameTarget.value,
      stepCommand: this.stepCommandTarget.value,
    }
    event.dataTransfer.dropEffect = "move"
    event.dataTransfer.setData("application/json", JSON.stringify(data))
    this.dispatch('stepdragstart')
  }

  dragend(event) {
    this.dispatch('stepdragend')
    this.element.remove()
  }
}

export default StepDefinitionController
