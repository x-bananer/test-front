export const state = () => ({
  companies: null,
  definitions: null,
  company: null,
})

export const mutations = {
  setCompanies(state, companies) {
    state.companies = companies;
  },
  setDefinitions(state, definitions) {
    state.definitions = definitions;
  },
  setCompany(state, company) {
    state.company = company;
  }
}

export const actions = {
  async fetchCompanies({ commit }, filter) {
    let companies = null;
    if (!filter.industry && !filter.specialization) {
      companies = await this.$axios.$get(`http://api-test.duotek.ru/companies?search=${filter.search || ''}&per_page=10&page=${filter.page}`);
    } else if (!filter.industry && filter.specialization) {
      companies = await this.$axios.$get(`http://api-test.duotek.ru/companies?search=${filter.search || ''}&specialization=${filter.specialization || ''}&per_page=10&page=${filter.page}`);
    } else if (filter.industry && !filter.specialization) {
      companies = await this.$axios.$get(`http://api-test.duotek.ru/companies?search=${filter.search || ''}&industry=${filter.industry || ''}&per_page=10&page=${filter.page}`);
    } else {
      companies = await this.$axios.$get(`http://api-test.duotek.ru/companies?search=${filter.search || ''}&specialization=${filter.specialization || ''}&industry=${filter.industry || ''}&per_page=10&page=${filter.page}`);
    }
    commit('setCompanies', companies);
  },
  async fetchDefinitions({ commit }) {
    const definitions = await this.$axios.$get(`http://api-test.duotek.ru/definitions`);
    commit('setDefinitions', definitions);
  },
  async fetchCompany({ commit }, company) {
    const item = await this.$axios.$get(`http://api-test.duotek.ru/companies/info?id=${company}`);
    commit('setCompany', item);
  }
}

export const getters = {
  companies: state => {
    return state.companies;
  },
  definitions: state => {
    return state.definitions;
  },
  company: state => {
    return state.company;
  }
}
