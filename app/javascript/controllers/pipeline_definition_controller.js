import { Controller } from '@hotwired/stimulus'
import YamlBuilder from '../lib/yaml_builder'
import {add_or_drop_step_component, step_component, steps_container_component} from "../lib/components";

class PipelineDefinitionController extends Controller {
  static targets = ["stepName", "stepCommand", "stepDefinitions"]

  connect() {
    const defs = steps_container_component()
    this.stepDefinitionsTarget.appendChild(defs)
  }

  regenerate() {
    const stepDefinitions = this.stepNameTargets.map((nameTarget, idx) =>
      [nameTarget.value, this.stepCommandTargets[idx].value])

    const builder = new YamlBuilder({
      steps: stepDefinitions
    })
    const yaml = builder.generate()

    const yaml_el = document.querySelector('#yaml')
    yaml_el.innerText = yaml
  }
}

export default PipelineDefinitionController
