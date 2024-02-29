<script>
import Home from './Home.vue'
export default {
  data() {
    return {
      counter: 0
    }
  },
  render() {
    const increment = () => this.counter++
    const decrement = () => this.counter--

    return (
      <div>
        <h2>当前计数:{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <Home>
          {{ default: props => <span>呵呵呵</span> }}
        </Home>
      </div>
    )
  }
};
</script>
