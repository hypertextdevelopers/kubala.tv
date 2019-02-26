<template>
    <div class="content-wrapper">
        <transition name="router-anim">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'Content'    
}

</script>

<style lang="scss" scoped>

.content-wrapper{
    width: calc(100% - 200px);
    height: auto;
}

.router-anim-enter-active{
  animation: coming .5s;
  animation-delay: .5s;
  opacity: 0;
}

.router-anim-leave-active{
  animation: going 1s;
}

@keyframes going{
  from{
    transform: translateX(0);
  }

  to{
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming{
  from{
    transform: translateX(-50px);
    opacity: 0;
  }

  to{
    transform: translateX(0px);
    opacity: 1;
  }
}

</style>
