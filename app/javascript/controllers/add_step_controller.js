import { Controller } from '@hotwired/stimulus'

class AddStepController extends Controller {
  connect() {}

  new_step_element() {
    return document.querySelector('#tpl-step').content.cloneNode(true)
  }

  act(event) {
    let new_step = this.new_step_element()
    event.target.after(new_step)
  }
}

export default AddStepController
