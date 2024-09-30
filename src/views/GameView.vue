<template>
    <div><h1>{{score}}</h1></div>
    <center>
    <button class="click" @click="click()"><img class="Cucumber" src="https://i.postimg.cc/L8h57Z2R/IMG-0722.png" width="250px" height="250px"></button>
    </center>
    
  
    <center><div class="container">
    <button class="ref"><router-link style="text-decoration: none; color: inherit;" to="/ref">Ref</router-link></button>
    <button class="game"><b>Game</b></button>
    <button class="task"><router-link style="text-decoration: none; color: inherit;" to="/task">Task</router-link></button>
    </div>
    </center>
    </template>
    
    <script>
    import { ref } from 'vue';
    
    export default {
    
      setup() {
        const score = ref(localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0);
    
        const click = () => {
          score.value += 1;
          saveScore();
        };
    
        const saveScore = () => {
          localStorage.setItem('score', score.value);
        };
    
        return {
          score,
          click,
        };
      },
    };
    </script>
    
    <style scoped>
    .body {
        text-align: center;
    }
    
    div {
        text-align: center
        
    }
    .click {
      margin-top: 150px;
      border: none;
      background-image: url("https://i.postimg.cc/DzkhgWzx/IMG-0723.jpg");
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
      background-color: rgb(73, 116, 70);
      cursor: pointer;
      color: white;
    }
    .task {
      width: 133px;
      height: 80px;
      border: none;
      border-radius: 25px;
      background-color: rgb(99, 148, 107);
      cursor: pointer;
      color: white;
    }
    </style>
    
    
    
    
    