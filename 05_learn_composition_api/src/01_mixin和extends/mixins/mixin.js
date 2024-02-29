export const mix = {
  data() {
    return {
      message: "Hello",
    };
  },
  methods: {
    foo() {
      console.log("foo function");
    },
  },
  created() {
    console.log("mixin created ");
  },
};
