<template>
  <div>
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <hr>
    <button @click='incrementAction'>+1</button>
    <button @click='decrementAction'>-1</button>
    <button @click='add'>+1</button>
    <button @click='sub'>-1</button>
    <hr>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // ...mapActions(['incrementAction','decrementAction']),
    // ...mapActions({
    //   add:'incrementAction',
    //   sub:"decrementAction"
    // })
  },
  setup() {
    const storeActions = mapActions(['incrementAction', 'decrementAction'])
    const storeActions2 = mapActions({
      add: 'incrementAction',
      sub: 'decrementAction'
    })

    return {
      ...storeActions,
      ...storeActions2
    }
  }
}
</script>

<style scoped></style>