class YamlBuilder {
  constructor(options) {
    this._steps = options.steps || []
  }

  generate() {
    this._initialize()

    this._append('steps:')

    this._indent_level++
    for (const step of this._steps) {
      this._append('- run:')
      this._indent()
      this._indent()
      this._append('name: ' + step[0])
      this._append('command: ' + step[1])
      this._outdent()
      this._outdent()
    }

    return this._lines.join('\n')
  }

  _initialize() {
    this._indent_level = 0
    this._lines = []
  }

  _indent() {
    this._indent_level++
  }

  _outdent() {
    this._indent_level--
  }

  _append(line) {
    const leading_space = ''.padStart(this._indent_level * 2, ' ')
    this._lines.push(leading_space + line)
  }
}

export default YamlBuilder
