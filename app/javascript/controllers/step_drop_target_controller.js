import { Controller } from '@hotwired/stimulus'

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
    console.log("drop")
  }
}

export default StepDropTargetController
