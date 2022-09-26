<template>
  <div class="hello">
    <div v-for="item in arr">
      {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      arr: [
        {text:"早发白帝城"},
        {text:"欲穷千里目"},
        {text:"更上一层楼"},
        {text:"唧唧复唧唧"},
        {text:"木兰当户织"},
        {text:"劝君更进一杯酒"},
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
