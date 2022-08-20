import { Controller } from '@hotwired/stimulus'
import {add_or_drop_step_component} from "../lib/components";

class StepsContainerController extends Controller {
  // TODO: This is now redundant with the StepDefinitions element/controller? I think? Consolidate?
  //    ^^ this will make the most sense to do once we have the interaction feeling good, then we can
  //       refactor how the YAML generation and data munging works. But first, get the look/feel right.
  connect() {
    this.element.appendChild(add_or_drop_step_component())
  }

  revealStepDropZones() {
    this.element.querySelectorAll('.step-drop-target').forEach((node) => {
      node.classList.remove('invisible')
    })
  }

  hideStepDropZones() {
    this.element.querySelectorAll('.step-drop-target').forEach((node) => {
      node.classList.add('invisible')
    })
  }
}

export default StepsContainerController
