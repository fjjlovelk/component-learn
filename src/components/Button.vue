<template>
  <button
    class="fjj-button"
    :class="[`fjj-button--${type}`, { 'is-round': round, 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FjjButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';
.fjj-button {
  line-height: 1;
  font-size: 14px;
  font-weight: 500;
  color: $--color-font;
  white-space: nowrap;
  padding: 12px 20px;
  cursor: pointer;
  border: 1px solid $--color-default;
  border-radius: 4px;
  background-color: #fff;
  outline: none;
  + .fjj-button {
    margin-left: 15px;
  }
}
.fjj-button--default {
  &:hover,
  &:focus {
    color: $--color-hover;
    border-color: $--color-hover;
  }
}
.fjj-button--primary {
  color: #fff;
  border-color: $--color-primary;
  background-color: $--color-primary;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.fjj-button--success {
  color: #fff;
  border-color: $--color-success;
  background-color: $--color-success;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.fjj-button--warning {
  color: #fff;
  border-color: $--color-warning;
  background-color: $--color-warning;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.fjj-button--danger {
  color: #fff;
  border-color: $--color-danger;
  background-color: $--color-danger;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.fjj-button--info {
  color: #fff;
  border-color: $--color-info;
  background-color: $--color-info;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.fjj-button--text {
  color: $--color-primary;
  border-color: transparent;
  background-color: transparent;
  padding: 0;
}
.fjj-button.is-round {
  border-radius: 20px;
}
.fjj-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>