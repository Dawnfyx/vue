
function mutationsIframeSrc(state, data) {
  state.stateIframeSrc = data;
}

function mutationsCreateFormHtml(state, data) {
  state.stateFormHtml = data;
}

export default {
  mutationsIframeSrc,
  mutationsCreateFormHtml,
};
