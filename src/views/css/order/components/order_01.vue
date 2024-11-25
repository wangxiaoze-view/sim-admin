<script setup lang="ts">
  import { ref, computed } from 'vue'
  interface IInfoItem {
    name: string
    content: string
    price: number
    img: string
    _running: boolean
  }

  const tempItem: IInfoItem = {
    name: 'IPhone20',
    content:
      '这款无线蓝牙耳机采用最新的蓝牙5.0技术，提供稳定的连接和出色的音质体验。内置高清麦克风，支持长达8小时的播放时间。 ',
    price: 20,
    img: 'https://picsum.photos/300',
    _running: false,
  }
  // 这样响应式会丢失
  // const cacheArr = new Array<IInfoItem>(3).fill(tempItem);
  const cacheArr = Array.from({ length: 3 }, () => ({ ...tempItem }))

  const infoList = ref<IInfoItem[]>(cacheArr)
  const cartList = ref<IInfoItem[]>([])
  const cartRef = ref<HTMLElement>()

  const onAddCart = (item: IInfoItem, event: Event) => {
    /**
     * 解释：
     * 1. 在盒子中创建一个空白盒子，这个盒子就是后面移动展示的缩略图
     * 2. 在点击购物车的时候，克隆元素到这个空白盒子
     * 3. 再给这个空白盒子添加动画, 从初始的位置移动到购物车位置
     * 4. 动画结束后，删除这个空白盒子，以及对应的业务逻辑
     */

    if (item._running) return
    // _running 模拟做了一个 1s 的防抖效果, 避免重复点击, 直到动画结束之后才可以再次操作
    item._running = true
    const target = event.target as HTMLElement
    const parents = target.parentNode!.parentNode!
    const cloneNode = parents.querySelector('.clone-node')
    const image = parents.querySelector('img')!
    cloneNode?.appendChild(image.cloneNode(true))

    const { x: nodeX, y: nodeY } = cloneNode!.getBoundingClientRect()
    const { x: cartX, y: cartY } = cartRef.value!.getBoundingClientRect()!

    const animate = cloneNode?.animate(
      {
        width: '30px',
        height: '20px',
        transform: `translate(${cartX - nodeX}px, ${cartY - nodeY}px)`,
      },
      {
        duration: 1000,
        easing: 'ease-in-out',
      }
    )

    animate!.onfinish = () => {
      cloneNode?.removeChild(cloneNode.querySelector('img')!)
      cartList.value.push(item)
      item._running = false
    }
  }

  const MAX = 99
  const getCartLength = computed(() =>
    cartList.value.length >= MAX ? `${MAX}+` : cartList.value.length
  )
</script>

<template>
  <div class="cart-box">
    <div class="header">
      <span>
        共
        <b>{{ getCartLength }}</b>
        件商品
      </span>
      <span class="cart-icon">
        <i class="ri-shopping-cart-2-line" ref="cartRef"></i>
        <i class="number" v-if="cartList.length">{{ getCartLength }}</i>
      </span>
    </div>
    <div class="info">
      <div class="info-item" v-for="(item, index) in infoList" :key="index">
        <div class="image-box">
          <img :src="item.img" alt="" srcset="" />
          <span class="clone-node"></span>
        </div>
        <p>{{ item.content }}</p>
        <div>
          <span>
            <b>{{ item.price.toFixed(2) }}</b>
          </span>

          <button :disabled="item._running" @click="onAddCart(item, $event)">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cart-box {
    width: 100%;
    border: 1px solid var(--el-border-color);
    .header {
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 1px 10px var(--el-border-color);
      b {
        color: #ff0000;
      }

      .cart-icon {
        position: relative;
        .number {
          position: absolute;
          top: -5px;
          right: -8px;
          font-size: 10px;
          width: 14px;
          height: 14px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--el-color-error);
          font-weight: bold;
        }
      }
    }
    .info {
      padding: 14px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      &-item {
        border: 1px solid var(--el-border-color);
        border-radius: 4px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;

        .image-box {
          width: 100%;
          height: 100px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .clone-node {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          z-index: 100;
        }
        p {
          margin: 0;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          b {
            color: var(--el-color-error);
          }
          button {
            border: 1px solid #e6a23c;
            border-radius: 50px;
            font-size: 12px;
            padding: 4px 10px;
            background-color: #e6a23c;
            color: #fff;
          }
        }
      }
    }
  }
</style>
