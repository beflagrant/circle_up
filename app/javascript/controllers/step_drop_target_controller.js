import { Controller } from '@hotwired/stimulus'
import {step_component} from "../lib/components";

class StepDropTargetController extends Controller {
  dragenter(event) {
    event.preventDefault()
    this.element.classList.add('border-4', 'border-red-600')
  }

  dragleave(event) {
    event.preventDefault()
    this.element.classList.remove('border-4', 'border-red-600')
  }

  drop(event) {
    event.preventDefault()
    console.log(event)
    const data = JSON.parse(event.dataTransfer.getData('application/json'))
    const { stepName, stepCommand } = data
    let step = step_component({
      stepName, stepCommand
    })
    event.target.before(step)
  }
}

export default StepDropTargetController
