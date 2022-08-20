function clone_template(tpl_id) {
  return document.getElementById(tpl_id).content.cloneNode(true)
}

function steps_container_component() {
  return clone_template('tpl-steps-container')
}

function step_component(
  {
    stepName = '',
    stepCommand = ''
  } = {}) {
  let el = clone_template('tpl-step')
  el.querySelector('.step-name').value = stepName
  el.querySelector('.step-command').value = stepCommand
  return el
}

// TODO: "add or drop" is a bad name because "drop" sounds like the opposite of "add" but it isn't
function add_or_drop_step_component() {
  return clone_template('tpl-add-or-drop-step')
}

export {
  steps_container_component,
  step_component,
  add_or_drop_step_component
}
