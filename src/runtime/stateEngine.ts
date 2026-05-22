export const state = {
  activeModule: "home",
  moduleState: {},

  setActiveModule(id) {
    this.activeModule = id;
  },

  saveModuleState(id, data) {
    this.moduleState[id] = data;
  },

  getModuleState(id) {
    return this.moduleState[id] || {};
  }
};

