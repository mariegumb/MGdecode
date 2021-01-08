<template>
  <div id="app">
    <div class="mt-12 text-violet-500 text-5xl text-center"> 
       Hello la team UNiFAi
    </div>
    <div class="flex justify-center m-12">
      <div>
        <div v-for="i in 15" :key="i" class="ml-1 bg-violet-300 text-white rounded-full h-8 w-8 cursor-pointer inline-block " :class="{'bg-violet-500' : rot===i}">
        <div @click="rot=i" class="h-full justify-center flex items-center">
          {{i}}
        </div>
         </div>
      </div>
      
    </div>
    <div class="flex justify-center m-12">
      <div class="w-1/3">
          <label for="price" class="block text-md ">Texte à décoder</label>
          <div class="mt-1 relative rounded-md shadow-sm">
          <input v-model="input" type="text" class="focus:ring-violet-500 focus:border-violet-500 block w-full pl-3 pr-12 sm:text-sm border-gray-400 rounded-md" >
  </div>
  <div class="mt-12 text-md ">
    Résultat : 
  </div>
  <div class="font-bold text-violet-500 text-xl">
    {{output}}
  </div>
      </div>
</div>
<div class="text-center mt-64">
  <span class=" text-gray-400">
  Embauchez moi ;)
</span>
</div>

  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      input: 'PbAte4gf@havsnv.se',
      rot: 13
    }
  },
  computed:{
    output(){
      return this.uncodeROT(this.input, this.rot)
    }
  },
  methods: {
    uncodeROT(str, decalage){
      const dict = 'abcdefghijklmnopqrstuvwxyz'
      const chars = str.toLowerCase().split('')
      let output = ''
      for(const c of chars){
        const i = dict.indexOf(c)
        output += i !== -1 ? dict[(i + decalage) % 26] : c
      }
      return output
    }
  }
}
</script>
