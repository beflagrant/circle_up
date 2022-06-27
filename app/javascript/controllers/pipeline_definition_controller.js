import { Controller } from '@hotwired/stimulus'
import YamlBuilder from '../lib/yaml_builder'
import {add_or_drop_step_component, step_component} from "../lib/components";

class PipelineDefinitionController extends Controller {
  static targets = ["stepName", "stepCommand", "stepDefinitions"]

  connect() {
    this.stepDefinitionsTarget.appendChild(add_or_drop_step_component())
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

  revealStepDropZones() {
    document.querySelectorAll('.step-drop-target').forEach((node) => {
      node.classList.remove('invisible')
    })
  }

  hideStepDropZones() {
    document.querySelectorAll('.step-drop-target').forEach((node) => {
      node.classList.add('invisible')
    })
  }
}

export default PipelineDefinitionController
