<template>
  <div class="row justify-content-center">
    <div class="col-md-8 content">
      <h3 class="routeDescription">The game itself!</h3>
      <h5>Chose one</h5>
      <div class="container-fluid gameButtons" id="gameButtons">
        <button v-on:click="choose('Rock')">Rock</button>
        <button v-on:click="choose('Paper')">Paper</button>
        <button v-on:click="choose('Scissors')">Scissors</button>
      </div>
      <div>
        <p>{{ playerChoice }}</p>
        <p>{{ computerChoice }}</p>
        <p>{{ winner }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      playerChoice: null,
      computerChoice: null,
      winner: null
    };
  },
  methods: {
    choose: function(playerChoice) {
      this.playerChoice = "Player chose " + playerChoice;
      const possiblePicks = ["Rock", "Paper", "Scissors"];
      let computerChoice = possiblePicks[Math.floor(Math.random() * 3)];
      this.computerChoice = "Computer chose " + computerChoice;
      let winner = "Player";
      if (playerChoice == computerChoice) {
        winner = "Draw";
      } else if (
        (computerChoice == "Rock" && playerChoice == "Scissors") ||
        (computerChoice == "Scissors" && playerChoice == "Paper") ||
        (computerChoice == "Paper" && playerChoice == "Rock")
      ) {
        winner = "Computer";
      }
      if (winner == "Draw"){
        this.winner = "Draw";
      } else {
      this.winner = winner + " won";
      }
      axios({
        url: "http://localhost:8000/api/game/play",
        method: "post",
        data: {
          playerChoice: playerChoice,
          computerChoice: computerChoice,
          winner: winner
        }
      });
    }
  }
};
</script>