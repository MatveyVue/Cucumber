<template>
<h1>Available Tasks:</h1>

<center>
<a href="https://t.me/stinsik"><button   id="clickButton" 
  :disabled="buttonClicked" 
  @click="gotoChannel()" class="task1">{{ buttonClicked ? 'Completed✅' }}<h3>Go to Community</h3><h4>+25,000 Cucumber</h4>
<img class="cucu" src="https://i.postimg.cc/L8h57Z2R/IMG-0722.png" width="50px" height="50px">
</button></a>
</center>

<center><div class="container">
    <button class="ref"><router-link style="text-decoration: none; color: inherit;" to="/ref">Ref</router-link></button>
    <button class="game"><router-link style="text-decoration: none; color: inherit;" to="/game">Game</router-link></button>
    <button class="task"><b>Task</b></button>
    </div>
</center>
</template>

<script>
export default {
  data() {
    return {
      buttonClicked: false,
      score: 0,
      clickValue: 25000 // или другое значение, в зависимости от требований
    };
  },
  mounted() {
    this.loadFromLocalStorage();
  },
  methods: {
    loadFromLocalStorage() {
      const savedButtonClicked = localStorage.getItem('buttonClicked');
      const savedScore = localStorage.getItem('score');
      
      this.buttonClicked = savedButtonClicked === 'true';
      this.score = savedScore ? parseInt(savedScore, 10) : 0;
    },
    gotoChannel() {
      if (this.buttonClicked) return;

      this.score += this.clickValue;
      localStorage.setItem('score', this.score);

      // Отключаем кнопку после первого клика
      this.buttonClicked = true;
      localStorage.setItem('buttonClicked', 'true'); 
    }
  }
};
</script>

<style scoped>
.container {
    margin-top: 375px;
}
.task1 {
    background-color: rgb(103, 153, 99);
    width: 450px;
    height: 80px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
}
.ref {
    width: 133px;
    height: 80px;
    border: none;
    border-radius: 25px;
    background-color: rgb(99, 148, 107);
    cursor: pointer;
    color: white;
  }
  .game {
    width: 133px;
    height: 80px;
    border: none;
    border-radius: 25px;
    background-color: rgb(99, 148, 107);
    cursor: pointer;
    color: white;
  }
  .task {
    width: 133px;
    height: 80px;
    border: none;
    border-radius: 25px;
    background-color: rgb(73, 116, 70);
    cursor: pointer;
    color: white;
  }
  h3 {
    color: rgb(255, 255, 255);
    margin-top: 5px;
    position: fixed;
    margin-left: 135px;
    font-size: 20px;
  }
  h4 {
    color: white;
    position: fixed;
    margin-left: 150px;
    margin-top: 30px;
  }
  .cucu {
    margin-right: 350px;
  }
</style>
