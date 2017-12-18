import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import demo from './modules/demo'

export default Vuex.Store({
	modules: {
		demo
	}
})