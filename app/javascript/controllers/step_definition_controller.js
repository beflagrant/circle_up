import { Controller } from '@hotwired/stimulus'

class StepDefinitionController extends Controller {
  dragstart(event) {
    event.dataTransfer.dropEffect = "move"
    event.dataTransfer.setData("text/html", event.target.outerHTML)
  }

  dragend(event) {
    console.log("done draggin")
  }
}

export default StepDefinitionController
