import { Controller } from '@hotwired/stimulus'
import {step_component} from "../lib/components";

class StepDropTargetController extends Controller {
  dragenter(event) {
    event.preventDefault()
    console.log("enter")
  }

  dragover(event) {
    event.preventDefault()
    console.log("over")
  }

  dragleave(event) {
    event.preventDefault()
    console.log("leave")
  }

  drop(event) {
    event.preventDefault()
    const data = JSON.parse(event.dataTransfer.getData('application/json'))
    const { stepName, stepCommand } = data
    let step = step_component({
      stepName, stepCommand
    })
    event.target.before(step)
  }
}

export default StepDropTargetController
