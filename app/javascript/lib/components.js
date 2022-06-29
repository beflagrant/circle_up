function clone_template(tpl_id) {
  return document.getElementById(tpl_id).content.cloneNode(true)
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

function add_or_drop_step_component() {
  return clone_template('tpl-add-or-drop-step')
}

export { step_component, add_or_drop_step_component }
