<template>
  <div class="fjj-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <div class="fjj-dialog" :style="{width: width, marginTop: top}">
      <div class="fjj-dialog__header">
        <slot name="title">
          <span class="fjj-dialog__title">{{title}}</span>
        </slot>
        <span class="fjj-dialog__headerbtn" @click="handleClose">&Chi;</span>
      </div>
      <div class="fjj-dialog__body">
        <slot></slot>
      </div>
      <div class="fjj-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FjjDialog',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '提示',
    },
    width: {
      type: String,
      default: '30%',
    },
    top: {
      type: String,
      default: '15vh',
    },
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss">
@import '../scss/variables.scss';
.fjj-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  .fjj-dialog {
    position: relative;
    margin: 0 auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    color: $--color-font;
    &__header {
      padding: 20px 20px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fjj-dialog__title {
        font-size: 18px;
        color: $--color-font-strong;
      }
      .fjj-dialog__headerbtn {
        cursor: pointer;
      }
    }
    &__body {
      padding: 30px 20px;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
    }
  }
}
</style>