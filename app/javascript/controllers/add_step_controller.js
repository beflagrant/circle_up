import { Controller } from '@hotwired/stimulus'
import {add_or_drop_step_component, step_component} from "../lib/components"

class AddStepController extends Controller {
  connect() {}

  act(event) {
    event.target.after(add_or_drop_step_component())
    event.target.after(step_component())
  }
}

export default AddStepController
