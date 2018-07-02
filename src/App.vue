<script>
import ReviewList from './components/ReviewList';

export default {
  data() {
    return {
      images: [
        'https://dummyimage.com/320x200/444/ccc',
        'https://dummyimage.com/1280x800/444/ccc',
        'https://dummyimage.com/2560x1600/444/ccc',
        'https://dummyimage.com/200x320/ccc/444',
        'https://dummyimage.com/800x1280/ccc/444',
        'https://dummyimage.com/1600x2560/ccc/444',
        'https://dummyimage.com/200x200/000/ccc',
        'https://dummyimage.com/1600x1600/fff/444',
      ],
      list: [
        {
          name: 'Саша',
          sex: 'man',
          text: 'Очень интересный сайт, сразу понравился. Девушки отвечают не сразу, но я познакомился и нашел себе пару в первый же день. Большое спасибо разработчикам.',
        },
        {
          name: 'Максим',
          sex: 'man',
          text: 'Хороший сайт! Никаких премиумов или випов - всё бесплатно. Зашел с мыслью попробовать, посмотреть и сразу заобщался с интересной девченкой. Спешить не буду посмотрю чем к чему придет',
        },
      ],
    };
  },
  components: {
    ReviewList,
  },
};
</script>

<template>
  <div id="app">
      <h1>Preview ReviewList</h1>
      <ReviewList link="https://raw.githubusercontent.com/freedomsex/docs/master/blog/rev/how-it-works.json" :raw="list"/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
