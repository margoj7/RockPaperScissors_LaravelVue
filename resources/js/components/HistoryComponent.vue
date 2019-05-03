<template>
  <div class="row justify-content-center">
    <div class="col-md-8 content">
      <h3 class="routeDescription">Game history</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Player Choice</th>
            <th>Computer Choice</th>
            <th>Winner</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="gameScore in gameScores" :key="gameScore.id">
            <td>{{ gameScore.id }}</td>
            <td>{{ gameScore.playerChoice }}</td>
            <td>{{ gameScore.computerChoice }}</td>
            <td>{{ gameScore.winner }}</td>
            <td>{{ gameScore.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameScores: []
    };
  },
  created() {
    let uri = "http://localhost:8000/api/history";
    this.axios.get(uri).then(response => {
      this.gameScores = response.data.data;
    });
  }
};
</script>