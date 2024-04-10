import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export { store }
const store = createPinia()
store.use(createPersistedState())

export * from './modules/user.ts'

export default store
