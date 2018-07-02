<script>
import MoreButton from '~components/MoreButton';

export default {
  props: ['link', 'raw'],
  data: () => ({
    end: false,
    timeout: true,
    reviews: [],
    loaded: 0,
    batch: 7,
  }),
  computed: {
    list() {
      return this.reviews.slice(0, this.loaded);
    },
  },
  mounted() {
    if (this.link) {
      this.load();
    } else
    if (this.raw) {
      this.reviews = this.raw;
      this.next();
    }
  },
  methods: {
    load() {
      fetch(this.link)
        .then(response => response.json())
        .then((data) => {
          this.loaded = this.batch;
          this.reviews = data;
          this.exceed();
        });
    },
    next() {
      this.loaded += this.batch;
      this.exceed();
    },
    exceed() {
      if (this.loaded >= this.reviews.length) {
        this.end = true;
      }
    },
  },
  components: {
    MoreButton,
  },
};
</script>

<template>
  <div>
    <div class="static-reviews" v-if="reviews.length">
      <div class="static-reviews__caption">Отзывы</div>
      <div class="static-reviews__item"
       v-for="(item, index) in list"
       :class="item.sex"
       :key="index">
        <b>{{item.name}}:</b>
        {{item.text}}
        <div class="reply" v-show="item.reply">{{item.reply}}</div>
      </div>
    </div>

    <div>
      <MoreButton @next="next" v-if="!end" />
      <button class="btn btn-default"
       @click="$emit('send')"> Оставить отзыв </button>
    </div>
  </div>
</template>

<style lang="less">

.static-reviews {
  margin: 20px 0 20px;

  &__caption {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 10px 0px;
    border-bottom: 1px solid #666;
  }

  &__item {
    border-radius: 0px;
    border-top: 0px solid #cccccc;
    margin: 15px 0 0 0px;
    text-align: left;
    font-size: 16px;

    &.man b {
      border-top: 0px solid #669933;
      color: #669933;
    }
    &.woman b {
      border-top: 0px solid #c082c0;
      color: #c082c0;
    }
    .reply {
      background: #f2f2f2;
      border-left: 3px solid #CCC;
      margin: 10px 10px 0px;
      padding: 10px 15px;
      font-size: 14px;
    }
  }
}

.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover,
  &:focus,
  &.focus {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
    text-decoration: none;
  }
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

</style>
